function navFunc() {
  var x = document.getElementById("navigasiku");
  if (x.className == "navigasi") {
    x.className += " responsive";
  } else {
    x.className = "navigasi";
  }
}

var info = document.querySelector('.active');
var judul = document.querySelector('#nama');

function setNama(){
  var nama = prompt('Silahkan Masukan Nama Anda : ');
  localStorage.setItem('name', nama);
  judul.innerHTML = 'Selamat Datang ' + nama;
}

if(!localStorage.getItem('name')){
  setNama();
}else{
  var simpanNama = localStorage.getItem('name');
  judul.innerHTML = 'Selamat Datang ' + simpanNama;
}

info.onclick = function(){
  setNama();
}

function mouseOver(){
  var fitur = document.querySelector('#cardFitur');
  var fitur2 = document.querySelector('#cardFitur2');
  var fitur3 = document.querySelector('#cardFitur3');
  fitur.style.color = '#B8B8B8';
  fitur2.style.color = '#B8B8B8';
  fitur3.style.color = '#B8B8B8';
}

function mouseOut(){
  var fitur = document.querySelector('#cardFitur');
  var fitur2 = document.querySelector('#cardFitur2');
  var fitur3 = document.querySelector('#cardFitur3');
  fitur.style.color = 'white';
  fitur2.style.color = 'white';
  fitur3.style.color = 'white';
}

fitur.onmouseover = function(){
  mouseOver();
}

fitur.onmouseout = function(){
  mouseOut();
}
