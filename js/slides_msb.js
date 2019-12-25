/*---------------------------------------------------- */
/* Photo Slideshow
------------------------------------------------------ */
var slideIndex_msb = 1;
function initSlides_msb(){
  showSlides_msb(1);
}

// Next/previous controls
function plusSlides_msb(n) {
    showSlides_msb(slideIndex_msb += n);
}

// Thumbnail image controls
function currentSlide_msb(n) {
    showSlides_msb(slideIndex_msb = n);
}

function showSlides_msb(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_msb");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex_msb = 1}
  if (n < 1) {slideIndex_msb = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_msb-1].style.display = "block";
  dots[slideIndex_msb-1].className += " active";

}
