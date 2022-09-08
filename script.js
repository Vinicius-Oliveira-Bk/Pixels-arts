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

const cor0 = document.querySelector('#cor0');
const cor1 = document.querySelector('#cor1');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');

const cores = [cor0, cor1, cor2, cor3];

let pixels = document.querySelectorAll('.pixel');

// Requisito 5:
/*
window.addEventListener('load', function () {
  let reLoad = JSON.parse(localStorage.getItem('colorPalette'));

  cor1.style.backgroundColor = reLoad[0]
  cor2.style.backgroundColor = reLoad[1]
  cor3.style.backgroundColor = reLoad[2]
}) */
//-------------------------------------------

cor0.classList.add('color');

function guardaCor() {
  for (let index = 0; index < cores.length; index += 1) {
    if (cores[index].classList.contains('selected')) {
      const corClicada = cores[index].style.backgroundColor;
      return corClicada;
    }
  }
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function(event){
    event.target.style.backgroundColor = guardaCor();
 })
}

function limpaQuadro() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
