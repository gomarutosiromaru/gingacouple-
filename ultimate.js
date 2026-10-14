/* Galaxy Couple Ultimate V8 — warp audio + star tunnel; no external assets */
(()=>{'use strict';
 const enter=document.getElementById('welcome-enter');
 const welcome=document.getElementById('welcome-galaxy');
 if(!enter||!welcome)return;
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let started=false, audio=null, nodes=[];
 const soundToggle=document.getElementById('galaxy-sound-toggle');
 function soundEnabled(){return !soundToggle || soundToggle.getAttribute('aria-pressed')!=='false'}
 function initAudio(){if(!soundEnabled())return null;try{const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;audio=new A();audio.resume().catch(()=>{});return audio}catch{return null}}
 function tone(ac,start,dur,from,to,vol,type='sine'){
  const osc=ac.createOscillator(),gain=ac.createGain();osc.type=type;
  osc.frequency.setValueAtTime(Math.max(1,from),start);osc.frequency.exponentialRampToValueAtTime(Math.max(1,to),start+dur);
  gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(vol,start+Math.min(.08,dur*.2));gain.gain.exponentialRampToValueAtTime(.0001,start+dur);
  osc.connect(gain).connect(ac.destination);osc.start(start);osc.stop(start+dur+.03);nodes.push(osc);
 }
 function noise(ac,start,dur,vol){
  const n=Math.floor(ac.sampleRate*dur),buf=ac.createBuffer(1,n,ac.sampleRate),a=buf.getChannelData(0);
  for(let i=0;i<n;i++)a[i]=(Math.random()*2-1)*(i/n);
  const src=ac.createBufferSource(),filter=ac.createBiquadFilter(),gain=ac.createGain();src.buffer=buf;filter.type='lowpass';filter.frequency.setValueAtTime(250,start);filter.frequency.exponentialRampToValueAtTime(3600,start+dur*.8);gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(vol,start+dur*.45);gain.gain.exponentialRampToValueAtTime(.0001,start+dur);src.connect(filter).connect(gain).connect(ac.destination);src.start(start);src.stop(start+dur);nodes.push(src)
 }
 function playWarp(){const ac=initAudio();if(!ac)return;const t=ac.currentTime+.015;
  tone(ac,t,.55,140,720,.075,'sawtooth');tone(ac,t+.12,1.35,95,900,.06,'triangle');noise(ac,t+.25,1.5,.11);
  tone(ac,t+1.5,.6,1600,320,.085,'sine');tone(ac,t+1.73,.55,660,1320,.055);tone(ac,t+1.85,.55,990,1980,.04)
 }
 function stopAudio(){if(audio){setTimeout(()=>audio?.close().catch(()=>{}),450)}}
 function buildOverlay(){const root=document.createElement('div');root.id='ultimate-warp';root.setAttribute('aria-hidden','true');root.innerHTML='<canvas></canvas><div class="ultimate-center"></div><div class="ultimate-caption">銀河を旅しています ✦</div>';document.body.append(root);return root}
 function runTunnel(root){const canvas=root.querySelector('canvas'),ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return()=>{};
  let width=0,height=0,dpr=1,raf=0,active=true;const stars=Array.from({length:220},()=>({angle:Math.random()*Math.PI*2,dist:Math.random()*.65+.01,speed:.5+Math.random()*1.5,r:.4+Math.random()*1.8}));
  function resize(){dpr=Math.min(devicePixelRatio||1,2);width=innerWidth;height=innerHeight;canvas.width=Math.floor(width*dpr);canvas.height=Math.floor(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)}resize();addEventListener('resize',resize,{passive:true});
  let last=performance.now(),elapsed=0;
  function frame(now){if(!active)return;const dt=Math.min((now-last)/1000,.05);last=now;elapsed+=dt;ctx.clearRect(0,0,width,height);const radius=Math.hypot(width,height)*.72;const acceleration=Math.min(3.8,.6+elapsed*1.6);const cx=width/2,cy=height/2;
   for(const s of stars){const old=s.dist;s.dist+=dt*s.speed*acceleration*.24;if(s.dist>1.2)s.dist=.008;
    const x=cx+Math.cos(s.angle)*s.dist*radius,y=cy+Math.sin(s.angle)*s.dist*radius;
    const ox=cx+Math.cos(s.angle)*Math.max(.002,old-.055*acceleration)*radius,oy=cy+Math.sin(s.angle)*Math.max(.002,old-.055*acceleration)*radius;
    const alpha=Math.min(1,s.dist*1.5);ctx.strokeStyle=`rgba(${s.r>1.3?'255,193,249':'207,197,255'},${alpha})`;ctx.lineWidth=Math.min(4,s.r*(.5+s.dist*2));ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(x,y);ctx.stroke();
   }raf=requestAnimationFrame(frame)}raf=requestAnimationFrame(frame);return()=>{active=false;cancelAnimationFrame(raf);removeEventListener('resize',resize)}
 }
 function dismiss(){welcome.classList.add('welcome-gone');welcome.remove();document.body.classList.remove('welcome-open','ultimate-warping');document.getElementById('characters')?.scrollIntoView({behavior:reduce.matches?'auto':'smooth'})}
 // Document capture runs before the existing V7 button handler, preventing double warps.
 document.addEventListener('click',event=>{
  if(!event.target.closest('#welcome-enter')||started)return;
  started=true;event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
  if(reduce.matches){dismiss();return}
  document.body.classList.add('ultimate-warping');
  const root=buildOverlay();const stop=runTunnel(root);playWarp();
  requestAnimationFrame(()=>root.classList.add('active'));
  setTimeout(()=>root.classList.add('climax'),1570);
  setTimeout(()=>{dismiss();root.style.opacity='0';stop();stopAudio()},2250);
  setTimeout(()=>root.remove(),2580);
 },true);
})();
