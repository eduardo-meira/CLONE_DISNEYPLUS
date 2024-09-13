document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const heroSection = document.querySelector(".hero");
  const heightHeroSection = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const actualHeight = this.window.scrollY;

    if (actualHeight < heightHeroSection) {
      hideElementOfHeader();
    }else{
      showElementOfHeader()
    }
  });

  //Secão de atração(shows) - progamração das abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const tabTarget = botao.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
      hideAllTheTabs();
      tab.classList.add("shows__list--is--active");
      removeClassOfButton();
      botao.target.classList.add("shows__tabs__button--is--active");
    });
  }

  //Seção FAQ - accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", openOrCloseTab);
  }
});

//Função para esconder botões
function hideElementOfHeader() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

//Função para mostrar botões
function showElementOfHeader() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

function openOrCloseTab(elemento) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe);
}

//Programção dos botões da seção Shows
function removeClassOfButton() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is--active");
  }
}

function hideAllTheTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is--active");
  }
}
