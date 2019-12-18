/*---------------------------------------------------- */
/* Photo Slideshow
------------------------------------------------------ */
var slideIndex = 1;
function initSlides(slideName){
  showSlides(1,slideName);
}

// Next/previous controls
function plusSlides(n,slideName) {
  showSlides(slideIndex += n, slideName);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n, slideName);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName(slideName);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
