const hiddenElements = document.querySelectorAll('.imhiding');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  })
});

hiddenElements.forEach((el) => observer.observe(el));

const gridContent = document.querySelector('.grid-content');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

scrollLeftButton.addEventListener('click', () => {
  gridContent.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
});

scrollRightButton.addEventListener('click', () => {
  gridContent.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
});

// Get the carousel element
var carousel = document.getElementById('myCarousel');

// Disable automatic sliding
carousel.dataset.bsRide = '';

// Pause the carousel when the mouse hovers over it
carousel.addEventListener('mouseover', function() {
  carousel.classList.add('paused');
});

// Resume sliding when the mouse leaves the carousel
carousel.addEventListener('mouseout', function() {
  carousel.classList.remove('paused');
});

// Manually control the carousel
carousel.addEventListener('click', function(e) {
  var target = e.target;

  if (target.classList.contains('carousel-control-prev') || target.parentNode.classList.contains('carousel-control-prev')) {
    carousel.carousel('prev');
  } else if (target.classList.contains('carousel-control-next') || target.parentNode.classList.contains('carousel-control-next')) {
    carousel.carousel('next');
  }
});

window.onscroll = function() {
  var navbar = document.querySelector('.nav');
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};
