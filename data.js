/* Curated, explicitly provisional knowledge base. Do not treat scenario guidance as official framework country scores. */
const culturalData={
 countries:{UY:'Uruguay',EC:'Ecuador',US:'United States',JP:'Japan',DE:'Germany'},
 evidencePolicy:{levels:['Direct Data','Regional Proxy','Hypothesis'],ecuador:'No official Hofstede or Meyer numeric positions are asserted for Ecuador; regional comparisons require separate validation.'},
 sources:[
 {id:'hofstede',title:'The Culture Factor / Hofstede national culture model',url:'https://www.theculturefactor.com/',note:'Framework reference only; numeric country scores are intentionally not included without verified licensed source data.'},
 {id:'meyer',title:'Erin Meyer, The Culture Map (2014)',url:'https://erinmeyer.com/books/the-culture-map/',note:'Conceptual framework; no proprietary numerical national rankings reproduced.'},
 {id:'trompenaars',title:'Fons Trompenaars & Charles Hampden-Turner, Riding the Waves of Culture',url:'',note:'Four Corporate Cultures typology is organizational, not a national classification.'},
 {id:'mintzberg',title:'Henry Mintzberg, The Structuring of Organizations (1979)',url:'',note:'Organizational configurations, not national personality profiles.'},
 {id:'jacobs',title:'Marc Jacobs, Negotiate Like a Local (course material)',url:'',note:'Course-specific material must be verified against the assigned text before attributing tactics.'}
 ],
 situations:{negotiation:'Negotiating a deal',meeting:'Attending a meeting',feedback:'Giving feedback',management:'Managing a team',email:'Writing an email',dinner:'Attending a business dinner',etiquette:'Understanding business etiquette'},
 /* Practical suggestions are situation-based HYPOTHESES, not validated empirical country claims. */
 playbooks:{
 negotiation:{expect:'The counterpart may have different expectations about decision authority, pace, and relationship-building.',do:'Ask who participates in the decision, confirm the next step in writing, and allow room for clarification.',avoid:'Do not interpret a delayed decision as rejection without checking the process.',why:'Meyer (Deciding, Trusting) provides analytical questions; negotiation-specific claims need verified Jacobs evidence.'},
 meeting:{expect:'Participants may differ in expectations about agendas, turn-taking, and how decisions are recorded.',do:'Send a clear agenda, invite alternative views, and summarize decisions and owners.',avoid:'Do not assume silence means agreement.',why:'Meyer (Communicating, Disagreeing, Deciding) can frame meeting expectations.'},
 feedback:{expect:'Directness and the preferred setting for critical feedback may differ.',do:'Ask how feedback is normally delivered, use specific observations, and check understanding.',avoid:'Do not assume a direct or indirect response reflects motivation or competence.',why:'Meyer (Evaluating, Communicating) helps frame feedback differences.'},
 management:{expect:'Teams may vary in decision rights, reporting lines, and coordination preferences.',do:'Clarify responsibilities, escalation routes, and who has final authority.',avoid:'Do not infer organizational hierarchy from nationality alone.',why:'Mintzberg (coordination mechanisms) and Meyer (Leading, Deciding) address distinct levels of analysis.'},
 email:{expect:'Expectations about formality, response time, and level of context can vary.',do:'State the purpose, requested action, deadline, and a courteous invitation to clarify.',avoid:'Do not assume a brief email is necessarily impolite or a slow reply signals refusal.',why:'Meyer (Communicating, Scheduling) provides useful questions, not fixed national rules.'},
 dinner:{expect:'Professional social events can involve different expectations around introductions and relationship-building.',do:'Ask your host about dress, timing, and dietary or etiquette considerations beforehand.',avoid:'Avoid assumptions about alcohol, food, or personal boundaries.',why:'Relationship-building can be explored through Meyer (Trusting), while etiquette requires verified local evidence.'},
 etiquette:{expect:'Greetings, titles, formality, and meeting customs can differ by company and setting.',do:'Check the counterpart’s preferred title, pronunciation, and meeting protocol.',avoid:'Do not assume every person from a country follows the same customs.',why:'Business etiquette must be grounded in local sources rather than inferred solely from cultural dimensions.'}
 }
};
