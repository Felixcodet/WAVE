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

anime({
    targets: circles,
    translateX: 50
  });

  // anime({
  //   targets: ".dropsDiv",
  //   translateX: 250,
  //   delay: 2000
  // });

  const movePath = {
    curviness: 1,
    autoRotate: false,
    values: [
      { x: 1500}
    ]
  };

const tween =  new TimelineLite();

tween.add(
  TweenLite.to(".dropsDiv",1,{
   bezier: movePath,
    ease: Power1.easeInOut
  })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '#introduction',
  duration: 3000,
})

.setTween(tween)
.addIndicators()
.addTo(controller)
