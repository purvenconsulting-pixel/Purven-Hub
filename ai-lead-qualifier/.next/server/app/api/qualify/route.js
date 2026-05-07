"use strict";(()=>{var e={};e.id=827,e.ids=[827],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6063:(e,t,n)=>{n.r(t),n.d(t,{originalPathname:()=>m,patchFetch:()=>g,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c});var a={};n.r(a),n.d(a,{POST:()=>u});var s=n(9303),r=n(8716),o=n(670),i=n(7070);async function u(e){try{let t;let{phone:n,message:a,businessConfig:s}=await e.json();if(!n||!a)return i.NextResponse.json({error:"Phone and message are required"},{status:400});let r=process.env.OPENAI_API_KEY;if(!r)return i.NextResponse.json({error:"OpenAI API key not configured"},{status:500});s?.questions;let o=s?.criteria||{minBudget:1e3,maxTimeline:90,requireDecisionMaker:!0},u=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"system",content:`You are a lead qualification AI. Analyze the lead's message and extract:
1. Budget (number or null)
2. Timeline (string)
3. Is decision maker (boolean)
4. Pain points mentioned (array of strings)
5. Lead score 0-100 based on:
   - Budget >= $${o.minBudget}: +30 points
   - Timeline within ${o.maxTimeline} days: +25 points
   - Decision maker: +25 points
   - Clear pain points: +20 points
6. Status: "qualified" (score >= 70), "contacted" (score 40-69), or "unqualified" (score < 40)
7. Suggested next action
8. A friendly bot response to send back

Return ONLY valid JSON with this exact shape:
{
  "score": number,
  "status": "qualified" | "contacted" | "unqualified",
  "qualificationData": {
    "budget": string | null,
    "timeline": string,
    "decisionMaker": boolean,
    "painPoints": string[]
  },
  "nextAction": string,
  "suggestedResponse": string
}`},{role:"user",content:`Lead message: "${a}"`}],temperature:.3,max_tokens:500,response_format:{type:"json_object"}})});if(!u.ok){let e=await u.text();return console.error("OpenAI error:",e),i.NextResponse.json({error:"Failed to analyze lead with AI"},{status:502})}let l=await u.json(),p=l.choices?.[0]?.message?.content;try{t=JSON.parse(p)}catch{return i.NextResponse.json({error:"Invalid AI response format"},{status:502})}let c={lead:{phone:n,score:t.score??0,status:t.status??"unqualified",qualificationData:t.qualificationData??{}},nextAction:t.nextAction??"Follow up manually",suggestedResponse:t.suggestedResponse??"Thanks for reaching out!"};return i.NextResponse.json(c)}catch(e){return console.error("Error:",e),i.NextResponse.json({error:"Failed to qualify lead"},{status:500})}}let l=new s.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/qualify/route",pathname:"/api/qualify",filename:"route",bundlePath:"app/api/qualify/route"},resolvedPagePath:"/home/ubuntu/projects/ai-lead-qualifier/app/api/qualify/route.ts",nextConfigOutput:"export",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:c,serverHooks:d}=l,m="/api/qualify/route";function g(){return(0,o.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),a=t.X(0,[276,972],()=>n(6063));module.exports=a})();