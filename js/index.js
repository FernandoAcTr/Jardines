window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom',
});

sr.reveal('.jumbotron', {
  duration: 2000,
  origin: 'top',
  distance: '300px',
});

sr.reveal('.read-more', {
  duration: 2000,
  origin: 'bottom',
  delay: '1000',
});

sr.reveal('.main-widget', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2,
});

sr.reveal('.page-footer', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.2,
});

sr.reveal('.evento-rigth', {
  duration: 2000,
  origin: 'rigth',
  distance: '300px',
  viewFactor: 0.2,
});

sr.reveal('.evento-left', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2,
});

sr.reveal('.truco-widget', {
  duration: 2000,
  origin: 'bottom',
});

sr.reveal('.trucos-aside', {
  duration: 2000,
  origin: 'rigth',
  distance: '300px',
  viewFactor: 0.2,
});

sr.clean();