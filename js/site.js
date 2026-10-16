(function(){
  var hdr=document.getElementById('hdr');
  // Apparition au scroll
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
    rv.forEach(function(el){io.observe(el);});
  } else { rv.forEach(function(el){el.classList.add('in');}); }
  // Header : thème selon la section sous la barre + rétrécissement
  var secs=[].slice.call(document.querySelectorAll('section[data-theme]'));
  function onScroll(){
    var y=window.scrollY||0; hdr.classList.toggle('small',y>40);
    var t='sombre';
    secs.forEach(function(s){var r=s.getBoundingClientRect(); if(r.top<=60 && r.bottom>60) t=s.getAttribute('data-theme');});
    if(hdr.getAttribute('data-theme')!==t) hdr.setAttribute('data-theme',t);
  }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  // Menu mobile
  var b=document.getElementById('burger');
  b.addEventListener('click',function(){hdr.classList.toggle('menu-open');});
  document.querySelectorAll('#mobmenu a').forEach(function(a){a.addEventListener('click',function(){hdr.classList.remove('menu-open');});});
  // FAQ
  document.querySelectorAll('.q').forEach(function(q){
    var a=q.querySelector('.a');
    if(q.classList.contains('open')) a.style.maxHeight=a.scrollHeight+'px';
    q.querySelector('button').addEventListener('click',function(){
      var open=q.classList.contains('open');
      document.querySelectorAll('.q.open').forEach(function(o){o.classList.remove('open');o.querySelector('.a').style.maxHeight=0;});
      if(!open){q.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';}
    });
  });
  // Compteur
  var c=document.querySelector('.count');
  if(c && 'IntersectionObserver' in window){
    var to=+c.getAttribute('data-to'), done=false;
    new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting&&!done){done=true;var t0=null;function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/1400,1);c.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step);}c.textContent=0;requestAnimationFrame(step);o.disconnect();}});},{threshold:.6}).observe(c);
  }
  // Créneau qui se sélectionne tout seul
  var slots=[].slice.call(document.querySelectorAll('.bk .s:not(.off)')), i=3;
  if(slots.length){
    setInterval(function(){
      slots.forEach(function(s){s.classList.remove('sel');});
      i=(i+1)%slots.length; slots[i].classList.add('sel');
    },2600);
  }
})();
