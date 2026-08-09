# Ways to Officer — IBPS SO IT Mock Test App

A free, static, browser-based mock test app for IBPS SO IT Officer preparation. Comes with **Mock Test 1**
pre-loaded (526 questions: English, Quantitative Aptitude, Reasoning, and Professional Knowledge — DBMS, OS,
Networks, DSA, OOPS, Software Engineering, COA & Microcontrollers) plus a **Mock Test 2** starter template you
can fill in with your own questions. You can add as many mocks as you like.

## Login
- **Username:** `Ways2officer`
- **Password:** `Dpksanu`

(This is a simple client-side gate for casual access control only — since this is a static site with no
server, the credentials live in `app.js` and are visible to anyone who views the page source. Do not use
this for anything requiring real security.)

## Features
- **Mock Selector** screen — pick from any number of mocks, each independent
- Section-wise tests (English / Quant / Reasoning / Professional Knowledge) or one continuous **Full Mock**
  per selected mock
- Countdown timer per section, auto-advances to the next section (or submits) when time runs out
- Question palette showing answered / not-answered / not-visited status, click to jump to any question
- Save & Next, Previous, Clear Response
- Results screen: overall score, accuracy %, section-wise breakdown
- Full review of every question — your answer vs. the correct answer, color-coded, with the explanation
- Filter the review by All / Correct / Wrong / Unanswered
- 100% static (HTML/CSS/JS only) — no backend, no database, works entirely in the browser

## File Structure

```
index.html          the app shell (all screens) — you rarely need to edit this
style.css            all styling / branding colors
app.js               all app logic (login, timer, navigation, scoring) — edit CONFIG values here
mock1-data.js        Mock Test 1's question data (526 questions, already filled in)
mock2-data.js        Mock Test 2's question data (template with a few sample questions)
mocks-index.js       registry that lists which mocks appear on the Mock Selector screen
README.md            this file
```

---

## ➕ How to Add a New Mock (e.g. Mock Test 3)

You do **not** need to touch `app.js`, `index.html`, or `style.css` for this — just 3 steps:

**Step 1 — Create the data file.** Duplicate `mock2-data.js`, rename it `mock3-data.js`, and inside it rename
the variable from `MOCK2_SECTIONS` to `MOCK3_SECTIONS`. Replace the sample questions with your real ones,
keeping the same shape for every question:

```js
{
  topic: "DBMS",
  question: "Which SQL command retrieves data from a table?",
  options: ["INSERT", "UPDATE", "SELECT", "DELETE", "CREATE"],
  correct: "C",   // the LETTER matching the right option (A=first option, B=second, ... E=fifth)
  explanation: "SELECT is used to query and retrieve data from a table."
}
```
You can use light HTML inside any text field: `<b>bold</b>`, `<i>italic</i>`, `<br/>` for a line break,
`<sup>2</sup>` for a superscript like x².

**Step 2 — Load the file.** Open `index.html`, find this block near the bottom, and add one line for your
new file (before `mocks-index.js` and `app.js`):
```html
<script src="mock1-data.js"></script>
<script src="mock2-data.js"></script>
<script src="mock3-data.js"></script>   <!-- add this line -->
<script src="mocks-index.js"></script>
<script src="app.js"></script>
```

**Step 3 — Register it.** Open `mocks-index.js` and add an entry to the `MOCKS` array:
```js
{
  id: "mock3",
  title: "Mock Test 3",
  description: "Whatever description you want shown on the card.",
  sections: MOCK3_SECTIONS,
},
```

Save everything, refresh the page (or push to GitHub — see below) — your new mock now appears automatically
on the Mock Selector screen.

*Tip:* if you ever want to remove a mock, just delete its object from the `MOCKS` array in `mocks-index.js`
(you can leave the data file in place, unused, or delete it too).

---

## 🖥️ Setting Up GitHub in VS Code (so your edits auto-publish to the website)

This sets up a one-time connection between your computer, VS Code, and GitHub. After this, every time you
save changes and "push", your live website updates automatically within a minute or two.

