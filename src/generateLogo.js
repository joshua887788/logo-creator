// src/generateLogo.js
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function generateLogo(characters, shape, color) {
  const canvas = createCanvas(300, 200);
  const ctx = canvas.getContext('2d');

  // Draw the background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 300, 200);

  // Draw the shape
  ctx.fillStyle = 'white';
  if (shape === 'square') {
    ctx.fillRect(50, 50, 200, 100);
  } else if (shape === 'circle') {
    ctx.beginPath();
    ctx.arc(150, 100, 75, 0, Math.PI * 2);
    ctx.fill();
  } else if (shape === 'triangle') {
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(50, 150);
    ctx.lineTo(250, 150);
    ctx.closePath();
    ctx.fill();
  }

  // Draw the characters
  ctx.font = '48px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(characters, 125, 125);

  // Save the canvas as an SVG file
  const svg = canvas.toBuffer().toString('utf8');
  fs.writeFileSync('logo.svg', svg);

  console.log('Generated logo.svg');
}

module.exports = generateLogo;
