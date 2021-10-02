const isim = prompt("İsminiz nedir?");

var h1 = document.getElementById("hosgeldin");

h1.innerText = `Hoşgeldin ${isim}. Ben Nisa Çontay.`;

function setDate() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  return `Şu an saat ${hours}:${minutes}:${seconds}`;
}

setInterval(function () {
  currentTime = setDate();
  document.getElementById("saat").innerHTML = currentTime;
}, 1000);
