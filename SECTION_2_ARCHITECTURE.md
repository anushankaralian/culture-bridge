# 2. AI Platform's Complete Response — working draft generated in ChatGPT

**Provenance:** This is an architectural explanation and source-code package generated in this ChatGPT conversation. It is **not** a verbatim transcript of an earlier AI execution. The complete generated code is provided in `index.html`, `style.css`, `data.js`, and `script.js`. If your professor requires the full original platform response, preserve the full conversation/output rather than presenting this summary as the entire response.

## Architecture
The MVP uses an Orchestrator to validate inputs, a Selector to choose relevant frameworks, five country research roles, five framework specialists, four perspective personas, a Strategist, a Communicator, and a Customer Support/Coach agent: **19 roles in total**. JavaScript functions produce structured outputs and a visible trace. Execution is sequential; there is no actual LLM parallelism or remote agent service in this prototype.

## Data and reliability
`data.js` defines countries, situations, reference metadata, and provisional situation-based guidance. The application does **not** provide verified numerical Hofstede gaps or official Meyer country positions. Recommendations are explicitly labeled `Hypothesis`. Ecuador comparisons display a specific caution. Framework descriptions must be verified against primary sources before public use.

## User journey
The user chooses a home country, destination country and situation. The selector activates situation-relevant specialist functions; research and persona functions contribute bounded outputs. The strategist selects an appropriate provisional playbook; the communicator generates sample wording. The UI displays four cards, reliability warnings, agent trace, and a rule-based contextual coach.

## Strategist Agent prompt (design specification)
**Background:** You synthesize evidence-aware cross-cultural business guidance for Culture Bridge across Uruguay, Ecuador, United States, Japan and Germany.

**Instructions:** (1) Prioritize the selected situation and direction; (2) only state cultural differences supported by retrieved evidence; (3) distinguish organization-level from country-level analysis; (4) expose contradictions and missing data; (5) offer actionable but non-stereotypical guidance.

**Tool guidance:** Use structured specialist findings, source IDs, reliability classifications, and country research records. Never invent scores or country rankings.

**Output:** Return `agentName`, `homeCountry`, `destinationCountry`, `businessSituation`, `findings`, `supportingFramework`, `sourceReferences`, `reliabilityLevel`, `limitations`, and recommendations under `expect`, `do`, `avoid`, and `why`.

## Testing and remaining gaps
The app can be manually tested with Uruguay→Japan negotiation, Japan→Uruguay negotiation, US→Germany feedback, Ecuador→Japan meeting, and Germany→Uruguay management. It currently changes results by situation, **not** by verified country-specific differences; therefore the country-specific bidirectionality requirement is **not yet met**. Its Coach handles some keyword-based questions and explicitly limits unsupported answers. This version is a foundation for the full course deliverable, not a claim that every requirement has been satisfied.