### Part A — One-time setup

**1. Install Git** (skip if already installed — check by opening a terminal and typing `git --version`)
   - Windows: download from [git-scm.com](https://git-scm.com/downloads) and install with default options.
   - Mac: open Terminal and type `git --version` — it will prompt you to install if missing.

**2. Sign in to GitHub inside VS Code**
   - Open VS Code.
   - Click the **Accounts** icon in the bottom-left corner (person-shaped icon).
   - Click **Sign in with GitHub**, and follow the browser prompt to authorize VS Code.

**3. Create the GitHub repository**
   - Go to [github.com](https://github.com) in your browser and log in.
   - Click the **+** icon (top right) → **New repository**.
   - Name it, e.g. `ibps-so-it-mock-test`.
   - Keep it **Public** (required for free GitHub Pages).
   - Do NOT check "Add a README" (we already have one).
   - Click **Create repository**. Keep this page open — you'll need the repository URL shown there.

**4. Open your project folder in VS Code**
   - In VS Code: **File → Open Folder** → select the `mocktest` folder containing `index.html`,
     `app.js`, `style.css`, `mock1-data.js`, `mock2-data.js`, `mocks-index.js`, `README.md`.

**5. Connect the folder to your GitHub repository**
   - Open the **Source Control** panel in VS Code (the icon that looks like a branching tree, in the left
     sidebar, or press `Ctrl+Shift+G`).
   - Click **Initialize Repository** (this turns your folder into a Git project).
   - Click the **...** (More Actions) menu at the top of the Source Control panel → **Remote** →
     **Add Remote**.
   - Paste the repository URL from Step 3 (looks like
     `https://github.com/<your-username>/ibps-so-it-mock-test.git`), give it the name `origin`, press Enter.
   - Back in Source Control, type a message like "Initial commit" in the message box at the top, then click
     the checkmark ✓ (**Commit**).
   - Click **Sync Changes** (or **Publish Branch** if this is your first push) — VS Code pushes your files to
     GitHub. You may be asked to confirm your GitHub sign-in again — accept it.
   - Refresh your GitHub repository page in the browser — you should now see all your files there.

**6. Turn on GitHub Pages (makes it a live website)**
   - On your repository's GitHub page, click **Settings** (top menu) → **Pages** (left sidebar).
   - Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
   - Under **Branch**, choose `main`, folder `/ (root)`, click **Save**.
   - Wait 1–2 minutes, then refresh — GitHub shows your live URL, something like:
     `https://<your-username>.github.io/ibps-so-it-mock-test/`
   - That's your live mock test website. Share this link with anyone.

### Part B — Making changes later (your everyday workflow)

Every time you want to update a mock, add new questions, or tweak anything:

1. Edit the file(s) in VS Code (e.g. add questions to `mock2-data.js`) and save (`Ctrl+S`).
2. Open the **Source Control** panel (`Ctrl+Shift+G`). You'll see the changed files listed.
3. Type a short message describing what you changed (e.g. "Added Mock 3 questions") in the message box.
4. Click the checkmark ✓ to **Commit**.
5. Click **Sync Changes** to push it to GitHub.
6. Within 1–2 minutes, your live website automatically updates with the new content — no extra steps
   needed, GitHub Pages redeploys itself whenever you push to the `main` branch.

That's the whole loop: **Edit → Save → Commit → Sync Changes → website updates itself.**

---

## Customizing

- **Timer speed:** open `app.js` and change `SECONDS_PER_QUESTION` (currently 40 seconds/question) near
  the top of the file. Increase or decrease it to make sections faster or slower.
- **Login credentials:** open `app.js` and edit the `AUTH` object near the top.
- **Branding/colors:** open `style.css` and edit the CSS variables at the top (`--brand-blue`,
  `--brand-gold`, etc.) to match your channel branding.

## Notes
- Progress is kept only in memory for the current browser tab — refreshing or closing the tab mid-test
  will lose progress (this keeps the app simple and fully static, with no backend to store sessions).
- Works on desktop and mobile browsers.

