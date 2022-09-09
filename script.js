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

const pixels = document.getElementsByClassName('pixel');

// Requisito 5:
/*
window.addEventListener('load', function () {
  let reLoad = JSON.parse(localStorage.getItem('colorPalette'));

  cor1.style.backgroundColor = reLoad[0]
  cor2.style.backgroundColor = reLoad[1]
  cor3.style.backgroundColor = reLoad[2]
}) */

// Requisito 8 --------------------------------

cor0.classList.add('color');

// Requisito 9 --------------------------------

cor0.addEventListener('click', function() {
  cor1.classList.remove('selected');
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');

  cor0.classList.add('selected');
});

cor1.addEventListener('click', function() {
  cor0.classList.remove('selected');
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');

  cor1.classList.add('selected');
});

cor2.addEventListener('click', function() {
  cor0.classList.remove('selected');
  cor1.classList.remove('selected');
  cor3.classList.remove('selected');

  cor2.classList.add('selected');
});

cor3.addEventListener('click', function() {
  cor0.classList.remove('selected');
  cor1.classList.remove('selected');
  cor2.classList.remove('selected');

  cor3.classList.add('selected');
});

function guardaCor() {
  for (let index = 0; index < cores.length; index += 1) {
    if (cores[index].classList.contains('selected')) {
      const corClicada = cores[index].style.backgroundColor;
      return corClicada;
    }
  }
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    event.target.style.backgroundColor = guardaCor();
  })
}

// Requisito 11 ---------------------------------

function limpaQuadro() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
