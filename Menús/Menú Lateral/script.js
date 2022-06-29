const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#sidemenu");

btn.addEventListener("click", (e) => {
  menu.classList.toggle("menu-expaned");
  menu.classList.toggle("menu-collapsed");

  document.querySelector('body').classList.toggle('body-expanded');
});
