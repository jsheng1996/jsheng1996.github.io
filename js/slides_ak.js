var slideIndex_ak = 1;
function initSlides_ak(){
  showSlides_ak(1);
}

// Next/previous controls
function plusSlides_ak(n) {
    showSlides_ak(slideIndex_ak += n);
}

// Thumbnail image controls
function currentSlide_ak(n) {
    showSlides_ak(slideIndex_ak = n);
}

function showSlides_ak(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_ak");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex_ak = 1}
  if (n < 1) {slideIndex_ak = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_ak-1].style.display = "block";
  dots[slideIndex_ak-1].className += " active";

}
