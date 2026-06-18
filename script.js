
  const button = document.getElementById('button');
  const closeButton  = document.getElementById('closeButton');
  const drawer    = document.getElementById('drawer');

  button.addEventListener("click", () => {
    drawer.classList.add('open');
  });

  closeButton.addEventListener("click", () => {
    drawer.classList.remove('open');
  });

  overlay.addEventListener('click', () => {
    drawer.classList.remove('open');
  });
