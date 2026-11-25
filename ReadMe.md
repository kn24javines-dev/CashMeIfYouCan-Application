# Cash Me If You Can
Deterministic Finite Automaton (DFA)-Based Application for GCash Payment Verification and Duplicate Reference Detection

---

# Current Status
Right now, this repository contains only the initial frontend UI layout (`index.html`, `style.css`, and `app.js`) so we have a shared visual starting point and can align on next steps:
* HOME PAGE with the GCash-blue branded header and some sort of tagline underneath. It will already contain the input fields for Order Number, Expected Amount, Amount Paid, Recipient Name, GCash Account Number, and the 13-digit GCash Reference Number (plus Scan and Clear buttons). It will also have a Toggle Visual button and a reserved placeholder space for the live DFA diagram.
* DATABASE PAGE contains the table structure for viewing recorded transactions and statuses.
* ABOUT PAGE has the project summary, quick usage steps, and group members details.

There are no backend logic, database persistence, or live DFA animation yet.

---

# DFA Models Planned (from Proposal)
We will separate syntax/format validation (DFA) from record matching & duplicate detection (backend + database):
* Primary Reference Number DFA will strip whitespace via preprocessing, then steps through digits `0–9` to reach the accepting state for a 13-digit numeric reference number, routing extra digits into trap state.
* Secondary Input DFAs:
  * Order Number DFA validates the `ORD` prefix followed by digits.
  * Amount DFA validates whole and decimal numeric amounts.
  * GCash Account Number DFA validates an 11-digit mobile number format starting with `09`.
  * Recipient Name DFA validates standard alphabetic characters, periods, and spaces.

# Planned Backend and Database Approach
* Backend: Python (Flask) to keep setup straightforward in VS Code.
* Database: SQLite (`sqlite3`) for local, zero-server storage of registered orders, payment claims, duplicate reference checks, and verification/release status.
* Order-Release Mechanism: Orders remain locked/unreleased if DFA format checks fail, a reference number already exists in the database, or amounts/details do not match.

# Planned Live Visualizer Behavior
* Animate state-by-state transitions in the diagram area as inputs are scanned so users can see the active state, accepted vs. rejected/trap outcomes, and toggle the diagram off when not needed.

# Local Setup (VS Code)
1. Clone or download this repository into a local folder and open it in **VS Code** (`File -> Open Folder...`).
2. Open `index.html` in a browser (or use the **Live Server** extension in VS Code) to preview the current UI.