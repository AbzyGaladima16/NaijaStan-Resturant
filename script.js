 const mobileBtn = document.getElementById('mobile-cta')
 const nav = document.getElementsByClassName('right-top')
 const mobileBtnExit = document.getElementById('mobile-exit');


 mobileBtn.addEventListener('click', () => {
  nav.classList.add('manu-btn');
})

 mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('manu-btn');
})



//middle section 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("middle-hero-flex");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}





