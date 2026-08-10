// ==================================================================================
// Mock Test 2 — Medium-to-Hard Practice Set (125 questions)
// English (25) + Quantitative Aptitude (25) + Reasoning Ability (25) +
// Professional Knowledge (50: DBMS, OS, Networks, DSA, OOPS, Software Engineering,
// COA, Cyber Security, Data Warehouse, Programming) — Professional Knowledge is last,
// matching the real exam order.
//
// Reading Comprehension, Cloze Test, Para Jumbles, Data Interpretation, and the
// Circular Seating Puzzle each display their shared passage/table/context directly
// above the question, so it's visible while answering.
// ==================================================================================

const MOCK2_SECTIONS = [
    {
        "id": "english",
        "title": "English Language",
        "questions": [
            {
                "topic": "RC",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Reading Comprehension — Read the passage, then answer Q1&ndash;Q5:</b><br/><br/>The proliferation of connected devices has outpaced the development of coherent privacy frameworks, leaving consumers exposed to data practices they neither fully understand nor meaningfully consent to. Terms-of-service agreements, often running to thousands of words, are rarely read in their entirety, yet clicking 'accept' is treated as informed consent under most existing legal regimes. Some jurisdictions have responded by mandating simplified disclosures, but critics contend that simplification often comes at the cost of precision, potentially obscuring the very practices it aims to clarify. Meanwhile, the aggregation of seemingly innocuous data points, such as location pings or app usage patterns, can yield surprisingly detailed profiles when combined algorithmically, a phenomenon regulators have struggled to address because no single data point, in isolation, appears sensitive. This mismatch between how privacy harms actually accumulate and how privacy law is structured to address them remains one of the central challenges of digital governance today.</div><b>Q:</b> Why is clicking 'accept' on terms-of-service agreements considered problematic as a form of consent, according to the passage?",
                "options": [
                    "Because it is illegal in most countries",
                    "Because users rarely read these lengthy agreements in full, yet the click is still treated as informed consent",
                    "Because terms-of-service agreements are always written in a foreign language",
                    "Because companies never enforce these agreements",
                    "Because such agreements are optional in every jurisdiction"
                ],
                "correct": "B",
                "explanation": "The passage states these agreements are 'rarely read in their entirety, yet clicking accept is treated as informed consent under most existing legal regimes.'"
            },
            {
                "topic": "RC",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Reading Comprehension — Read the passage, then answer Q1&ndash;Q5:</b><br/><br/>The proliferation of connected devices has outpaced the development of coherent privacy frameworks, leaving consumers exposed to data practices they neither fully understand nor meaningfully consent to. Terms-of-service agreements, often running to thousands of words, are rarely read in their entirety, yet clicking 'accept' is treated as informed consent under most existing legal regimes. Some jurisdictions have responded by mandating simplified disclosures, but critics contend that simplification often comes at the cost of precision, potentially obscuring the very practices it aims to clarify. Meanwhile, the aggregation of seemingly innocuous data points, such as location pings or app usage patterns, can yield surprisingly detailed profiles when combined algorithmically, a phenomenon regulators have struggled to address because no single data point, in isolation, appears sensitive. This mismatch between how privacy harms actually accumulate and how privacy law is structured to address them remains one of the central challenges of digital governance today.</div><b>Q:</b> What tension does the passage identify regarding simplified privacy disclosures?",
                "options": [
                    "They are universally praised as a perfect solution",
                    "They are illegal in most jurisdictions",
                    "Simplification may improve readability but can sacrifice precision, potentially obscuring important practices",
                    "They eliminate the need for terms-of-service agreements entirely",
                    "They have no effect on consumer understanding"
                ],
                "correct": "C",
                "explanation": "The passage states critics contend that 'simplification often comes at the cost of precision, potentially obscuring the very practices it aims to clarify.'"
            },
            {
                "topic": "RC",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Reading Comprehension — Read the passage, then answer Q1&ndash;Q5:</b><br/><br/>The proliferation of connected devices has outpaced the development of coherent privacy frameworks, leaving consumers exposed to data practices they neither fully understand nor meaningfully consent to. Terms-of-service agreements, often running to thousands of words, are rarely read in their entirety, yet clicking 'accept' is treated as informed consent under most existing legal regimes. Some jurisdictions have responded by mandating simplified disclosures, but critics contend that simplification often comes at the cost of precision, potentially obscuring the very practices it aims to clarify. Meanwhile, the aggregation of seemingly innocuous data points, such as location pings or app usage patterns, can yield surprisingly detailed profiles when combined algorithmically, a phenomenon regulators have struggled to address because no single data point, in isolation, appears sensitive. This mismatch between how privacy harms actually accumulate and how privacy law is structured to address them remains one of the central challenges of digital governance today.</div><b>Q:</b> What phenomenon does the passage describe regarding the aggregation of 'seemingly innocuous' data points?",
                "options": [
                    "Individual data points become MORE sensitive when isolated from others",
                    "Combining multiple non-sensitive data points algorithmically can create surprisingly detailed personal profiles",
                    "Aggregated data automatically becomes anonymous",
                    "Regulators have fully solved this problem through existing law",
                    "Location data cannot be combined with app usage data"
                ],
                "correct": "B",
                "explanation": "The passage states that aggregating innocuous data points 'can yield surprisingly detailed profiles when combined algorithmically.'"
            },
            {
                "topic": "RC",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Reading Comprehension — Read the passage, then answer Q1&ndash;Q5:</b><br/><br/>The proliferation of connected devices has outpaced the development of coherent privacy frameworks, leaving consumers exposed to data practices they neither fully understand nor meaningfully consent to. Terms-of-service agreements, often running to thousands of words, are rarely read in their entirety, yet clicking 'accept' is treated as informed consent under most existing legal regimes. Some jurisdictions have responded by mandating simplified disclosures, but critics contend that simplification often comes at the cost of precision, potentially obscuring the very practices it aims to clarify. Meanwhile, the aggregation of seemingly innocuous data points, such as location pings or app usage patterns, can yield surprisingly detailed profiles when combined algorithmically, a phenomenon regulators have struggled to address because no single data point, in isolation, appears sensitive. This mismatch between how privacy harms actually accumulate and how privacy law is structured to address them remains one of the central challenges of digital governance today.</div><b>Q:</b> Why have regulators reportedly struggled to address the data aggregation phenomenon described in the passage?",
                "options": [
                    "Because no laws exist anywhere addressing data privacy",
                    "Because no single data point, viewed in isolation, appears sensitive enough to regulate",
                    "Because aggregation is technically impossible",
                    "Because companies refuse to collect any data",
                    "Because users always opt out of data collection"
                ],
                "correct": "B",
                "explanation": "The passage explains this is 'a phenomenon regulators have struggled to address because no single data point, in isolation, appears sensitive.'"
            },
            {
                "topic": "RC",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Reading Comprehension — Read the passage, then answer Q1&ndash;Q5:</b><br/><br/>The proliferation of connected devices has outpaced the development of coherent privacy frameworks, leaving consumers exposed to data practices they neither fully understand nor meaningfully consent to. Terms-of-service agreements, often running to thousands of words, are rarely read in their entirety, yet clicking 'accept' is treated as informed consent under most existing legal regimes. Some jurisdictions have responded by mandating simplified disclosures, but critics contend that simplification often comes at the cost of precision, potentially obscuring the very practices it aims to clarify. Meanwhile, the aggregation of seemingly innocuous data points, such as location pings or app usage patterns, can yield surprisingly detailed profiles when combined algorithmically, a phenomenon regulators have struggled to address because no single data point, in isolation, appears sensitive. This mismatch between how privacy harms actually accumulate and how privacy law is structured to address them remains one of the central challenges of digital governance today.</div><b>Q:</b> What does the passage identify as 'one of the central challenges of digital governance today'?",
                "options": [
                    "The lack of internet access in rural areas",
                    "The mismatch between how privacy harms accumulate and how privacy law is structured to address them",
                    "The high cost of connected devices",
                    "The absence of any terms-of-service agreements",
                    "The complete failure of encryption technology"
                ],
                "correct": "B",
                "explanation": "The passage's final sentence directly states this mismatch 'remains one of the central challenges of digital governance today.'"
            },
            {
                "topic": "Cloze",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Cloze Test — Read the passage, then choose the best word for each blank (Q6&ndash;Q10):</b><br/><br/>The transition to renewable energy has been (1)_____ by falling technology costs, yet grid operators still grapple with the (2)_____ nature of solar and wind generation. Unlike conventional power plants, which can be (3)_____ to meet demand at will, renewable sources fluctuate with weather conditions, requiring utilities to (4)_____ their forecasting models continuously. Some experts argue that without significant investment in storage infrastructure, this variability could (5)_____ the very reliability gains that renewables are meant to deliver.</div><b>Q:</b> Blank (1):",
                "options": [
                    "hindered",
                    "accelerated",
                    "reversed",
                    "halted",
                    "obscured"
                ],
                "correct": "B",
                "explanation": "'Accelerated' fits — falling technology costs speed up (accelerate) the transition to renewable energy."
            },
            {
                "topic": "Cloze",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Cloze Test — Read the passage, then choose the best word for each blank (Q6&ndash;Q10):</b><br/><br/>The transition to renewable energy has been (1)_____ by falling technology costs, yet grid operators still grapple with the (2)_____ nature of solar and wind generation. Unlike conventional power plants, which can be (3)_____ to meet demand at will, renewable sources fluctuate with weather conditions, requiring utilities to (4)_____ their forecasting models continuously. Some experts argue that without significant investment in storage infrastructure, this variability could (5)_____ the very reliability gains that renewables are meant to deliver.</div><b>Q:</b> Blank (2):",
                "options": [
                    "predictable",
                    "intermittent",
                    "constant",
                    "uniform",
                    "stable"
                ],
                "correct": "B",
                "explanation": "'Intermittent' fits — solar and wind generation fluctuate with weather, making them intermittent rather than constant sources."
            },
            {
                "topic": "Cloze",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Cloze Test — Read the passage, then choose the best word for each blank (Q6&ndash;Q10):</b><br/><br/>The transition to renewable energy has been (1)_____ by falling technology costs, yet grid operators still grapple with the (2)_____ nature of solar and wind generation. Unlike conventional power plants, which can be (3)_____ to meet demand at will, renewable sources fluctuate with weather conditions, requiring utilities to (4)_____ their forecasting models continuously. Some experts argue that without significant investment in storage infrastructure, this variability could (5)_____ the very reliability gains that renewables are meant to deliver.</div><b>Q:</b> Blank (3):",
                "options": [
                    "dismantled",
                    "throttled",
                    "ignored",
                    "sold",
                    "relocated"
                ],
                "correct": "B",
                "explanation": "'Throttled' fits — conventional plants can be ramped up or down (throttled) to match demand, unlike weather-dependent renewables."
            },
            {
                "topic": "Cloze",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Cloze Test — Read the passage, then choose the best word for each blank (Q6&ndash;Q10):</b><br/><br/>The transition to renewable energy has been (1)_____ by falling technology costs, yet grid operators still grapple with the (2)_____ nature of solar and wind generation. Unlike conventional power plants, which can be (3)_____ to meet demand at will, renewable sources fluctuate with weather conditions, requiring utilities to (4)_____ their forecasting models continuously. Some experts argue that without significant investment in storage infrastructure, this variability could (5)_____ the very reliability gains that renewables are meant to deliver.</div><b>Q:</b> Blank (4):",
                "options": [
                    "abandon",
                    "refine",
                    "delete",
                    "publicize",
                    "simplify"
                ],
                "correct": "B",
                "explanation": "'Refine' fits — utilities must continuously improve (refine) their forecasting models to handle renewable variability."
            },
            {
                "topic": "Cloze",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Cloze Test — Read the passage, then choose the best word for each blank (Q6&ndash;Q10):</b><br/><br/>The transition to renewable energy has been (1)_____ by falling technology costs, yet grid operators still grapple with the (2)_____ nature of solar and wind generation. Unlike conventional power plants, which can be (3)_____ to meet demand at will, renewable sources fluctuate with weather conditions, requiring utilities to (4)_____ their forecasting models continuously. Some experts argue that without significant investment in storage infrastructure, this variability could (5)_____ the very reliability gains that renewables are meant to deliver.</div><b>Q:</b> Blank (5):",
                "options": [
                    "guarantee",
                    "undermine",
                    "celebrate",
                    "replicate",
                    "ignore"
                ],
                "correct": "B",
                "explanation": "'Undermine' fits — the sentence warns that variability could undercut (undermine) the reliability gains renewables are meant to provide."
            },
            {
                "topic": "Error Spotting",
                "question": "Not until the results were officially announced (A) / did the candidates realize (B) / how close the election (C) / had actually been (D) / No error (E)",
                "options": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E"
                ],
                "correct": "E",
                "explanation": "This sentence is correct: 'Not until...' at the start of a sentence correctly triggers subject-auxiliary inversion ('did the candidates realize'). There is no error."
            },
            {
                "topic": "Error Spotting",
                "question": "The number of applicants who have qualified for the next round (A) / have increased significantly (B) / compared to last year's figures (C) / according to the latest report (D) / No error (E)",
                "options": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E"
                ],
                "correct": "B",
                "explanation": "The subject of the main clause is 'The number' (singular), even though 'of applicants' follows it. The verb should be 'has increased', not 'have increased'. The error is in part (B)."
            },
            {
                "topic": "Error Spotting",
                "question": "Scientists have discovered that the ancient civilization (A) / had developed a sophisticated irrigation system (B) / far more advanced than what historians (C) / had previously gave them credit for (D) / No error (E)",
                "options": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E"
                ],
                "correct": "D",
                "explanation": "After the auxiliary 'had', the past PARTICIPLE form is required, not the simple past. It should be 'had previously given', not 'had previously gave'. The error is in part (D)."
            },
            {
                "topic": "Error Spotting",
                "question": "If the committee would have approved the budget earlier, (A) / the project could have been completed (B) / well before the original deadline (C) / set by the stakeholders (D) / No error (E)",
                "options": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E"
                ],
                "correct": "A",
                "explanation": "In a third conditional (hypothetical past), the 'if' clause should use the past perfect ('had approved'), not 'would have approved'. The correct form is 'If the committee had approved...'. The error is in part (A)."
            },
            {
                "topic": "Error Spotting",
                "question": "Between you and I, (A) / the proposal presented yesterday (B) / seems far less viable (C) / than the one we discussed last week (D) / No error (E)",
                "options": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E"
                ],
                "correct": "A",
                "explanation": "As the object of the preposition 'between', the objective case pronoun 'me' is required, not the subjective 'I'. The correct form is 'Between you and me'. The error is in part (A)."
            },
            {
                "topic": "Sentence Improvement",
                "question": "The report, together with all supporting documents, <u>were submitted</u> before the deadline.",
                "options": [
                    "were submitted",
                    "was submitted",
                    "have been submitted",
                    "are submitted",
                    "No improvement needed"
                ],
                "correct": "B",
                "explanation": "'Together with...' is a parenthetical phrase and doesn't make the subject plural. The subject is 'The report' (singular), so the verb should be 'was submitted'."
            },
            {
                "topic": "Sentence Improvement",
                "question": "He is one of those managers who <u>always insist</u> on punctuality.",
                "options": [
                    "always insist",
                    "always insists",
                    "is always insisting",
                    "has always insisted",
                    "No improvement needed"
                ],
                "correct": "E",
                "explanation": "This is correct: in the construction 'one of those X who...', the relative clause verb agrees with the plural antecedent 'managers', so 'who always insist' is grammatically correct."
            },
            {
                "topic": "Sentence Improvement",
                "question": "The new regulations require that every employee <u>completes</u> the mandatory training within 30 days of joining.",
                "options": [
                    "completes",
                    "complete",
                    "will complete",
                    "completed",
                    "No improvement needed"
                ],
                "correct": "B",
                "explanation": "After verbs of demand/requirement ('require that'), formal grammar calls for the subjunctive mood, using the base form of the verb ('complete'), not the third-person singular 'completes'."
            },
            {
                "topic": "Sentence Improvement",
                "question": "The data suggests that consumer confidence, as well as spending, <u>have declined</u> this quarter.",
                "options": [
                    "have declined",
                    "has declined",
                    "had declining",
                    "are declining",
                    "No improvement needed"
                ],
                "correct": "B",
                "explanation": "'As well as spending' is a parenthetical phrase that does NOT make the subject plural. The subject is 'consumer confidence' (singular), so the verb should be 'has declined'."
            },
            {
                "topic": "Double Blanks",
                "question": "Although the merger was initially expected to _____ costs, internal audits revealed that overlapping departments had actually _____ operational expenses.",
                "options": [
                    "reduce, inflated",
                    "increase, reduced",
                    "eliminate, minimized",
                    "lower, decreased",
                    "ignore, doubled"
                ],
                "correct": "A",
                "explanation": "The sentence contrasts EXPECTATION with ACTUAL OUTCOME ('expected to...but actually'). The expectation was positive (reduce costs), while the real result was negative (inflated expenses), matching 'reduce, inflated'."
            },
            {
                "topic": "Double Blanks",
                "question": "Critics praised the novel for its _____ prose, even as they questioned whether its _____ plot could sustain reader interest until the final chapter.",
                "options": [
                    "clumsy, gripping",
                    "elegant, meandering",
                    "dull, focused",
                    "verbose, concise",
                    "plain, thrilling"
                ],
                "correct": "B",
                "explanation": "The sentence needs a positive word for the praised prose ('elegant') and a critical word for the questioned plot ('meandering', i.e., wandering/unfocused), matching the contrast set up by 'even as'."
            },
            {
                "topic": "Para Jumble",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Para Jumble — Read sentences P, Q, R, S, T, then answer:</b><br/><br/>P: Yet this same flexibility made the framework difficult to enforce consistently across member states.<br/>Q: The original treaty was deliberately drafted in broad, flexible language to accommodate diverse national interests.<br/>R: Over time, several states began interpreting key provisions in ways that suited their domestic political needs.<br/>S: This eventually prompted calls for a more precise, legally binding successor agreement.<br/>T: Compliance, as a result, varied dramatically from one signatory to another.</div><b>Q:</b> Choose the correct sequence:",
                "options": [
                    "QPRTS",
                    "QRPTS",
                    "PQRTS",
                    "QPTRS",
                    "QRTPS"
                ],
                "correct": "A",
                "explanation": "Logical flow: Q (treaty drafted broadly) then P ('yet this same flexibility' refers back to Q's flexible language, introducing the enforcement problem) then R (specific manifestation: states interpreting provisions differently) then T ('as a result' ties directly to R, showing varied compliance) then S (final consequence: calls for a successor agreement). The correct order is QPRTS."
            },
            {
                "topic": "Para Jumble",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Para Jumble — Read sentences P, Q, R, S, then answer:</b><br/><br/>P: As a result, many small-scale fishers found themselves excluded from waters they had fished for generations.<br/>Q: Coastal governments began issuing exclusive licenses to large commercial fishing conglomerates in the 1990s.<br/>R: This shift was driven largely by the promise of higher tax revenues and export earnings.<br/>S: The policy sparked widespread protests that eventually forced several governments to revisit their licensing frameworks.</div><b>Q:</b> Choose the correct sequence:",
                "options": [
                    "QRPS",
                    "QPRS",
                    "RQPS",
                    "QRSP",
                    "PQRS"
                ],
                "correct": "A",
                "explanation": "Logical flow: Q (governments began issuing exclusive licenses) then R (explains WHY, driven by tax/export promises) then P ('as a result' of this shift, small fishers were excluded) then S (this exclusion sparked protests, forcing policy revisits). The correct order is QRPS."
            },
            {
                "topic": "Vocabulary",
                "question": "Choose the word most SIMILAR in meaning to 'PARSIMONIOUS'.",
                "options": [
                    "Generous",
                    "Extremely frugal or stingy with money",
                    "Wasteful",
                    "Indifferent",
                    "Reckless"
                ],
                "correct": "B",
                "explanation": "'Parsimonious' describes someone extremely unwilling to spend money or resources, i.e., excessively frugal or stingy."
            },
            {
                "topic": "Vocabulary",
                "question": "Choose the word most OPPOSITE in meaning to 'CANDID'.",
                "options": [
                    "Honest",
                    "Evasive or secretive",
                    "Frank",
                    "Direct",
                    "Transparent"
                ],
                "correct": "B",
                "explanation": "'Candid' means being open, honest, and straightforward. Its opposite is 'Evasive' (avoiding giving direct or honest answers) or 'Secretive'."
            }
        ]
    },
    {
        "id": "quant",
        "title": "Quantitative Aptitude",
        "questions": [
            {
                "topic": "Simplification",
                "question": "(18% of 350) - (12% of 250) = ?",
                "options": [
                    "29",
                    "31",
                    "33",
                    "35",
                    "37"
                ],
                "correct": "C",
                "explanation": "18% of 350 = 63. 12% of 250 = 30. Difference = 63 - 30 = 33."
            },
            {
                "topic": "Simplification",
                "question": "(2/5 of 625) + (3/8 of 480) = ?",
                "options": [
                    "410",
                    "420",
                    "430",
                    "440",
                    "450"
                ],
                "correct": "C",
                "explanation": "2/5 of 625 = 250. 3/8 of 480 = 180. Sum = 250 + 180 = 430."
            },
            {
                "topic": "Number Series",
                "question": "Find the next number in the series: 4, 9, 20, 43, 90, ?",
                "options": [
                    "180",
                    "183",
                    "185",
                    "187",
                    "190"
                ],
                "correct": "C",
                "explanation": "Pattern: each term = (previous term × 2) + (an increasing value: 1, 2, 3, 4, 5). 4×2+1=9, 9×2+2=20, 20×2+3=43, 43×2+4=90, 90×2+5=185."
            },
            {
                "topic": "Number Series",
                "question": "Find the WRONG number in the series: 6, 12, 21, 33, 48, 66, 84",
                "options": [
                    "21",
                    "33",
                    "48",
                    "66",
                    "84"
                ],
                "correct": "E",
                "explanation": "The differences should increase by 3 each time: 6, 9, 12, 15, 18, 21. Checking: 12-6=6, 21-12=9, 33-21=12, 48-33=15, 66-48=18 (correct so far), but 84-66=18, which should have been 21. The correct term should be 66+21=87, making 84 the wrong number."
            },
            {
                "topic": "Quadratic Equations",
                "question": "I. x<sup>2</sup> + 2x - 15 = 0    II. y<sup>2</sup> - 2y - 24 = 0",
                "options": [
                    "x &gt; y",
                    "x &lt; y",
                    "x ≤ y",
                    "x ≥ y",
                    "No relation can be established"
                ],
                "correct": "E",
                "explanation": "Equation I: x²+2x-15=0 → (x+5)(x-3)=0 → x = -5 or 3. Equation II: y²-2y-24=0 → (y-6)(y+4)=0 → y = 6 or -4. Checking combinations: (x=-5,y=6)→x<y; (x=-5,y=-4)→x<y; (x=3,y=6)→x<y; (x=3,y=-4)→x>y. Since results are mixed, no definite relationship can be established."
            },
            {
                "topic": "Quadratic Equations",
                "question": "I. x<sup>2</sup> - 9x + 20 = 0    II. y<sup>2</sup> - 11y + 30 = 0",
                "options": [
                    "x &gt; y",
                    "x &lt; y",
                    "x ≤ y",
                    "x ≥ y",
                    "No relation can be established"
                ],
                "correct": "C",
                "explanation": "Equation I: x²-9x+20=0 → (x-4)(x-5)=0 → x = 4 or 5. Equation II: y²-11y+30=0 → (y-5)(y-6)=0 → y = 5 or 6. Checking combinations: (x=4,y=5)→x<y; (x=4,y=6)→x<y; (x=5,y=5)→x=y; (x=5,y=6)→x<y. Since x is always less than or equal to y (with equality possible), the relationship is x ≤ y."
            },
            {
                "topic": "Percentage",
                "question": "A number is first increased by 25% and then decreased by 20%. What is the net percentage change in the number?",
                "options": [
                    "+5%",
                    "0% (no change)",
                    "-5%",
                    "+10%",
                    "-10%"
                ],
                "correct": "B",
                "explanation": "Net multiplying factor = 1.25 × 0.80 = 1.00. Since the factor is exactly 1, there is no net change (0%) in the number."
            },
            {
                "topic": "Percentage",
                "question": "In an election between two candidates, the winner received 56% of the total votes polled and won by a margin of 4,200 votes. Find the total number of votes polled.",
                "options": [
                    "32,000",
                    "33,000",
                    "34,000",
                    "35,000",
                    "36,000"
                ],
                "correct": "D",
                "explanation": "Winner got 56%, loser got 44%, so the margin represents 56%-44%=12% of total votes. 12% = 4,200, so 1% = 350, and total votes = 350 × 100 = 35,000."
            },
            {
                "topic": "Profit & Loss",
                "question": "A trader marks his goods 40% above the cost price and then offers a discount of 15% on the marked price. Find his profit percentage.",
                "options": [
                    "15%",
                    "17%",
                    "19%",
                    "21%",
                    "23%"
                ],
                "correct": "C",
                "explanation": "Let Cost Price = 100. Marked Price = 140. Selling Price = 140 × 0.85 = 119. Profit = 119 - 100 = 19, so Profit% = 19%."
            },
            {
                "topic": "Profit & Loss",
                "question": "A shopkeeper professes to sell his goods at cost price but uses a false weight of 800 grams instead of 1000 grams. Find his profit percentage.",
                "options": [
                    "20%",
                    "22%",
                    "25%",
                    "28%",
                    "30%"
                ],
                "correct": "C",
                "explanation": "By giving only 800g while charging for 1000g (at cost price), his profit on the actual goods used = (1000-800)/800 × 100 = 200/800 × 100 = 25%."
            },
            {
                "topic": "Simple Interest",
                "question": "A sum of money amounts to Rs. 9,200 in 4 years and Rs. 11,600 in 7 years at simple interest. Find the principal.",
                "options": [
                    "Rs. 5,000",
                    "Rs. 5,500",
                    "Rs. 6,000",
                    "Rs. 6,500",
                    "Rs. 7,000"
                ],
                "correct": "C",
                "explanation": "SI for the extra 3 years (7-4) = 11,600 - 9,200 = Rs. 2,400, so SI per year = Rs. 800. SI for 4 years = 800 × 4 = Rs. 3,200. Principal = 9,200 - 3,200 = Rs. 6,000."
            },
            {
                "topic": "Compound Interest",
                "question": "Find the difference between Compound Interest and Simple Interest on Rs. 8,000 at 10% per annum for 2 years.",
                "options": [
                    "Rs. 60",
                    "Rs. 70",
                    "Rs. 80",
                    "Rs. 90",
                    "Rs. 100"
                ],
                "correct": "C",
                "explanation": "SI = (8000 × 10 × 2)/100 = Rs. 1,600. CI = 8000[(1.10)<sup>2</sup> - 1] = 8000[1.21-1] = 8000 × 0.21 = Rs. 1,680. Difference = 1,680 - 1,600 = Rs. 80."
            },
            {
                "topic": "Ratio & Proportion",
                "question": "Rs. 7,800 is divided among A, B, and C in the ratio 3:4:6. Find C's share.",
                "options": [
                    "Rs. 3,200",
                    "Rs. 3,400",
                    "Rs. 3,600",
                    "Rs. 3,800",
                    "Rs. 4,000"
                ],
                "correct": "C",
                "explanation": "Total parts = 3+4+6 = 13. C's share = (6/13) × 7,800 = Rs. 3,600."
            },
            {
                "topic": "Ratio & Proportion",
                "question": "A mixture of 60 litres contains milk and water in the ratio 2:1. How many litres of water should be added to make the ratio of milk to water 1:1?",
                "options": [
                    "15 litres",
                    "18 litres",
                    "20 litres",
                    "22 litres",
                    "25 litres"
                ],
                "correct": "C",
                "explanation": "Milk = 40 litres, Water = 20 litres (from the 2:1 ratio of 60 litres). For a 1:1 ratio, water needed = 40 litres (equal to milk), so water to be added = 40 - 20 = 20 litres."
            },
            {
                "topic": "Average",
                "question": "The average weight of 8 people increases by 2.5 kg when a new person replaces one of them who weighed 65 kg. Find the weight of the new person.",
                "options": [
                    "80 kg",
                    "82 kg",
                    "85 kg",
                    "88 kg",
                    "90 kg"
                ],
                "correct": "C",
                "explanation": "Total weight increase = 8 × 2.5 = 20 kg. New person's weight = 65 + 20 = 85 kg."
            },
            {
                "topic": "Average",
                "question": "The average marks of 25 students in a class is 68. If the average of the first 15 students is 72, find the average of the remaining 10 students.",
                "options": [
                    "58",
                    "60",
                    "62",
                    "64",
                    "66"
                ],
                "correct": "C",
                "explanation": "Total marks of 25 students = 25 × 68 = 1,700. Total marks of first 15 = 15 × 72 = 1,080. Remaining 10 students' total = 1,700 - 1,080 = 620, so their average = 620/10 = 62."
            },
            {
                "topic": "Time & Work",
                "question": "A can complete a piece of work in 20 days. B is 25% more efficient than A. In how many days can B alone complete the work?",
                "options": [
                    "14 days",
                    "15 days",
                    "16 days",
                    "17 days",
                    "18 days"
                ],
                "correct": "C",
                "explanation": "A's rate = 1/20 per day. Since B is 25% more efficient, B's rate = 1.25 × (1/20) = 1/16 per day. So B alone takes 16 days."
            },
            {
                "topic": "Time & Work",
                "question": "A, B, and C can complete a work in 12, 15, and 20 days respectively. They start working together, but A leaves after 3 days. In how many more days will B and C complete the remaining work?",
                "options": [
                    "3 days",
                    "3(3/7) days",
                    "4 days",
                    "3(1/2) days",
                    "3(5/7) days"
                ],
                "correct": "B",
                "explanation": "Combined rate of A+B+C = 1/12+1/15+1/20 = 5/60+4/60+3/60 = 12/60 = 1/5. Work done in 3 days = 3/5, leaving 2/5 of the work. B+C's combined rate = 1/15+1/20 = 4/60+3/60 = 7/60. Time needed = (2/5) ÷ (7/60) = (2/5) × (60/7) = 24/7 = 3(3/7) days."
            },
            {
                "topic": "Boats & Streams",
                "question": "A boat covers 24 km downstream in 2 hours and returns upstream in 3 hours. Find the speed of the boat in still water.",
                "options": [
                    "8 km/h",
                    "9 km/h",
                    "10 km/h",
                    "11 km/h",
                    "12 km/h"
                ],
                "correct": "C",
                "explanation": "Downstream speed = 24/2 = 12 km/h. Upstream speed = 24/3 = 8 km/h. Speed of boat in still water = (12+8)/2 = 10 km/h."
            },
            {
                "topic": "Time-Speed-Distance",
                "question": "A car travels from City X to City Y at 60 km/h and returns at 40 km/h. Find the average speed for the entire round trip.",
                "options": [
                    "45 km/h",
                    "46 km/h",
                    "48 km/h",
                    "50 km/h",
                    "52 km/h"
                ],
                "correct": "C",
                "explanation": "For equal distances at two different speeds, average speed = (2 × a × b)/(a+b) = (2 × 60 × 40)/(60+40) = 4,800/100 = 48 km/h."
            },
            {
                "topic": "Data Interpretation",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Data Interpretation — Study the table, then answer Q21&ndash;Q23:</b><br/><br/>Quarterly revenue (Rs. lakh) of 4 products:<br/><table style=\"width:100%;border-collapse:collapse;margin-top:8px;font-size:0.9rem;\"><tr style=\"background:#0D1B4C;color:white;\"><th style=\"padding:6px 10px;border:1px solid #ccc;text-align:left;\">Product</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q1</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q2</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q3</th></tr><tr><td style=\"padding:6px 10px;border:1px solid #ccc;\">P1</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">45</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">55</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">60</td></tr><tr style=\"background:#EEF2FA;\"><td style=\"padding:6px 10px;border:1px solid #ccc;\">P2</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">30</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">35</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">40</td></tr><tr><td style=\"padding:6px 10px;border:1px solid #ccc;\">P3</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">50</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">45</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">55</td></tr><tr style=\"background:#EEF2FA;\"><td style=\"padding:6px 10px;border:1px solid #ccc;\">P4</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">25</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">30</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">35</td></tr></table></div><b>Q:</b> What is the total revenue generated by all 4 products in Q2?",
                "options": [
                    "155",
                    "160",
                    "165",
                    "170",
                    "175"
                ],
                "correct": "C",
                "explanation": "Total Q2 revenue = 55 (P1) + 35 (P2) + 45 (P3) + 30 (P4) = 165."
            },
            {
                "topic": "Data Interpretation",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Data Interpretation — Study the table, then answer Q21&ndash;Q23:</b><br/><br/>Quarterly revenue (Rs. lakh) of 4 products:<br/><table style=\"width:100%;border-collapse:collapse;margin-top:8px;font-size:0.9rem;\"><tr style=\"background:#0D1B4C;color:white;\"><th style=\"padding:6px 10px;border:1px solid #ccc;text-align:left;\">Product</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q1</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q2</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q3</th></tr><tr><td style=\"padding:6px 10px;border:1px solid #ccc;\">P1</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">45</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">55</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">60</td></tr><tr style=\"background:#EEF2FA;\"><td style=\"padding:6px 10px;border:1px solid #ccc;\">P2</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">30</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">35</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">40</td></tr><tr><td style=\"padding:6px 10px;border:1px solid #ccc;\">P3</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">50</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">45</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">55</td></tr><tr style=\"background:#EEF2FA;\"><td style=\"padding:6px 10px;border:1px solid #ccc;\">P4</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">25</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">30</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">35</td></tr></table></div><b>Q:</b> What is the percentage increase in revenue of P4 from Q1 to Q3?",
                "options": [
                    "30%",
                    "35%",
                    "40%",
                    "45%",
                    "50%"
                ],
                "correct": "C",
                "explanation": "Increase = 35 - 25 = 10. Percentage increase = (10/25) × 100 = 40%."
            },
            {
                "topic": "Data Interpretation",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Data Interpretation — Study the table, then answer Q21&ndash;Q23:</b><br/><br/>Quarterly revenue (Rs. lakh) of 4 products:<br/><table style=\"width:100%;border-collapse:collapse;margin-top:8px;font-size:0.9rem;\"><tr style=\"background:#0D1B4C;color:white;\"><th style=\"padding:6px 10px;border:1px solid #ccc;text-align:left;\">Product</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q1</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q2</th><th style=\"padding:6px 10px;border:1px solid #ccc;\">Q3</th></tr><tr><td style=\"padding:6px 10px;border:1px solid #ccc;\">P1</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">45</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">55</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">60</td></tr><tr style=\"background:#EEF2FA;\"><td style=\"padding:6px 10px;border:1px solid #ccc;\">P2</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">30</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">35</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">40</td></tr><tr><td style=\"padding:6px 10px;border:1px solid #ccc;\">P3</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">50</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">45</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">55</td></tr><tr style=\"background:#EEF2FA;\"><td style=\"padding:6px 10px;border:1px solid #ccc;\">P4</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">25</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">30</td><td style=\"padding:6px 10px;border:1px solid #ccc;text-align:center;\">35</td></tr></table></div><b>Q:</b> What is the ratio of total revenue of P1 (across all 3 quarters) to total revenue of P3 (across all 3 quarters)?",
                "options": [
                    "16:15",
                    "15:16",
                    "17:15",
                    "8:7",
                    "4:3"
                ],
                "correct": "A",
                "explanation": "P1 total = 45+55+60 = 160. P3 total = 50+45+55 = 150. Ratio = 160:150, which simplifies (dividing by 10) to 16:15."
            },
            {
                "topic": "Mensuration",
                "question": "The radius of a circular garden is 21 m. Find its area. (Use π = 22/7)",
                "options": [
                    "1,216 sq m",
                    "1,256 sq m",
                    "1,386 sq m",
                    "1,466 sq m",
                    "1,512 sq m"
                ],
                "correct": "C",
                "explanation": "Area = πr² = (22/7) × 21 × 21 = 22 × 3 × 21 = 1,386 sq m."
            },
            {
                "topic": "Probability",
                "question": "From a well-shuffled deck of 52 playing cards, one card is drawn at random. What is the probability that it is either a King or a Queen?",
                "options": [
                    "1/13",
                    "2/13",
                    "3/13",
                    "4/13",
                    "1/26"
                ],
                "correct": "B",
                "explanation": "There are 4 Kings and 4 Queens, giving 8 favorable outcomes out of 52 total cards. Probability = 8/52 = 2/13."
            }
        ]
    },
    {
        "id": "reasoning",
        "title": "Reasoning Ability",
        "questions": [
            {
                "topic": "Syllogism",
                "question": "Statements: Some teachers are writers. All writers are readers.<br/>Conclusions: I. Some teachers are readers. II. All readers are writers.",
                "options": [
                    "Only I follows",
                    "Only II follows",
                    "Both I and II follow",
                    "Neither I nor II follows",
                    "Cannot be determined"
                ],
                "correct": "A",
                "explanation": "Some teachers are writers + All writers are readers → Some teachers are readers (I follows, a valid 'Some+All=Some' syllogism). II is a converse error ('All writers are readers' does not mean 'All readers are writers'), so II does not follow."
            },
            {
                "topic": "Syllogism",
                "question": "Statements: All squares are rectangles. No rectangle is a triangle.<br/>Conclusions: I. No square is a triangle. II. Some rectangles are squares.",
                "options": [
                    "Only I follows",
                    "Only II follows",
                    "Both I and II follow",
                    "Neither I nor II follows",
                    "Cannot be determined"
                ],
                "correct": "C",
                "explanation": "All squares are rectangles + No rectangle is a triangle → No square is a triangle (I follows, valid form). Also, since all squares are rectangles, by conversion, some rectangles must indeed be squares (II follows)."
            },
            {
                "topic": "Syllogism",
                "question": "Statements: No fruit is a vegetable. Some vegetables are green.<br/>Conclusions: I. No fruit is green. II. Some green things are not fruits.",
                "options": [
                    "Only I follows",
                    "Only II follows",
                    "Both I and II follow",
                    "Neither I nor II follows",
                    "Cannot be determined"
                ],
                "correct": "B",
                "explanation": "No fruit is vegetable + Some vegetables are green → Some green things (the ones that are vegetables) are definitely not fruits, so II follows. I ('No fruit is green') is too strong a claim, since other green things (not vegetables) could still be fruits, so I does not necessarily follow."
            },
            {
                "topic": "Blood Relations",
                "question": "Pointing to a man, a woman said, 'His mother is the only daughter-in-law of my mother.' How is the woman related to the man?",
                "options": [
                    "Mother",
                    "Sister",
                    "Aunt",
                    "Nephew's wife",
                    "Grandmother"
                ],
                "correct": "C",
                "explanation": "'The only daughter-in-law of my mother' is the wife of the woman's brother (her mother's only son). This woman is the man's mother, meaning the man is the son of the woman's brother — i.e., the man is the woman's nephew, and the woman is his aunt."
            },
            {
                "topic": "Blood Relations",
                "question": "A said to B, 'Your mother's husband's sister is my aunt.' How is A related to B?",
                "options": [
                    "Brother",
                    "Cousin",
                    "Uncle",
                    "Father",
                    "Nephew"
                ],
                "correct": "B",
                "explanation": "B's mother's husband is B's father. B's father's sister is B's paternal aunt. Since this same woman is also A's aunt, A's parent must be a sibling of B's father — making A and B cousins."
            },
            {
                "topic": "Blood Relations",
                "question": "Introducing a boy, a man said, 'He is the son of my father's only daughter's husband.' How is the boy related to the man?",
                "options": [
                    "Son",
                    "Brother",
                    "Nephew",
                    "Cousin",
                    "Grandson"
                ],
                "correct": "C",
                "explanation": "The man's father's only daughter is the man's own sister. Her husband is the man's brother-in-law. The son of that husband (and the man's sister) is the man's nephew (sister's son)."
            },
            {
                "topic": "Direction Sense",
                "question": "A person walks 8 km towards South, then turns right and walks 6 km, then turns right again and walks 8 km, then turns left and walks 4 km. How far and in which direction is he from the starting point?",
                "options": [
                    "6 km, West",
                    "10 km, West",
                    "4 km, North",
                    "10 km, East",
                    "8 km, West"
                ],
                "correct": "B",
                "explanation": "South 8 km (facing South) → turn right (now facing West) → 6 km West → turn right (now facing North) → 8 km North (exactly cancels the initial 8 km South) → turn left (now facing West) → 4 km West. Total westward movement = 6+4 = 10 km West, with zero net North-South displacement. Final position: 10 km West of start."
            },
            {
                "topic": "Direction Sense",
                "question": "Point P is 15 m East of Point Q. Point R is 8 m North of Point P. Point S is 8 m North of Point Q. What is the direction of R with respect to S?",
                "options": [
                    "North",
                    "South",
                    "East",
                    "West",
                    "South-West"
                ],
                "correct": "C",
                "explanation": "Taking Q as origin (0,0): P = (15,0). R = 8m North of P = (15,8). S = 8m North of Q = (0,8). R and S share the same North offset (8m), so R is directly 15m East of S — R is to the East of S."
            },
            {
                "topic": "Coding-Decoding",
                "question": "In a code, each letter of a word is alternately shifted +1 then -1 (1st letter +1, 2nd letter -1, 3rd letter +1, and so on). Using this rule, 'PENCIL' becomes 'QDOBJK'. What is the code for 'MARKET' using the same rule?",
                "options": [
                    "NZSJFS",
                    "NZSJFR",
                    "MZSJFS",
                    "NZTJFS",
                    "NZSJES"
                ],
                "correct": "A",
                "explanation": "Applying +1,-1,+1,-1,+1,-1 to M-A-R-K-E-T: M+1=N, A-1=Z (wraps around from A to Z), R+1=S, K-1=J, E+1=F, T-1=S. This gives the code 'NZSJFS'."
            },
            {
                "topic": "Coding-Decoding",
                "question": "If in a certain code language 'SUCCESS' is written as 'TVDDFTT' (each letter shifted forward by 1), what is the code for 'FAILURE'?",
                "options": [
                    "GBJMVSF",
                    "GBJMVFS",
                    "FBJMVSF",
                    "GAJMVSF",
                    "GBIMVSF"
                ],
                "correct": "A",
                "explanation": "Shifting each letter of FAILURE forward by 1: F→G, A→B, I→J, L→M, U→V, R→S, E→F. Combining gives 'GBJMVSF'."
            },
            {
                "topic": "Coding-Decoding",
                "question": "In a certain code, each letter is assigned a number equal to twice its position in the alphabet (A=2, B=4, C=6, ...). What is the code for the word 'CAB'?",
                "options": [
                    "6-2-4",
                    "3-1-2",
                    "6-1-4",
                    "5-2-4",
                    "6-2-2"
                ],
                "correct": "A",
                "explanation": "C is the 3rd letter, so its code is 3×2=6. A is the 1st letter, code=1×2=2. B is the 2nd letter, code=2×2=4. So 'CAB' is coded as '6-2-4'."
            },
            {
                "topic": "Inequality",
                "question": "Statements: P &gt; Q ≥ R = S &lt; T<br/>Conclusions: I. P &gt; S   II. Q &lt; T",
                "options": [
                    "Only I follows",
                    "Only II follows",
                    "Both I and II follow",
                    "Neither I nor II follows",
                    "Either I or II follows"
                ],
                "correct": "A",
                "explanation": "From P>Q≥R=S, we get P>S directly (I follows, since the chain from P to S includes at least one strict inequality). However, from Q≥R=S<T, we only know Q≥S and S<T; this does NOT guarantee Q<T (e.g., Q could be 10, S=5, T=6, satisfying Q≥S and S<T, but Q<T would be false). So II does not necessarily follow. Only I follows."
            },
            {
                "topic": "Inequality",
                "question": "Statements: A ≤ B &lt; C; C = D &gt; E<br/>Conclusions: I. A &lt; D   II. B &lt; D",
                "options": [
                    "Only I follows",
                    "Only II follows",
                    "Both I and II follow",
                    "Neither I nor II follows",
                    "Either I or II follows"
                ],
                "correct": "C",
                "explanation": "Since C=D, we can write A≤B<C=D, so A≤B<D, which means A<D (I follows, since B<D is strict). Also directly, B<C=D, so B<D (II follows)."
            },
            {
                "topic": "Inequality",
                "question": "Statements: X &gt; Y; Z &gt; Y; X &gt; W<br/>Conclusions: I. Z &gt; W   II. X &gt; Z",
                "options": [
                    "Only I follows",
                    "Only II follows",
                    "Both I and II follow",
                    "Neither I nor II follows",
                    "Either I or II follows"
                ],
                "correct": "D",
                "explanation": "We know X>Y, Z>Y, and X>W, but there is NO direct relationship established between Z and W, or between X and Z. Both conclusions require information not given, so neither I nor II follows."
            },
            {
                "topic": "Series",
                "question": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
                "options": [
                    "36",
                    "40",
                    "42",
                    "44",
                    "48"
                ],
                "correct": "C",
                "explanation": "This series follows the pattern n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, so the next term is 6×7=42."
            },
            {
                "topic": "Series",
                "question": "Find the next number in the series: 8, 10, 14, 20, 28, ?",
                "options": [
                    "34",
                    "36",
                    "38",
                    "40",
                    "42"
                ],
                "correct": "C",
                "explanation": "The differences between terms increase by 2 each time: 2, 4, 6, 8, and next 10. So the next term = 28 + 10 = 38."
            },
            {
                "topic": "Series",
                "question": "Find the WRONG number in the series: 1, 4, 10, 22, 46, 93",
                "options": [
                    "4",
                    "10",
                    "22",
                    "46",
                    "93"
                ],
                "correct": "E",
                "explanation": "Each term follows the pattern: (previous term × 2) + 2. 1×2+2=4, 4×2+2=10, 10×2+2=22, 22×2+2=46, and 46×2+2=94 (not 93). So 93 is the wrong number; it should be 94."
            },
            {
                "topic": "Ranking",
                "question": "In a queue, Simran is 18th from the front and 25th from the back. How many people are there in the queue in total?",
                "options": [
                    "40",
                    "41",
                    "42",
                    "43",
                    "44"
                ],
                "correct": "C",
                "explanation": "Total people = (Position from front) + (Position from back) - 1 = 18 + 25 - 1 = 42."
            },
            {
                "topic": "Ranking",
                "question": "Rakesh ranks 15th from the top and 22nd from the bottom in his class. How many students are there in the class in total?",
                "options": [
                    "34",
                    "35",
                    "36",
                    "37",
                    "38"
                ],
                "correct": "C",
                "explanation": "Total students = (Rank from top) + (Rank from bottom) - 1 = 15 + 22 - 1 = 36."
            },
            {
                "topic": "Ranking",
                "question": "Five boxes P, Q, R, S, T are stacked vertically. Box S is at the top. Box P is immediately above Box Q. Box R is below Box S but above Box T. Box Q is immediately above Box R. What is the position of Box P from the bottom?",
                "options": [
                    "2nd from bottom",
                    "3rd from bottom",
                    "4th from bottom",
                    "5th from bottom",
                    "1st from bottom"
                ],
                "correct": "C",
                "explanation": "Given S is at the top (position 1), and the chain P above Q above R above T must fit below S: positions from top are S(1), P(2), Q(3), R(4), T(5). Counting from the bottom (5 boxes total), P at position 2 from top is the 4th position from the bottom (since T=1st from bottom, R=2nd, Q=3rd, P=4th, S=5th from bottom)."
            },
            {
                "topic": "Puzzle",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Circular Seating Puzzle — Study the info, then answer Q21&ndash;Q23:</b><br/><br/>Five friends — A, B, C, D and E — sit around a circular table, all facing the center.<br/>• E sits immediately to the right of A.<br/>• B sits second to the right of A.<br/>• C sits immediately to the right of B.<br/>• D sits immediately to the left of A.<br/><br/><i>Solving the puzzle: Fix A's position and move clockwise (treated as 'right') around the table. E is immediately right of A (one seat clockwise from A). B is second to the right of A (two seats clockwise from A). C is immediately right of B (one more seat clockwise from B). D is immediately left of A (one seat counter-clockwise from A, which is the remaining seat). This gives the unique clockwise seating order: <b>A, E, B, C, D</b> (and back to A).</i></div><b>Q:</b> Who sits immediately to the left of C?",
                "options": [
                    "A",
                    "B",
                    "D",
                    "E",
                    "None of these"
                ],
                "correct": "B",
                "explanation": "In the clockwise order A-E-B-C-D, the seat immediately to the left (counter-clockwise) of C is occupied by B."
            },
            {
                "topic": "Puzzle",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Circular Seating Puzzle — Study the info, then answer Q21&ndash;Q23:</b><br/><br/>Five friends — A, B, C, D and E — sit around a circular table, all facing the center.<br/>• E sits immediately to the right of A.<br/>• B sits second to the right of A.<br/>• C sits immediately to the right of B.<br/>• D sits immediately to the left of A.<br/><br/><i>Solving the puzzle: Fix A's position and move clockwise (treated as 'right') around the table. E is immediately right of A (one seat clockwise from A). B is second to the right of A (two seats clockwise from A). C is immediately right of B (one more seat clockwise from B). D is immediately left of A (one seat counter-clockwise from A, which is the remaining seat). This gives the unique clockwise seating order: <b>A, E, B, C, D</b> (and back to A).</i></div><b>Q:</b> How is D placed with respect to B?",
                "options": [
                    "Immediately to the right of B",
                    "Second to the right of B",
                    "Immediately to the left of B",
                    "Second to the left of B",
                    "Third to the left of B"
                ],
                "correct": "B",
                "explanation": "In the order A-E-B-C-D (clockwise), moving two seats clockwise (to the right) from B lands on D (B→C→D). So D is second to the right of B."
            },
            {
                "topic": "Puzzle",
                "question": "<div style=\"background:#F4F6FA;border:1px solid #E1E5EE;border-radius:8px;padding:14px 16px;margin-bottom:14px;font-weight:400;font-size:0.92rem;line-height:1.6;color:#333;\"><b>Circular Seating Puzzle — Study the info, then answer Q21&ndash;Q23:</b><br/><br/>Five friends — A, B, C, D and E — sit around a circular table, all facing the center.<br/>• E sits immediately to the right of A.<br/>• B sits second to the right of A.<br/>• C sits immediately to the right of B.<br/>• D sits immediately to the left of A.<br/><br/><i>Solving the puzzle: Fix A's position and move clockwise (treated as 'right') around the table. E is immediately right of A (one seat clockwise from A). B is second to the right of A (two seats clockwise from A). C is immediately right of B (one more seat clockwise from B). D is immediately left of A (one seat counter-clockwise from A, which is the remaining seat). This gives the unique clockwise seating order: <b>A, E, B, C, D</b> (and back to A).</i></div><b>Q:</b> How many people sit between E and D when counted in the clockwise direction starting from E?",
                "options": [
                    "One",
                    "Two",
                    "Three",
                    "Four",
                    "None"
                ],
                "correct": "B",
                "explanation": "Starting from E and moving clockwise: E→B→C→D. The people between E and D in this direction are B and C — a total of two people."
            },
            {
                "topic": "Logical Reasoning",
                "question": "Statement: 'Employees who report workplace safety violations will be protected from any form of retaliation under the new company policy.' Which of the following can be logically concluded?",
                "options": [
                    "All workplace accidents will be eliminated entirely",
                    "Employees who do not report safety violations will automatically face disciplinary action",
                    "An employee who reports a violation and subsequently faces retaliation would be experiencing a breach of this policy protection",
                    "The policy applies only to senior management",
                    "Reporting violations is mandatory for all employees"
                ],
                "correct": "C",
                "explanation": "This follows directly from the stated protection: if an employee who reports a violation faces retaliation, that outcome directly contradicts/breaches the policy's explicit protection guarantee."
            },
            {
                "topic": "Logical Reasoning",
                "question": "Statement: 'After switching to a four-day work week on a trial basis, the company observed a 15% increase in overall productivity.' Which of the following, if true, would most WEAKEN the claim that the four-day work week caused this increase?",
                "options": [
                    "Employee satisfaction scores also improved during the trial period",
                    "The company simultaneously introduced new project management software during the same trial period",
                    "The four-day week trial lasted exactly three months",
                    "Employees reported feeling less stressed during the trial",
                    "The company's competitors also use a four-day work week"
                ],
                "correct": "B",
                "explanation": "Introducing new project management software at the SAME time provides an alternative explanation (a confounding variable) for the productivity increase, weakening the claim that the four-day week alone was the cause."
            }
        ]
    },
    {
        "id": "pk",
        "title": "Professional Knowledge",
        "questions": [
            {
                "topic": "DBMS",
                "question": "Which anomaly occurs when deleting a row inadvertently causes the loss of other important, unrelated information due to poor table design?",
                "options": [
                    "Insertion Anomaly",
                    "Deletion Anomaly",
                    "Update Anomaly",
                    "Referential Anomaly",
                    "Redundancy Anomaly"
                ],
                "correct": "B",
                "explanation": "A Deletion Anomaly occurs when removing a record unintentionally deletes other important data that happened to be stored in the same row, a symptom of insufficient normalization."
            },
            {
                "topic": "OS",
                "question": "If a system using the Banker's Algorithm is found to be in a 'safe state', what does this guarantee?",
                "options": [
                    "No deadlock will ever occur regardless of any future request pattern",
                    "There exists at least one safe sequence in which all processes can complete without deadlock",
                    "All processes will finish in the exact order they requested resources",
                    "The system currently has zero allocated resources",
                    "Every process immediately receives its maximum resource claim"
                ],
                "correct": "B",
                "explanation": "A 'safe state' guarantees that at least one ordering (safe sequence) of process execution exists that allows every process to complete without deadlock, given careful future allocation decisions."
            },
            {
                "topic": "Networks",
                "question": "In a TCP three-way handshake, Host A sends a SYN with sequence number 100. Host B replies with SYN-ACK using seq=500. What acknowledgment number will Host A use in its final ACK segment?",
                "options": [
                    "100",
                    "101",
                    "500",
                    "501",
                    "601"
                ],
                "correct": "D",
                "explanation": "The acknowledgment number equals the received sequence number plus 1. Host B's SYN-ACK had seq=500, so Host A's ACK will carry ack=501, confirming receipt."
            },
            {
                "topic": "DSA",
                "question": "What is the space complexity of Merge Sort (including the auxiliary array and recursion stack) when sorting n elements?",
                "options": [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n log n)",
                    "O(n^2)"
                ],
                "correct": "C",
                "explanation": "Merge Sort requires an auxiliary array of size O(n) for merging, which dominates the O(log n) recursion stack depth, giving overall space complexity O(n)."
            },
            {
                "topic": "OOPS",
                "question": "In Java, if a subclass defines a method with the same name and signature as a PRIVATE method in its parent class, what is the result?",
                "options": [
                    "It overrides the parent's private method",
                    "It causes a compile-time error",
                    "It creates an independent new method unrelated to the parent's private method (not overriding)",
                    "It causes a runtime exception",
                    "The subclass method automatically becomes private too"
                ],
                "correct": "C",
                "explanation": "Private methods are not inherited or visible to subclasses, so a same-named method in the subclass is treated as an entirely new, independent method rather than an override."
            },
            {
                "topic": "Software Engineering",
                "question": "In Function Point Analysis, which of the following is NOT one of the five standard components counted?",
                "options": [
                    "External Inputs",
                    "External Outputs",
                    "External Inquiries",
                    "Internal Logical Files",
                    "Cyclomatic Complexity"
                ],
                "correct": "E",
                "explanation": "Function Point Analysis counts External Inputs, External Outputs, External Inquiries, Internal Logical Files, and External Interface Files. Cyclomatic Complexity is a separate McCabe metric for code path complexity, unrelated to FPA."
            },
            {
                "topic": "COA",
                "question": "A cache has a hit ratio of 0.8, a hit time of 10 ns, and a miss penalty of 100 ns. What is the Average Memory Access Time (AMAT)?",
                "options": [
                    "20 ns",
                    "26 ns",
                    "28 ns",
                    "30 ns",
                    "32 ns"
                ],
                "correct": "D",
                "explanation": "AMAT = Hit Time + (Miss Rate × Miss Penalty) = 10 + (0.2 × 100) = 10 + 20 = 30 ns."
            },
            {
                "topic": "Cyber Security",
                "question": "In the RSA algorithm, if p = 3 and q = 11 are the two chosen prime numbers, what is the value of n (the modulus)?",
                "options": [
                    "14",
                    "20",
                    "30",
                    "33",
                    "44"
                ],
                "correct": "D",
                "explanation": "In RSA, n = p × q = 3 × 11 = 33, which forms part of both the public and private keys."
            },
            {
                "topic": "Data Warehouse",
                "question": "Dimension tables in a Snowflake Schema are typically normalized to which level, unlike the flat dimension tables of a Star Schema?",
                "options": [
                    "1NF only",
                    "2NF only",
                    "3NF (fully normalized)",
                    "Not normalized at all",
                    "BCNF is strictly mandatory"
                ],
                "correct": "C",
                "explanation": "Snowflake Schema dimension tables are further normalized (typically to 3NF), splitting them into related sub-dimension tables, unlike the deliberately denormalized flat dimension tables of a Star Schema."
            },
            {
                "topic": "Programming",
                "question": "What is the output of this Java code?<br/>int x = 5;<br/>System.out.println(x++ + ++x);",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13",
                    "14"
                ],
                "correct": "C",
                "explanation": "x++ (post-increment) evaluates to 5, then x becomes 6. ++x (pre-increment) then makes x = 7 and evaluates to 7. Sum = 5 + 7 = 12."
            },
            {
                "topic": "DBMS",
                "question": "Which SQL transaction isolation level prevents 'non-repeatable reads' but still allows 'phantom reads' to occur?",
                "options": [
                    "Read Uncommitted",
                    "Read Committed",
                    "Repeatable Read",
                    "Serializable",
                    "Snapshot"
                ],
                "correct": "C",
                "explanation": "Repeatable Read locks the rows it has read, preventing non-repeatable reads, but does not lock the range of a query, so new rows (phantoms) can still appear on re-execution. Serializable is the only level that prevents both."
            },
            {
                "topic": "OS",
                "question": "In a system with degree of multiprogramming n=8, if each process spends 40% of its time waiting for I/O, what is the approximate CPU utilization using the formula (1 - p^n)?",
                "options": [
                    "60%",
                    "75%",
                    "90%",
                    "99.93%",
                    "100%"
                ],
                "correct": "D",
                "explanation": "CPU Utilization = 1 - p^n = 1 - (0.4)^8. Since 0.4^8 ≈ 0.000655, Utilization ≈ 1 - 0.000655 = 0.999345, i.e., approximately 99.93%."
            },
            {
                "topic": "Networks",
                "question": "How many usable host addresses does a subnet with mask 255.255.255.192 (/26) provide?",
                "options": [
                    "30",
                    "62",
                    "64",
                    "126",
                    "254"
                ],
                "correct": "B",
                "explanation": "/26 leaves 6 host bits, giving 2^6 = 64 total addresses. Subtracting the network and broadcast addresses leaves 62 usable host addresses."
            },
            {
                "topic": "DSA",
                "question": "In a max-heap stored as a 0-indexed array, what are the indices of the left and right children of the node at index i?",
                "options": [
                    "i-1 and i+1",
                    "2i and 2i+1",
                    "2i+1 and 2i+2",
                    "i/2 and i/2+1",
                    "2i-1 and 2i"
                ],
                "correct": "C",
                "explanation": "For a 0-indexed array representation of a heap, the left child of node i is at index 2i+1, and the right child is at index 2i+2."
            },
            {
                "topic": "OOPS",
                "question": "Which SOLID design principle states that a class should have only one reason to change?",
                "options": [
                    "Single Responsibility Principle",
                    "Open/Closed Principle",
                    "Liskov Substitution Principle",
                    "Interface Segregation Principle",
                    "Dependency Inversion Principle"
                ],
                "correct": "A",
                "explanation": "The Single Responsibility Principle (SRP) states that a class should have only one job or responsibility, and therefore only one reason to change."
            },
            {
                "topic": "Software Engineering",
                "question": "For a program's control flow graph with 9 edges, 7 nodes, and 1 connected component, what is its McCabe Cyclomatic Complexity, V(G) = E - N + 2P?",
                "options": [
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                "correct": "C",
                "explanation": "V(G) = E - N + 2P = 9 - 7 + 2(1) = 9 - 7 + 2 = 4."
            },
            {
                "topic": "COA",
                "question": "In an 8-bit system using 2's complement representation, what is the range of representable signed integers?",
                "options": [
                    "-127 to 127",
                    "-128 to 127",
                    "-128 to 128",
                    "0 to 255",
                    "-256 to 255"
                ],
                "correct": "B",
                "explanation": "With n=8 bits in 2's complement, the representable range is -2^(n-1) to 2^(n-1)-1, which for n=8 gives -128 to 127."
            },
            {
                "topic": "Cyber Security",
                "question": "Which hashing algorithm produces a 256-bit digest?",
                "options": [
                    "MD5",
                    "SHA-1",
                    "SHA-256",
                    "SHA-512",
                    "CRC32"
                ],
                "correct": "C",
                "explanation": "SHA-256, part of the SHA-2 family, produces a fixed 256-bit hash digest, unlike MD5 (128-bit), SHA-1 (160-bit), and SHA-512 (512-bit)."
            },
            {
                "topic": "Data Warehouse",
                "question": "If a fact table's primary key is a composite of Time, Product, and Store dimension keys, what does this combination define?",
                "options": [
                    "The measure of the fact table",
                    "The grain of the fact table",
                    "A derived attribute",
                    "A concept hierarchy",
                    "An aggregate table"
                ],
                "correct": "B",
                "explanation": "The 'grain' of a fact table refers to the level of detail at which facts are recorded, which is defined by exactly which combination of dimension keys forms its primary key."
            },
            {
                "topic": "Programming",
                "question": "What is the output of this Python code?<br/>a = [1, 2, 3, 4, 5]<br/>print(a[1:4:2])",
                "options": [
                    "[1, 3]",
                    "[2, 4]",
                    "[2, 3, 4]",
                    "[1, 2, 3]",
                    "[3, 4]"
                ],
                "correct": "B",
                "explanation": "Slicing a[1:4:2] starts at index 1, stops before index 4, and steps by 2, selecting indices 1 and 3, which hold values 2 and 4."
            },
            {
                "topic": "DBMS",
                "question": "Which statement about SQL Views is correct?",
                "options": [
                    "A view always physically stores its own copy of the data separately from the base table",
                    "Views cannot be used inside SELECT queries",
                    "A view is a virtual table based on the result of a query and does not store data itself in most cases",
                    "Views automatically alter the base table's schema",
                    "Views cannot include JOIN operations"
                ],
                "correct": "C",
                "explanation": "A View is generally a virtual table defined by a stored query; it does not physically store the data itself (unless materialized), and can include joins and be queried like a table."
            },
            {
                "topic": "OS",
                "question": "Which non-preemptive CPU scheduling algorithm minimizes average waiting time but requires advance knowledge of each process's burst time?",
                "options": [
                    "FCFS",
                    "Shortest Job First (SJF)",
                    "Round Robin",
                    "Priority Scheduling",
                    "Multilevel Feedback Queue"
                ],
                "correct": "B",
                "explanation": "Non-preemptive SJF is provably optimal for minimizing average waiting time, but it requires knowing each process's CPU burst time in advance, which is difficult in practice."
            },
            {
                "topic": "Networks",
                "question": "What is the primary purpose of the 'Time to Live (TTL)' field in an IP packet header?",
                "options": [
                    "To encrypt the packet payload",
                    "To prevent packets from circulating indefinitely by decrementing at each hop until discarded at zero",
                    "To specify the destination port number",
                    "To indicate the packet's priority level",
                    "To compress the packet for faster transmission"
                ],
                "correct": "B",
                "explanation": "TTL is decremented by each router the packet passes through; when it reaches zero, the packet is discarded, preventing packets from looping endlessly due to routing errors."
            },
            {
                "topic": "DSA",
                "question": "What is the minimum number of comparisons required, in the worst case, to find BOTH the minimum and maximum of n elements using the optimal pairwise comparison technique?",
                "options": [
                    "n - 1",
                    "2n - 2",
                    "Approximately (3n/2) - 2",
                    "n log n",
                    "n^2"
                ],
                "correct": "C",
                "explanation": "By comparing elements in pairs first and then comparing the smaller/larger elements separately, the optimal algorithm finds both min and max in approximately ceil(3n/2) - 2 comparisons, better than the naive 2n-2."
            },
            {
                "topic": "OOPS",
                "question": "Which C++ mechanism resolves the 'Diamond Problem' in multiple inheritance by ensuring only one shared instance of the common base class exists?",
                "options": [
                    "Multiple Inheritance itself",
                    "Virtual Inheritance",
                    "Friend Functions",
                    "Operator Overloading",
                    "Templates"
                ],
                "correct": "B",
                "explanation": "Virtual Inheritance ensures that when two classes inherit from a common base class, and a further class inherits from both, only a single shared instance of the common base exists, resolving the ambiguity."
            },
            {
                "topic": "Software Engineering",
                "question": "According to the Scrum Guide, what is the recommended maximum length of a single Sprint?",
                "options": [
                    "1 week",
                    "2 weeks",
                    "1 month",
                    "3 months",
                    "6 months"
                ],
                "correct": "C",
                "explanation": "The Scrum framework recommends Sprints of a consistent, fixed length not exceeding one month, allowing regular inspection and adaptation."
            },
            {
                "topic": "COA",
                "question": "Which pipeline hazard is typically resolved using the 'forwarding' (or 'bypassing') technique?",
                "options": [
                    "Structural Hazard",
                    "Data Hazard",
                    "Control Hazard",
                    "Resource Hazard",
                    "Memory Hazard"
                ],
                "correct": "B",
                "explanation": "Forwarding (bypassing) routes a computed result directly to a dependent instruction before it is formally written back, resolving Data Hazards without requiring a full pipeline stall."
            },
            {
                "topic": "Cyber Security",
                "question": "In a Diffie-Hellman key exchange, what is actually transmitted between the two parties over the insecure channel?",
                "options": [
                    "Their private keys directly",
                    "The symmetric encryption key directly",
                    "Public values derived from private keys, used to jointly compute a shared secret",
                    "The final shared secret itself",
                    "Plaintext passwords"
                ],
                "correct": "C",
                "explanation": "Diffie-Hellman allows two parties to exchange publicly computable values (based on their own private keys and a shared base/modulus) that let each side independently compute the same shared secret, without ever transmitting the secret or private keys directly."
            },
            {
                "topic": "Data Warehouse",
                "question": "Which stage of the ETL process typically comes FIRST, retrieving data from heterogeneous source systems?",
                "options": [
                    "Load",
                    "Transform",
                    "Extract",
                    "Aggregate",
                    "Stage"
                ],
                "correct": "C",
                "explanation": "ETL begins with the Extract stage, where data is pulled from multiple heterogeneous source systems (databases, files, APIs), before being cleaned/transformed and finally loaded."
            },
            {
                "topic": "Programming",
                "question": "Which C++ parameter declaration avoids copying an object while also preventing the function from modifying it?",
                "options": [
                    "const int& x",
                    "int& x",
                    "const int x",
                    "int* x",
                    "const int* const x"
                ],
                "correct": "A",
                "explanation": "'const int& x' passes the argument by reference (avoiding a copy) while the 'const' qualifier prevents the function from modifying the original value through that reference."
            },
            {
                "topic": "DBMS",
                "question": "A relation R(A,B,C,D) has functional dependencies A→B, B→C, C→D, where A is the only candidate key. What is the highest normal form R satisfies?",
                "options": [
                    "1NF",
                    "2NF",
                    "3NF",
                    "BCNF",
                    "4NF"
                ],
                "correct": "B",
                "explanation": "Since A is a single-attribute key, there's no partial dependency issue (2NF is automatically satisfied). However, B→C and C→D create a transitive dependency chain (A→B→C→D), violating 3NF. So R satisfies only 2NF."
            },
            {
                "topic": "OS",
                "question": "Which of the following is a key symptom of 'thrashing' in a virtual memory system?",
                "options": [
                    "Extremely high CPU utilization with very few page faults",
                    "A high page fault rate causing low CPU utilization despite a high degree of multiprogramming",
                    "Complete elimination of all page faults",
                    "Reduced memory usage across all processes",
                    "Faster process execution due to more RAM"
                ],
                "correct": "B",
                "explanation": "Thrashing occurs when the system is overcommitted with too many processes, causing excessive page faults; the CPU spends most of its time swapping pages rather than executing useful work, resulting in low utilization despite high multiprogramming."
            },
            {
                "topic": "Networks",
                "question": "What subnet mask corresponds to a /28 CIDR notation?",
                "options": [
                    "255.255.255.192",
                    "255.255.255.224",
                    "255.255.255.240",
                    "255.255.255.248",
                    "255.255.255.252"
                ],
                "correct": "C",
                "explanation": "/28 leaves 4 host bits (32-28=4). The mask value is 256 - 2^4 = 256-16 = 240, giving the mask 255.255.255.240."
            },
            {
                "topic": "DSA",
                "question": "What is the time complexity to build a heap from an unsorted array of n elements using the bottom-up heapify approach?",
                "options": [
                    "O(1)",
                    "O(n)",
                    "O(n log n)",
                    "O(log n)",
                    "O(n^2)"
                ],
                "correct": "B",
                "explanation": "Although each heapify call can take O(log n), a careful amortized analysis shows building a heap bottom-up from an unsorted array takes only O(n) total time, not the naively expected O(n log n)."
            },
            {
                "topic": "OOPS",
                "question": "Regarding Java 8+ interfaces (which allow default methods) versus abstract classes, which key limitation still differentiates them?",
                "options": [
                    "Interfaces cannot have any methods at all",
                    "A class can implement multiple interfaces but can extend only ONE abstract class",
                    "Abstract classes cannot have constructors",
                    "Interfaces can have private instance fields with state",
                    "Abstract classes cannot be used in Java at all"
                ],
                "correct": "B",
                "explanation": "Even with default methods, Java still enforces single inheritance for classes — a class can implement multiple interfaces, but it can extend only one abstract (or concrete) class."
            },
            {
                "topic": "Software Engineering",
                "question": "Which level of software testing focuses specifically on verifying the interactions and data flow between integrated modules/components?",
                "options": [
                    "Unit Testing",
                    "Integration Testing",
                    "System Testing",
                    "Acceptance Testing",
                    "Regression Testing"
                ],
                "correct": "B",
                "explanation": "Integration Testing specifically verifies that individually-tested modules work correctly together, focusing on interfaces and data flow between them."
            },
            {
                "topic": "COA",
                "question": "If a CPU's clock frequency is 2 GHz and its average CPI (Cycles Per Instruction) is 1.5, what is the average time to execute one instruction?",
                "options": [
                    "0.5 ns",
                    "0.75 ns",
                    "1 ns",
                    "1.5 ns",
                    "2 ns"
                ],
                "correct": "B",
                "explanation": "Clock cycle time = 1/frequency = 1/(2×10^9) = 0.5 ns. Average instruction time = CPI × cycle time = 1.5 × 0.5 ns = 0.75 ns."
            },
            {
                "topic": "Cyber Security",
                "question": "What does 'salting' refer to in the context of password hashing?",
                "options": [
                    "Encrypting the password twice with different algorithms",
                    "Adding random data to a password before hashing it, to defend against precomputed rainbow table attacks",
                    "Storing passwords in plain text for faster lookup",
                    "Compressing the password hash to save storage",
                    "Sending the password over an encrypted channel only"
                ],
                "correct": "B",
                "explanation": "Salting adds unique random data to each password before hashing, ensuring that even identical passwords produce different hashes, which defeats precomputed rainbow table attacks."
            },
            {
                "topic": "Data Warehouse",
                "question": "What term describes a table storing pre-computed, summarized values (like totals) specifically to speed up common OLAP queries?",
                "options": [
                    "Fact Table",
                    "Aggregate Table",
                    "Staging Table",
                    "Dimension Table",
                    "Metadata Table"
                ],
                "correct": "B",
                "explanation": "An Aggregate Table stores pre-calculated summary values (e.g., monthly totals) so that common OLAP queries can be answered faster without repeatedly scanning and summing detailed fact table rows."
            },
            {
                "topic": "Programming",
                "question": "What is the output of this Python expression (using right-to-left exponentiation associativity)?<br/>print(2 ** 3 ** 2)",
                "options": [
                    "64",
                    "512",
                    "216",
                    "729",
                    "1024"
                ],
                "correct": "B",
                "explanation": "Python's ** operator is right-associative, so 3**2 is evaluated first, giving 9. Then 2**9 = 512."
            },
            {
                "topic": "DBMS",
                "question": "Which SQL constraint ensures a column's values are unique across all rows, while still typically allowing multiple NULL values (in most RDBMS)?",
                "options": [
                    "PRIMARY KEY",
                    "UNIQUE",
                    "CHECK",
                    "NOT NULL",
                    "FOREIGN KEY"
                ],
                "correct": "B",
                "explanation": "A UNIQUE constraint enforces distinct values among non-null entries but, unlike PRIMARY KEY, generally still permits multiple NULL values in most database systems, since NULL is not considered equal to another NULL."
            },
            {
                "topic": "OS",
                "question": "What is the primary difference between a process and a thread in terms of memory?",
                "options": [
                    "A thread has its own completely separate address space, unlike a process",
                    "Threads within the same process share the same address space, while each process has its own separate address space",
                    "Processes cannot access any memory at all",
                    "Threads require more memory than processes always",
                    "There is no memory-related difference between them"
                ],
                "correct": "B",
                "explanation": "Threads belonging to the same process share that process's memory/address space, enabling fast communication, whereas each process has its own independent, isolated address space."
            },
            {
                "topic": "Networks",
                "question": "Which routing protocol is a link-state protocol that uses Dijkstra's algorithm to compute the shortest path?",
                "options": [
                    "RIP",
                    "OSPF",
                    "BGP",
                    "IGRP",
                    "EIGRP"
                ],
                "correct": "B",
                "explanation": "OSPF (Open Shortest Path First) is a link-state protocol that uses Dijkstra's shortest-path-first algorithm to build its routing table, unlike RIP which is a simpler distance-vector protocol."
            },
            {
                "topic": "DSA",
                "question": "What is the space complexity of representing a graph with V vertices using an adjacency matrix?",
                "options": [
                    "O(V)",
                    "O(V + E)",
                    "O(V^2)",
                    "O(E)",
                    "O(log V)"
                ],
                "correct": "C",
                "explanation": "An adjacency matrix requires a V × V grid to represent all possible vertex pairs, giving a space complexity of O(V^2), regardless of how many edges actually exist."
            },
            {
                "topic": "Software Engineering",
                "question": "What does the 'V' shape in the V-Model of the SDLC primarily represent?",
                "options": [
                    "The programming language syntax used",
                    "Verification and Validation activities mapped against corresponding development phases",
                    "A visual representation of team velocity",
                    "The version control branching strategy",
                    "The variance in project cost estimates"
                ],
                "correct": "B",
                "explanation": "The V-Model's shape reflects how each development phase (left side, e.g., requirements, design) has a corresponding testing/validation phase (right side, e.g., acceptance testing, system testing) at the same level."
            },
            {
                "topic": "COA",
                "question": "Which addressing mode requires NO memory access at all to fetch the operand, since the operand resides directly in a CPU register?",
                "options": [
                    "Immediate Addressing",
                    "Direct Addressing",
                    "Indirect Addressing",
                    "Register Addressing",
                    "Indexed Addressing"
                ],
                "correct": "D",
                "explanation": "In Register Addressing, the operand is already located in a CPU register, so no memory access is needed at all — making it even faster than Immediate Addressing, which at least reads the instruction itself."
            },
            {
                "topic": "Cyber Security",
                "question": "At which OSI layers does a traditional packet-filtering firewall primarily operate?",
                "options": [
                    "Application and Presentation Layer",
                    "Network and Transport Layer",
                    "Physical and Data Link Layer",
                    "Session Layer only",
                    "Presentation Layer only"
                ],
                "correct": "B",
                "explanation": "A traditional packet-filtering firewall inspects IP addresses (Network Layer) and port numbers/protocols (Transport Layer) to make filtering decisions, operating primarily at Layers 3 and 4."
            },
            {
                "topic": "Data Warehouse",
                "question": "What is 'Data Scrubbing' also commonly known as in the context of the ETL process?",
                "options": [
                    "Data Loading",
                    "Data Cleaning",
                    "Data Extraction",
                    "Data Mining",
                    "Data Warehousing"
                ],
                "correct": "B",
                "explanation": "Data Scrubbing is another term for Data Cleaning — the process of detecting and correcting (or removing) inaccurate, incomplete, or inconsistent data during the Transform stage of ETL."
            },
            {
                "topic": "OS",
                "question": "Which of the following is NOT one of the four necessary conditions for a deadlock to occur?",
                "options": [
                    "Mutual Exclusion",
                    "Hold and Wait",
                    "Preemption",
                    "Circular Wait",
                    "No Preemption"
                ],
                "correct": "C",
                "explanation": "The four necessary conditions for deadlock are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. 'Preemption' is actually a strategy used to PREVENT deadlock, not a cause of it."
            },
            {
                "topic": "Networks",
                "question": "Which security device monitors network traffic and actively BLOCKS detected malicious activity in real time, as opposed to merely alerting administrators?",
                "options": [
                    "IDS (Intrusion Detection System)",
                    "IPS (Intrusion Prevention System)",
                    "Proxy Server",
                    "Load Balancer",
                    "Hub"
                ],
                "correct": "B",
                "explanation": "An IPS (Intrusion Prevention System) both monitors traffic and actively blocks/prevents malicious activity in real time, unlike an IDS, which only detects and alerts without blocking."
            }
        ]
    }
];
