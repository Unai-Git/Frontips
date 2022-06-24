const progreso = document.querySelector("#progresion");

document.addEventListener("scroll", function (e) {
  let w =
    ((document.body.scrollTop || document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;
  progreso.style.setProperty("width", w + "%");

  progreso.classList.toggle("fin", w == 100);
});

/*
 *Dividir cantidad "scroleada" entre la resta del
 *(alto total body - alto total ventana(buscador)) por 100
 */
