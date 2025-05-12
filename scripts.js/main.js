
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.querySelector('.nav-bar ul');

  // Abrir e fechar ao clicar no botão
  btnMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede o clique de fechar o menu imediatamente
    menu.classList.toggle('active');
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
      menu.classList.remove('active');
    }
  });

  // Impede que cliques dentro do menu fechem ele
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

