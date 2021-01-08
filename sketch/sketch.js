// select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// setup canvas for drawing 
//const width = canvas;
//const height = canvas;
// to shortcut, cause they are from the same property:
const {width, height} = canvas;
//create random value
let x = Math.floor(Math.random() * width)

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// start the drawing
ctx.beginPath(); 
ctx.moveTo(x, 200);
ctx.lineTo(x, 200)
ctx.stroke();

