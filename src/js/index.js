document.addEventListener("DOMContentLoaded",function() {
     document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
     })
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

