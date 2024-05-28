document.addEventListener("DOMContentLoaded", function() {
    var progressBars = document.querySelectorAll(".progress-in");
  
    progressBars.forEach(function(bar) {
      var targetWidth = parseFloat(bar.style.width);
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var currentWidth = 0;
            var interval = setInterval(function() {
              if (currentWidth >= targetWidth) {
                clearInterval(interval);
              } else {
                currentWidth++; 
                bar.style.width = currentWidth + "%";
              }
            }, 10); 
          }
        });
      }, { threshold: 0.5 }); 
  
      observer.observe(bar);
    });
  });
  
//   typing animation
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","App Developer","Writer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,

})

