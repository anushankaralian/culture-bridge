/* Browser-free test runner: node tests.js */
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const mockElement=()=>({value:'',innerHTML:'',textContent:'',classList:{remove(){}},addEventListener(){},scrollIntoView(){}});
const elements={};
const context={console,alert(){},document:{getElementById(id){return elements[id]??=mockElement();}}};
vm.createContext(context);
for(const f of ['data.js','script.js'])vm.runInContext(fs.readFileSync(__dirname+'/'+f,'utf8'),context);
const run=(h,d,s)=>vm.runInContext(`analyze({home:'${h}',destination:'${d}',situation:'${s}'})`,context);
const cases=[['UY','JP','negotiation'],['JP','UY','negotiation'],['US','DE','feedback'],['EC','JP','meeting'],['DE','UY','management']];
for(const [h,d,s] of cases){const r=run(h,d,s);assert(r.plan.cards.do && r.plan.cards.why);assert(r.trace.length>=12);assert(r.plan.cards.do.includes(context.document.getElementById('home').value==='nonexistent'?'NONEXISTENT': ({UY:'Uruguay',EC:'Ecuador',US:'United States',JP:'Japan',DE:'Germany'})[d]));console.log('PASS',h,d,s);}
const a=run('UY','JP','negotiation'),b=run('JP','UY','negotiation');
assert.notStrictEqual(a.plan.cards.do,b.plan.cards.do);
assert.notStrictEqual(a.communication.example,b.communication.example);
assert.notStrictEqual(run('UY','JP','meeting').plan.cards.do,a.plan.cards.do);
assert(!JSON.stringify(run('EC','JP','meeting')).match(/Ecuador.{0,20}(?:score|dimension)\s*[:=]\s*\d/i));
console.log('PASS directional reversal, situation sensitivity, no fabricated Ecuador score');
