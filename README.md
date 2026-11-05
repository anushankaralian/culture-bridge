# Culture Bridge — academic MVP

## Run
Open `index.html` in a modern browser. No installation or API key is needed. The HTML loads `style.css`, `data.js` and `script.js` from the same directory.

## What works
- Five selectable countries; seven situations; bidirectional selection
- Situation-sensitive recommendations (not yet empirically country-differentiated)
- 19 named agent roles with distinct functions or invocations, traceable in the UI
- Four recommendation cards and evidence/limitations display
- Context-aware offline rule-based AI Coach for several common questions
- Ecuador warning and explicit reliability labels

## Critical limitations
This is an **honest prototype**, not a validated cultural intelligence engine. There are **no verified national scores or Meyer country rankings** in the dataset. It does not yet demonstrate empirically grounded differences between two national pairings. All generated practical advice is marked `Hypothesis`. Country research agents retrieve local metadata, not live internet research. Agent functions run synchronously in JavaScript, not as autonomous LLM agents or true parallel processes. The Coach is rule-based, not a generative AI system. The sample prompts and source descriptions are not substitutes for checking the original academic publications and licensing rights.

## To complete before submission
1. Curate and cite country-specific, licensed/verified framework data and validated business practices, including data limitations for Ecuador.
2. Make country pairing and direction materially change recommendations using supported evidence.
3. Add an optional secure backend for genuine LLM specialists and AI Coach, or clearly document rule-based agent implementation.
4. Complete Appendix B design canvases for every agent, with tests and failure criteria.
5. Run documented end-to-end tests for all five required pairings and multiple situations; verify reliability and unsupported-claim handling.
6. Use the actual full AI platform output in Deliverable 4, not a fabricated transcript.

## Code organization
- `index.html`: interface
- `style.css`: visual styling
- `data.js`: framework references, situations, provisional playbooks
- `script.js`: 19 agent roles, orchestration, rendering, and coach

## Version 2 changes (2026-11-05)
- Direction-specific preparation: reversing country order changes the *perspective and questions* in all four cards and the sample message.
- No unverified cultural claims were introduced. This is NOT an empirical national comparison.
- Added `tests.js` for five required scenarios and checks for directionality, situation routing, Ecuador warning, and no numeric score invention. Run `node tests.js` if Node.js is installed.
- This upgrade does not yet satisfy the full evidence-base or independent AI-agent requirements. Section 2 and Section 3 of the submission must be updated if they describe earlier code verbatim.
