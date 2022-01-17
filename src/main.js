console.log('hello world')

anime({
    targets: '.logo',
    scale: [
      {value: .6, easing: 'linear', duration: 500},
      {value: 1, easing: 'linear', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [68, 39], from: 'center'})
  });

// anime({
//     targets: '.circle',
//     translateX: 250
//   });





// var elements = document.querySelectorAll('.logo');

// anime({
//   targets: elements,
//   translateX: 1000,
//   duration: 3000
// });