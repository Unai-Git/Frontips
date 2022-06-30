const slideGallery = document.querySelector(".slides");
const slides = slideGallery.querySelectorAll("div");
const scrollbarThumb = document.querySelector(".thumb");
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;

//Rellenar barra
const scrollThumb = () => {
    const index = Math.floor(slideGallery.scrollTop / slideHeight);
    scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
  };
  
  const scrollToElement = el => {
    const index = parseInt(el.dataset.id, 10);
    slideGallery.scrollTo(0, index * slideHeight + marginTop);
  };
  //Añadir un atributo de identificación a las miniaturas
  document.querySelector('.thumbnails').innerHTML += [...slides]
    .map(
      (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
    )
    .join('');
  //Al hacer click en la miniatura mostrar su img grande
  document.querySelectorAll('.thumbnails img').forEach(el => {
    el.addEventListener('click', () => scrollToElement(el));
  });
  
  slideGallery.addEventListener('scroll', e => scrollThumb());
  
  scrollThumb();