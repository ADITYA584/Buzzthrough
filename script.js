'use strict'

window.onbeforeunload = function(e) {
  e.preventDefault();
  window.scrollTo(0, 0);
};

const links = document.querySelector('.nav_links');
const log_in  = document.querySelector('.log_in');
const sign_up  = document.querySelector('.sign_up');
const nav = document.querySelector('.nav');
// const home = document.querySelector('.home');

links.addEventListener('click',function(e){
  e.preventDefault();
  if (e.target.classList.contains('nav_item')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav_item')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav_item');
    const logo = link.closest('.nav').querySelector('nav_img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};


// home.addEventListener('click',function(

// ))

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

console.log(navHeight)

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);


/////////////sreveal section//////////
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});




// ******slider*******
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();


  const menuclose = document.querySelector('.menu_close');
  const menu = document.querySelector('.menu_btn');
  const menu_item =document.querySelector('.nav_links')
  
  menu.addEventListener('click',function(e){
    e.preventDefault();
    menu_item.classList.add('show');
    menuclose.classList.remove('hidden');
    menu_item.classList.remove('hidden');
    
  })

  menuclose.addEventListener('click',function(e){
    e.preventDefault();
    menu_item.classList.remove('show');
    menu_item.classList.add('hidden');
    menuclose.classList.toggle('hidden')
  })

    
  const send = document.querySelector('.footer_btn');
  const message = document.querySelector('.message');

  send.addEventListener('click',function(e){
    e.preventDefault();
    message.value = "";
    alert('Message sent')
    
  })