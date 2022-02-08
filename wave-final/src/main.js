console.log('hello world')
const circles = document.querySelectorAll('.circle')

// anime({
//     targets: circles,
//     scale: [
//       {value: .6, easing: 'linear', duration: 500},
//       {value: 1, easing: 'linear', duration: 1200}
//     ],
//     delay: anime.stagger(200, {grid: [68, 39], from: 'center'})
//   });

// anime({
//     targets: circles,
//     translateX: 50
//   });



let animation2 = bodymovin.loadAnimation({
  container: document.querySelector('.mapWave'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  speed: '0.2',
  path: 'static/main_wave_center_white.json'
})
// https://assets6.lottiefiles.com/packages/lf20_jdegjakb.json



let animation = bodymovin.loadAnimation({
  container: document.querySelector('.boxxx'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'static/friends.json'
})

let animation3 = bodymovin.loadAnimation({
  container: document.querySelector('.handwave'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'static/hello.json'
})















  const movePath = {
    curviness: 1,
    autoRotate: false,
    values: [
      { x: -2500}
    ]
  };

const tween =  new TimelineLite();

tween.add(
  TweenLite.to(".eventBoxes",1,{
   bezier: movePath,
    ease: Power1.easeInOut
  })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.neuerText',
  duration: 3000
})

.setTween(tween)
// .addIndicators()
.addTo(controller)