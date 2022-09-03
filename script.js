function generateColor() {
  const exadecimais = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += exadecimais[Math.floor(Math.random() * 16)];
  }
  return document.getElementById("cor1").style.backgroundColor = color;
}

function generateColor1() {
  const exadecimais = '123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += exadecimais[Math.floor(Math.random() * 16)];
  }
  return document.getElementById("cor2").style.backgroundColor = color;
}

function generateColor2() {
  const exadecimais = '23456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += exadecimais[Math.floor(Math.random() * 16)];
  }
  return document.getElementById("cor3").style.backgroundColor = color;
}

// Requisito 5:

// let colorPalette = JSON.parse(localStorage.getItem('colorPalette')) || [];
// document.querySelector('button-random-color').onclick = function() {
//   let colorChange = document.querySelector('button-random-color');

//   colorPalette.push(colorChange);
//   localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
// }
//-------------------------------------------

// Requisto 6:


