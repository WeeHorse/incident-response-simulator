export const raw='https://raw.githubusercontent.com/WeeHorse/incident-response-simulator/main/data/control.json';
export async function json(url){const r=await fetch(url,{cache:'no-store'});if(!r.ok)throw Error('HTTP '+r.status);return r.json()}
export function valid(c){return c&&typeof c.sessionId==='string'&&/^\d\d:\d\d$/.test(c.simulationTime)&&c.events&&c.reports&&Object.values({...c.events,...c.reports}).every(x=>x===0||x===1)}
export function encode(c){return btoa(unescape(encodeURIComponent(JSON.stringify(c))))}
export function decode(s){const c=JSON.parse(decodeURIComponent(escape(atob(s.trim()))));if(!valid(c))throw Error('Ogiltig styrfil');return c}
export async function loadControl(){return json(raw+'?t='+Date.now())}
export function series(base,event,active,time,times){return base.map((v,i)=>i>=6&&active?event[i-6]:v).filter((_,i)=>times[i]<=time)}
