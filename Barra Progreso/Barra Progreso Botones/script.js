const progreso = document.querySelector("#progreso");
const anterior = document.querySelector("#anterior");
const siguiente = document.querySelector("#siguiente");
const circulos = document.querySelectorAll(".circulo");

//Posición elemento seleccionado
let activo = 1;

siguiente.addEventListener("click", function () {
  activo++;
  //Evitar pasar el num de elementos
  if (activo > circulos.length) {
    activo = circulos.length;
  }
  update();
});

anterior.addEventListener("click", function () {
  activo--;
  //Evitar pasar el num de elementos
  if (activo < 1) {
    activo = 1;
  }
  update();
});

function update() {
  /*
  Recorrer todos los elementos con la clase circulo
  y si el elemento es menor al activo se añade la clase active.
  */
  circulos.forEach((circulo, index) => {
    if (index < activo) {
      circulo.classList.add("active");
    } else {
      circulo.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  /*
  *Transformar a porcentaje(Porcentaje de diferencia):
  Elementos activos dividido entre total de elementos * 100

  */
  progreso.style.width =
    ((actives.length - 1) / (circulos.length - 1)) * 100 + "%";

  console.log((actives.length / circulos.length) * 100);

  /*
  *Activar/Desactivar Botones
  Si activo es 1, esta al principio no puede ir atrás.
  Si activo es el num máximo de elementos esta al final, no puede avanzar
  Si no es ninguna anterior, los dos btn están activos
   */
  if (activo === 1) {
    anterior.disabled = true;
  } else if (activo === circulos.length) {
    siguiente.disabled = true;
  } else {
    anterior.disabled = false;
    siguiente.disabled = false;
  }
}
