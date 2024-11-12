`use strict`;

const trigger = document.getElementById('trigger');
const originalImage = 'img/picA.jpg';
const newImage = 'img/picB.jpg';
const target = document.getElementById('target');

trigger.addEventListener('mouseenter', function() {
  target.src = newImage;
});

trigger.addEventListener('mouseleave', function() {
  target.src = originalImage;
});
