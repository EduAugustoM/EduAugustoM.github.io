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

  // INICIA OS CONTADORES
  window.addEventListener('load', () => {
    initCounters();
  });

  window.addEventListener('load', () => {
    initCounters();  // Inicia contadores
    initBackToTop(); // Inicia botão voltar ao topo
  });

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

/* * Função para Controle dos Slides do Resumo
 * ID: O ID da div pai (ex: 'xp-group')
 * SlideIndex: O número do slide que deve aparecer
 */
function changeResumeSlide(groupId, slideIndex) {
  // 1. Pega o container principal do grupo
  const groupContainer = document.getElementById(groupId);
  
  if (groupContainer) {
    // 2. Seleciona todos os slides E todos os pontos DENTRO desse grupo
    const slides = groupContainer.querySelectorAll('.resume-slide');
    const dots = groupContainer.querySelectorAll('.dot');

    // 3. Remove a classe 'active' de todo mundo desse grupo
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // 4. Adiciona a classe 'active' apenas no slide e ponto clicado
    // Nota: O seletor procura especificamente data-slide="x"
    const targetSlide = groupContainer.querySelector(`.resume-slide[data-slide="${slideIndex}"]`);
    if (targetSlide) {
      targetSlide.classList.add('active');
    }
    
    // Arrays começam em 0, então subtraímos 1 do index
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add('active');
    }
  }
}

/* * Slider do Portfólio
 */
function changePortfolioSlide(slideIndex) {
  const container = document.getElementById('portfolio-slider-container');
  const slides = container.querySelectorAll('.portfolio-slide');
  const dots = document.querySelectorAll('.portfolio-dot');

  // Esconde todos
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Mostra o escolhido
  const targetSlide = container.querySelector(`.portfolio-slide[data-slide="${slideIndex}"]`);
  if (targetSlide) {
    targetSlide.classList.add('active');
  }
  
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add('active');
  }
}

/* * Slider de Serviços
 */
function changeServiceSlide(slideIndex) {
  const container = document.getElementById('services-slider-container');
  const slides = container.querySelectorAll('.service-slide');
  const dots = document.querySelectorAll('.service-dot');

  // Oculta todos
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Mostra o ativo
  const targetSlide = container.querySelector(`.service-slide[data-slide="${slideIndex}"]`);
  if (targetSlide) {
    targetSlide.classList.add('active');
  }
  
  // Ativa a bolinha (array começa em 0)
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add('active');
  }
}

/* * Animação dos Contadores (Counter Up)
 */
function initCounters() {
  const counters = document.querySelectorAll('.counter-num');
  const speed = 200; // Quanto maior, mais lento

  const animate = (counter) => {
    const value = +counter.getAttribute('data-target');
    const data = +counter.innerText;
    
    const time = value / speed;
    
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(() => animate(counter), 20); // Chama a função novamente a cada 20ms
    } else {
      counter.innerText = value;
    }
  }

  // Observador para só disparar quando aparecer na tela
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animate(counter);
        observer.unobserve(counter); // Para de observar depois que animou
      }
    });
  }, { threshold: 0.5 }); // Dispara quando 50% do item estiver visível

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

/* * Controle do Botão Back to Top
 */
function initBackToTop() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  const toggleBackToTop = () => {
    if (window.scrollY > 100) { // Aparece após rolar 100px
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  };

  // Escuta o evento de rolagem
  window.addEventListener('load', toggleBackToTop);
  document.addEventListener('scroll', toggleBackToTop);
}