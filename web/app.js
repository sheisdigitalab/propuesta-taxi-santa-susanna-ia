/* dentro de la presentación: la página padre controla el scroll y esta web le informa de su altura */
(function(){
  var framed=false;try{framed=window.self!==window.top}catch(e){framed=true}
  if(!framed)return;
  window.addEventListener('message',function(e){
    var d=e.data;
    if(d&&typeof d.umaScroll==='number'){window.scrollTo(0,d.umaScroll)}
  });
  function report(){
    try{parent.postMessage({umaSize:{h:document.documentElement.scrollHeight,vh:window.innerHeight}},'*')}catch(e){}
  }
  window.addEventListener('load',function(){report();setTimeout(report,1200);setTimeout(report,3500)});
  window.addEventListener('resize',report);
})();
