(function() {
  "use strict";

  /* * Configuração do Typed.js (Efeito de digitação)
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

})();

/* * Lógica dos Sliders (Perfil e Skills)
 */

// Função para o Slider de SKILLS (lado direito)
function changeSkillSlide(slideIndex) {
  // Pega todos os slides de skill e as bolinhas de skill
  let slides = document.querySelectorAll(".skill-slide");
  let dots = document.querySelectorAll(".skill-dot");

  // Remove classe active de todos
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Ativa o slide selecionado
  document.querySelector(`.skill-slide[data-skill-slide="${slideIndex}"]`).classList.add("active");
  // Ativa a bolinha (array começa em 0)
  dots[slideIndex - 1].classList.add("active");
}

// Função para o Slider de PERFIL (lado esquerdo)
function changeProfileSlide(slideIndex) {
  // Pega todos os slides de perfil e as bolinhas de perfil
  let slides = document.querySelectorAll(".profile-slide");
  let dots = document.querySelectorAll(".profile-dot");

  // Remove classe active de todos
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Ativa o slide selecionado
  document.querySelector(`.profile-slide[data-profile-slide="${slideIndex}"]`).classList.add("active");
  // Ativa a bolinha
  dots[slideIndex - 1].classList.add("active");
}