// ==================================================================================
// Ways to Officer — IBPS SO IT Mock Test App
// SECTIONS is loaded from questions.js as: [{id, title, questions: [{topic, question, options, correct, explanation}]}]
// ==================================================================================

// ---------- CONFIG ----------
const AUTH = { username: "Ways2officer" , password: "Dpksanu"};
const SECTION_TIME_SECONDS = 20 * 60; // tune this to change how long each section's timer runs

// ---------- STATE ----------
let state = {
  currentMock: null,       // the mock object the user picked from the selector
  activeSections: [],      // array of section objects being attempted in this run
  sectionIndex: 0,         // which section (within activeSections) we're on
  questionIndex: 0,        // which question within the current section
  answers: {},             // answers[sectionId][questionIndex] = optionIndex (0-4) or null
  visited: {},             // visited[sectionId][questionIndex] = true/false
  markedForReview: {},     // markedForReview[sectionId][questionIndex] = true/false
  timerSeconds: 0,
  timerInterval: null,
  results: null,           // computed after submission
};

// ---------- DOM SHORTCUTS ----------
const $ = (id) => document.getElementById(id);
const screens = {
  login: $("loginScreen"),
  mockSelect: $("mockSelectScreen"),
  dashboard: $("dashboardScreen"),
  instructions: $("instructionsScreen"),
  test: $("testScreen"),
  results: $("resultsScreen"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

// ==================================================================================
// LOGIN
// ==================================================================================
$("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const u = $("username").value.trim();
  const p = $("password").value;
  if (u === AUTH.username && p === AUTH.password) {
    $("loginError").classList.add("hidden");
    sessionStorage.setItem("w2o_logged_in", "1");
    $("logoutBtn").classList.remove("hidden");
    renderMockSelector();
    showScreen("mockSelect");
  } else {
    $("loginError").classList.remove("hidden");
  }
});

const watchLoginGuideBtn = $("watchLoginGuideBtn");

watchLoginGuideBtn.addEventListener("click", () => {
  window.open(
    "https://youtu.be/tQv1hJN-8go",
    "_blank"
  );
});

$("logoutBtn").addEventListener("click", () => {
  sessionStorage.removeItem("w2o_logged_in");
  clearInterval(state.timerInterval);
  $("logoutBtn").classList.add("hidden");
  $("headerTimer").classList.add("hidden");
  $("username").value = "";
  $("password").value = "";
  showScreen("login");
});

// Auto-login if session already active (e.g. page refresh within same tab session)
window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("w2o_logged_in") === "1") {
    $("logoutBtn").classList.remove("hidden");
    renderMockSelector();
    showScreen("mockSelect");
  } else {
    showScreen("login");
  }
});

