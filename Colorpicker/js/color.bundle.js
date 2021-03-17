"use strict";

var color = document.querySelector("#color");
var salida = document.querySelector("#salida");
color.addEventListener("input", function () {
  var value = color.value;
  /*introduce valores dentro del con
  contenedor*/

  salida.innerHTML = value;
  /*cambia los estilos del contenedor
  con el color seleccionado por el usuario*/

  salida.style.background = value;
  salida.style.color = "#fff";
});