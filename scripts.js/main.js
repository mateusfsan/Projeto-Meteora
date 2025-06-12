
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.querySelector('.nav-bar ul');

  // Abrir e fechar ao clicar no botão
  btnMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
  });

    //fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
      menu.classList.remove('active');
    }
  });

  // Impede que cliques dentro do menu fechem ele
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

   function atualizarImagemCarrossel() {
    const imagem1 = document.getElementById("slide1");
    const imagem2 = document.getElementById("slide2");
    const imagem3 = document.getElementById("slide3");
    const larguraTela = window.innerWidth;

    if (larguraTela <= 768) {
  // Mobile
  imagem1.src = "../assets/img/Banner_mobile.png";
  imagem2.src = "../assets/img/COLEÇÃO ATEMPORAL_mobile.png";
  imagem3.src = "../assets/img/COLEÇÃO ATEMPORAL2_mobile.png";

} else if (larguraTela >= 769 && larguraTela <= 1024) {
  // Tablet
  imagem1.src = "../assets/img/Banner_tablet.png";
  imagem2.src = "../assets/img/COLEÇÃO ATEMPORAL_tablet.png";
  imagem3.src = "../assets/img/COLEÇÃO ATEMPORAL(1)_tablet.png";

} else {
  // Desktop
  imagem1.src = "../assets/img/Banner_carousel.png";
  imagem2.src = "../assets/img/COLEÇÃO ATEMPORAL-desktop.png";
  imagem3.src = "../assets/img/COLEÇÃO ATEMPORAL (1)-desktop.png";
}
  }

  // Executa quando a página carrega
  window.addEventListener("load", atualizarImagemCarrossel);

  // Executa quando a tela é redimensionada
  window.addEventListener("resize", atualizarImagemCarrossel);