// ==================================================================================
// MOCK SELECTOR
// ==================================================================================
function renderMockSelector() {
  const wrap = $("mockCards");
  wrap.innerHTML = "";
  MOCKS.forEach((mock) => {
    const totalQ = mock.sections.reduce((sum, s) => sum + s.questions.length, 0);
    const card = document.createElement("div");
    card.className = "section-card mock-card";
    card.innerHTML = `
      <h3>${mock.title}</h3>
      <div class="meta">${totalQ} Questions total &middot; ${mock.sections.length} sections</div>
      <div class="meta">${mock.description || ""}</div>
      <button class="btn btn-primary">Select This Mock</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      state.currentMock = mock;
      $("dashMockTitle").textContent = mock.title;
      renderDashboard();
      showScreen("dashboard");
    });
    wrap.appendChild(card);
  });
}

$("backToMocksBtn").addEventListener("click", () => {
  renderMockSelector();
  showScreen("mockSelect");
});

// ==================================================================================
// DASHBOARD
// ==================================================================================
function formatDuration(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.round((totalSeconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m} min`;
}

function renderDashboard() {
  const wrap = $("sectionCards");
  wrap.innerHTML = "";

  state.currentMock.sections.forEach((sec) => {

    const seconds = SECTION_TIME_SECONDS;

    const card = document.createElement("div");
    card.className = "section-card";

    card.innerHTML = `
      <h3>${sec.title}</h3>
      <div class="meta">
        ${sec.questions.length} Questions &middot; 20 min
      </div>

      <button
        class="btn btn-primary"
        data-section-id="${sec.id}">
        Start Section
      </button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      openInstructions([sec]);
    });

    wrap.appendChild(card);
  });
}

$("startFullMockBtn").addEventListener("click", () => {
  openInstructions(state.currentMock.sections);
});

// ==================================================================================
// INSTRUCTIONS
// ==================================================================================
let pendingSections = [];

function openInstructions(sectionsToRun) {

  pendingSections = sectionsToRun;

  const totalQ = sectionsToRun.reduce(
    (sum, s) => sum + s.questions.length,
    0
  );

  // Every section gets exactly 20 minutes
  const totalSeconds =
    sectionsToRun.length * SECTION_TIME_SECONDS;

  const title = sectionsToRun.length > 1
    ? "Full Mock Test — All Sections"
    : sectionsToRun[0].title;

  $("instrTitle").textContent = title;
  $("instrCount").textContent = totalQ;

  $("instrTime").textContent =
    sectionsToRun.length === 1
      ? "20 min"
      : formatDuration(totalSeconds);

  showScreen("instructions");
}

$("backToDashBtn").addEventListener("click", () => showScreen("dashboard"));

$("beginBtn").addEventListener("click", () => {
  startTest(pendingSections);
});

// ==================================================================================
// TEST ENGINE
// ==================================================================================
function startTest(sectionsToRun) {
  state.activeSections = sectionsToRun;
  state.sectionIndex = 0;
  state.questionIndex = 0;
  state.answers = {};
  state.visited = {};
  state.markedForReview = {};
  sectionsToRun.forEach((sec) => {
    state.answers[sec.id] = new Array(sec.questions.length).fill(null);
    state.visited[sec.id] = new Array(sec.questions.length).fill(false);
    state.markedForReview[sec.id] = new Array(sec.questions.length).fill(false);
  });

  startSectionTimer(state.activeSections[state.sectionIndex]);
  renderQuestion();
  showScreen("test");
  $("headerTimer").classList.remove("hidden");
}

function startSectionTimer(section) {

  clearInterval(state.timerInterval);

  // Every section gets exactly 20 minutes
  state.timerSeconds = SECTION_TIME_SECONDS;

  updateTimerDisplay();

  state.timerInterval = setInterval(() => {

    state.timerSeconds--;

    updateTimerDisplay();

    if (state.timerSeconds <= 0) {

      clearInterval(state.timerInterval);

      advanceToNextSectionOrFinish();
    }

  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.timerSeconds / 60).toString().padStart(2, "0");
  const s = (state.timerSeconds % 60).toString().padStart(2, "0");
  $("timerValue").textContent = `${m}:${s}`;
  $("headerTimer").classList.toggle("warning", state.timerSeconds <= 60);
}

function currentSection() {
  return state.activeSections[state.sectionIndex];
}

function renderQuestion() {
  const sec = currentSection();
  const qi = state.questionIndex;
  const q = sec.questions[qi];
  state.visited[sec.id][qi] = true;

  $("currentSectionLabel").textContent = sec.title;
  $("questionProgress").textContent = `Question ${qi + 1} of ${sec.questions.length}`;
  $("questionTopic").textContent = q.topic;
  $("questionText").innerHTML = q.question;

  const optionsList = $("optionsList");
  optionsList.innerHTML = "";
  const letters = ["A", "B", "C", "D", "E"];
  const selected = state.answers[sec.id][qi];

  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "option-item" + (selected === idx ? " selected" : "");
    div.innerHTML = `<span class="option-letter">${letters[idx]}</span><span class="option-text">${opt}</span>`;
    div.addEventListener("click", () => {
      state.answers[sec.id][qi] = idx;
      renderQuestion();
    });
    optionsList.appendChild(div);
  });

  renderPalette();
  $("prevBtn").disabled = state.sectionIndex === 0 && qi === 0;
  const isMarked = state.markedForReview[sec.id][qi];
  $("markForReviewBtn").classList.toggle("active", isMarked);
  $("markForReviewBtn").setAttribute("aria-pressed", String(isMarked));
  $("markForReviewBtn").textContent = isMarked ? "★ Marked for Review" : "☆ Mark for Review";
}

function renderPalette() {
  const sec = currentSection();
  const palette = $("questionPalette");
  palette.innerHTML = "";
  sec.questions.forEach((_, idx) => {
    const btn = document.createElement("button");
    let cls = "palette-item";
    if (state.answers[sec.id][idx] !== null) cls += " answered";
    else if (state.visited[sec.id][idx]) cls += " notanswered";
    if (state.markedForReview[sec.id][idx]) cls += " marked";
    if (idx === state.questionIndex) cls += " current";
    btn.className = cls;
    btn.textContent = idx + 1;
    const isMarked = state.markedForReview[sec.id][idx];
    btn.setAttribute("aria-label", `Question ${idx + 1}${isMarked ? ", marked for review" : ""}`);
    btn.addEventListener("click", () => {
      state.questionIndex = idx;
      renderQuestion();
    });
    palette.appendChild(btn);
  });
  const markedCount = state.markedForReview[sec.id].filter(Boolean).length;
  $("markedCount").textContent = `${markedCount} marked for review`;
}

$("nextBtn").addEventListener("click", () => {
  const sec = currentSection();
  if (state.questionIndex < sec.questions.length - 1) {
    state.questionIndex++;
    renderQuestion();
  } else {
    advanceToNextSectionOrFinish();
  }
});

$("prevBtn").addEventListener("click", () => {
  if (state.questionIndex > 0) {
    state.questionIndex--;
    renderQuestion();
  } else if (state.sectionIndex > 0) {
    state.sectionIndex--;
    state.questionIndex = currentSection().questions.length - 1;
    renderQuestion();
  }
});

$("clearBtn").addEventListener("click", () => {
  const sec = currentSection();
  state.answers[sec.id][state.questionIndex] = null;
  renderQuestion();
});

$("markForReviewBtn").addEventListener("click", () => {
  const sec = currentSection();
  const qi = state.questionIndex;
  state.markedForReview[sec.id][qi] = !state.markedForReview[sec.id][qi];
  renderQuestion();
});

$("submitSectionBtn").addEventListener("click", () => {
  if (confirm("Submit this section now? You won't be able to change answers after this.")) {
    advanceToNextSectionOrFinish();
  }
});

function advanceToNextSectionOrFinish() {
  clearInterval(state.timerInterval);
  if (state.sectionIndex < state.activeSections.length - 1) {
    state.sectionIndex++;
    state.questionIndex = 0;
    startSectionTimer(state.activeSections[state.sectionIndex]);
    renderQuestion();
    alert(`Moving to next section: ${currentSection().title}`);
  } else {
    finishTest();
  }
}

// ==================================================================================
// RESULTS
// ==================================================================================
function finishTest() {
  clearInterval(state.timerInterval);
  $("headerTimer").classList.add("hidden");

  const letters = ["A", "B", "C", "D", "E"];
  let totalCorrect = 0, totalWrong = 0, totalUnanswered = 0;
  const sectionStats = [];
  const allReviewItems = [];

  state.activeSections.forEach((sec) => {
    let correct = 0, wrong = 0, unanswered = 0;
    sec.questions.forEach((q, idx) => {
      const chosen = state.answers[sec.id][idx];
      const correctIdx = letters.indexOf(q.correct);
      let status;
      if (chosen === null) { status = "unanswered"; unanswered++; }
      else if (chosen === correctIdx) { status = "correct"; correct++; }
      else { status = "wrong"; wrong++; }

      allReviewItems.push({
        sectionTitle: sec.title,
        topic: q.topic,
        question: q.question,
        options: q.options,
        correctIdx,
        chosenIdx: chosen,
        explanation: q.explanation,
        status,
        markedForReview: state.markedForReview[sec.id][idx],
      });
    });
    totalCorrect += correct;
    totalWrong += wrong;
    totalUnanswered += unanswered;
    sectionStats.push({ title: sec.title, total: sec.questions.length, correct, wrong, unanswered });
  });

  state.results = { totalCorrect, totalWrong, totalUnanswered, sectionStats, allReviewItems };
  renderResults();
  showScreen("results");
}

function renderResults() {
  const r = state.results;
  const totalQ = r.totalCorrect + r.totalWrong + r.totalUnanswered;
  const pct = totalQ ? ((r.totalCorrect / totalQ) * 100).toFixed(1) : "0.0";

  $("scoreSummary").innerHTML = `
    <div class="score-box"><div class="big">${totalQ}</div><div class="label">Total Questions</div></div>
    <div class="score-box correct"><div class="big">${r.totalCorrect}</div><div class="label">Correct</div></div>
    <div class="score-box wrong"><div class="big">${r.totalWrong}</div><div class="label">Wrong</div></div>
    <div class="score-box"><div class="big">${r.totalUnanswered}</div><div class="label">Unanswered</div></div>
    <div class="score-box"><div class="big">${pct}%</div><div class="label">Accuracy</div></div>
  `;

  $("sectionBreakdown").innerHTML = r.sectionStats.map((s) => `
    <div class="breakdown-row">
      <span><b>${s.title}</b></span>
      <span>${s.correct} / ${s.total} correct &nbsp;(${s.wrong} wrong, ${s.unanswered} unanswered)</span>
    </div>
  `).join("");

  renderReviewList("all");
}

function renderReviewList(filter) {
  const letters = ["A", "B", "C", "D", "E"];
  const items = state.results.allReviewItems.filter((it) =>
    filter === "all" || (filter === "marked" ? it.markedForReview : it.status === filter)
  );
  const list = $("reviewList");

  if (items.length === 0) {
    list.innerHTML = `<p style="color:var(--text-gray);">No questions in this category.</p>`;
    return;
  }

  list.innerHTML = items.map((it) => {
    const optionsHtml = it.options.map((opt, idx) => {
      let cls = "review-option";
      if (idx === it.correctIdx) cls += " correct-answer";
      if (idx === it.chosenIdx && idx !== it.correctIdx) cls += " your-wrong";
      if (idx === it.chosenIdx && idx === it.correctIdx) cls += " your-correct";
      let tag = "";
      if (idx === it.correctIdx) tag = " ✓ Correct Answer";
      if (idx === it.chosenIdx && idx !== it.correctIdx) tag = " ✗ Your Answer";
      return `<div class="${cls}">${letters[idx]}) ${opt}${tag}</div>`;
    }).join("");

    return `
      <div class="review-item ${it.status}${it.markedForReview ? " marked" : ""}">
        <div class="r-topic">${it.sectionTitle} &middot; ${it.topic}${it.markedForReview ? " &middot; ★ Marked for review" : ""}</div>
        <div class="r-question">${it.question}</div>
        ${optionsHtml}
        <div class="review-explanation"><b>Explanation:</b> ${it.explanation}</div>
      </div>
    `;
  }).join("");
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderReviewList(btn.dataset.filter);
  });
});

$("backToDashFromResultsBtn").addEventListener("click", () => {
  renderDashboard();
  showScreen("dashboard");
});

// Warn before leaving mid-test
window.addEventListener("beforeunload", (e) => {
  if (!screens.test.classList.contains("hidden")) {
    e.preventDefault();
    e.returnValue = "";
  }
});
