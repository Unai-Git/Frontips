window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    //Añadir clase "abajo" cuando el scroll vertical(Y) sea mayor a 0
    header.classList.toggle("abajo", this.window.scrollY > 0);
});
