
  const button = document.getElementById('button');
  const closeButton  = document.getElementById('closeButton');
  const drawer    = document.getElementById('drawer');


  button.addEventListener("click", () => {
    drawer.classList.toggle('open');
  });
    drawer.addEventListener("click", () => {
    drawer.classList.remove('open');
  });

  closeButton.addEventListener("click", () => {
    drawer.classList.remove('open');
  });
