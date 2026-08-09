// ==================================================================================
// Mock Test 2 — TEMPLATE
// ==================================================================================
// This is a starter template so you can add a second (or third, fourth...) mock test.
//
// HOW TO ADD YOUR OWN QUESTIONS:
// 1. Copy the pattern below. Each section needs: id, title, and a questions array.
// 2. Each question needs exactly 5 options, and "correct" is the LETTER (A/B/C/D/E)
//    matching the correct option's position (A = options[0], B = options[1], etc).
// 3. You can use simple HTML inside "question", "options", and "explanation" text,
//    e.g. <b>bold</b>, <i>italic</i>, <br/> for a line break, <sup>2</sup> for x².
// 4. Delete the sample questions below and paste in your real ones — keep the same
//    {topic, question, options, correct, explanation} shape for every question.
// 5. Once this file has your real questions, open mocks-index.js and make sure
//    MOCK2_SECTIONS is included there (it already is, by default).
// 6. Make sure index.html loads this file with a <script> tag (it already does).
//
// You can rename "Mock Test 2" to anything you like in mocks-index.js (e.g.
// "IBPS SO IT Officer — Sectional Test", "Weekly Test 12", etc).
// ==================================================================================

const MOCK2_SECTIONS = [
  {
    id: "english",
    title: "English Language",
    questions: [
      {
        topic: "Vocabulary",
        question: "Choose the word most SIMILAR in meaning to 'METICULOUS'.",
        options: ["Careless", "Extremely careful and precise", "Fast", "Confused", "Lazy"],
        correct: "B",
        explanation: "'Meticulous' means showing great attention to detail; very careful and precise."
      },
      {
        topic: "Grammar",
        question: "Choose the correctly punctuated sentence.",
        options: [
          "Its a beautiful day.",
          "It's a beautiful day.",
          "Its' a beautiful day.",
          "Its a, beautiful day.",
          "It is a beautiful, day."
        ],
        correct: "B",
        explanation: "'It's' is the contraction of 'It is'. 'Its' (no apostrophe) is the possessive form, so 'It's a beautiful day' is correct here."
      }
    ]
  },
  {
    id: "quant",
    title: "Quantitative Aptitude",
    questions: [
      {
        topic: "Percentage",
        question: "What is 20% of 150?",
        options: ["20", "25", "30", "35", "40"],
        correct: "C",
        explanation: "20% of 150 = 0.20 &times; 150 = 30."
      },
      {
        topic: "Average",
        question: "Find the average of 10, 20, 30, 40, and 50.",
        options: ["25", "28", "30", "32", "35"],
        correct: "C",
        explanation: "Sum = 10+20+30+40+50 = 150. Average = 150 / 5 = 30."
      }
    ]
  },
  {
    id: "reasoning",
    title: "Reasoning Ability",
    questions: [
      {
        topic: "Series",
        question: "Find the next number: 2, 4, 8, 16, ?",
        options: ["24", "28", "30", "32", "36"],
        correct: "D",
        explanation: "Each term is double the previous term: 2, 4, 8, 16, 32."
      },
      {
        topic: "Direction Sense",
        question: "Ravi walks 4 km North, then turns right and walks 3 km. How far is he from the start?",
        options: ["3 km", "4 km", "5 km", "6 km", "7 km"],
        correct: "C",
        explanation: "This forms a right triangle with legs 4 km and 3 km. Distance = &radic;(4&sup2;+3&sup2;) = &radic;(16+9) = &radic;25 = 5 km."
      }
    ]
  },
  {
    id: "pk",
    title: "Professional Knowledge",
    questions: [
      {
        topic: "DBMS",
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE", "CREATE"],
        correct: "C",
        explanation: "SELECT is the SQL command used to query and retrieve data from one or more tables."
      },
      {
        topic: "OS",
        question: "Which of these is an example of an Operating System?",
        options: ["MS Word", "Windows", "Google Chrome", "MySQL", "Photoshop"],
        correct: "B",
        explanation: "Windows is an Operating System; the others are application software that run on top of an OS."
      }
    ]
  }
];
