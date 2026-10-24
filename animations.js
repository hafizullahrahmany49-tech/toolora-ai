/* Toolora AI — progressive enhancement; content stays readable without JavaScript */
(function(){
  var reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var candidates=document.querySelectorAll('main .category-card, main .tool-card, main .feature, main .panel, main .card, main .note, main .newsletter, main .article-card, main section, main .actions');
  if(!reduceMotion && 'IntersectionObserver' in window && candidates.length){
    document.documentElement.classList.add('motion-ready');
    candidates.forEach(function(el){el.classList.add('reveal')});
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
      });
    },{threshold:0.08,rootMargin:'0px 0px -28px 0px'});
    candidates.forEach(function(el){observer.observe(el)});
  }
  var rotating=document.getElementById('rotating-text');
  if(rotating && !reduceMotion){
    var phrases=['AI Tools for Creators','AI Tools for Freelancers','AI Tools for Business'];
    var index=0;
    window.setInterval(function(){
      rotating.classList.remove('is-changing');
      void rotating.offsetWidth;
      index=(index+1)%phrases.length;
      rotating.textContent=phrases[index];
      rotating.classList.add('is-changing');
    },2800);
  }
})();