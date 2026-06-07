const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let tl = gsap.timeline();

tl.from(".landing-1", {
  scale: 1.1,
  duration: 1,
  delay: 0.5,
})

tl.from(".landing-1 .landing-text-1", {
  opacity: 0,
  y: -20,
  duration: 1,

})

tl.from(".nav-i-2", {
  opacity: 0,
  y: -20,
  duration: 1.2,
  stagger: 1,
})

tl.from(".nav-i-2 div", {
  opacity: 0,
  y: -20,
  duration: 1.2,
  stagger: 1,
})


gsap.to(".nav-i-2", {
  width: "100%",
  borderRadius: 0,
  position: "fixed",
  top: 0,
  duration: 0.3,

  scrollTrigger: {
    trigger: "body",
    start: "top -=150",
    toggleActions: "play none none reverse",
    yoyo: true

  }
});


const lenis = new Lenis({
  duration: 3,
  smoothWheel: true,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const teaSwiper = new Swiper(".tea-swiper", {
  slidesPerView: "auto",
  spaceBetween: 25,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },

  speed: 3000
});


gsap.from("#all-tea .great", {
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#all-tea h1",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: true
  }
});


var typed = new Typed('#element', {
  strings: ["Gift & Samplers", "Matcha", "Chai", "Organic Tea", "Naked Tea Sachets", "Black Tea", "Green Tea", "Herbal Tea", "Caffeine-Free", "Gift & Samplers", "Gift & Samplers"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,

});

gsap.to("#jungle .scroll", {
  y: -350,
  duration: 0.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#jungle",
    start: "top bottom",
    end: "bottom top",
    scrub: true,

  }
});



const reviewCard = new Swiper(".review-card-swiper", {
  slidesPerView: "auto",
  spaceBetween: 25,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },

  speed: 3000
});



gsap.from("#cafe .cafe-part-1 img", {
  scale: 1.2,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#cafe",
    start: "top 50%",
    end: "top 20%",
    scrub: true
  }
});

let brandSwiper = new Swiper("#journal .brand-swiper", {
 
  spaceBetween: 25,
  breakpoints:{
    0:{
         slidesPerView: 1,
    },
    678:{
         slidesPerView: 2,
    },
    1100:{
         slidesPerView: 3,
    },
  }
})


