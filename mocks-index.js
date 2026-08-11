// ==================================================================================
// Mocks Registry — this is the ONLY file you need to touch to add/remove/rename mocks.
// ==================================================================================
// Each entry needs: id (unique, no spaces), title (shown to user), and sections
// (a *_SECTIONS array defined in that mock's own data file, loaded via <script> in
// index.html before this file).
//
// TO ADD A NEW MOCK:
//   1. Create a new file, e.g. mock3-data.js, following the same pattern as
//      mock2-data.js (copy it as a starting point) — define `const MOCK3_SECTIONS = [...]`.
//   2. Add a <script src="mock3-data.js"></script> line in index.html, BEFORE the
//      <script src="mocks-index.js"></script> line and BEFORE app.js.
//   3. Add one more object below: { id: "mock3", title: "Mock Test 3", sections: MOCK3_SECTIONS }
//   That's it — it will automatically show up on the Mock Selector screen.
// ==================================================================================

const MOCKS = [
  {
    id: "mock1",
    title: "Mock — Question Bank",
    description: "526 questions across English, Quant, Reasoning, and Professional Knowledge (DBMS, OS, Networks, DSA, OOPS, Software Engineering, COA & Microcontroller).",
    sections: MOCK1_SECTIONS,
  },
  {
    id: "mock2",
    title: "Mock Test 1 (Prelims)",
    description: "Mock Test 1 with questions across English, Quant, Reasoning, and Professional Knowledge (DBMS, OS, Networks, DSA, OOPS, Software Engineering, COA & Microcontroller etc.).",
    sections: MOCK2_SECTIONS,
  },
  {
  id: "mock3",
  title: "Mock Test 2 (Prelims)",
  description: "Exam Level Mock Test 3 with questions across English, Quant, Reasoning, and Professional Knowledge (DBMS, OS, Networks, DSA, OOPS, Software Engineering, COA & Microcontroller etc.).",
  sections: MOCK3_SECTIONS,
},
  // Add more mocks here, e.g.:
  // {
  //   id: "mock3",
  //   title: "Mock Test 3",
  //   description: "Your description here.",
  //   sections: MOCK3_SECTIONS,
  // },
];
