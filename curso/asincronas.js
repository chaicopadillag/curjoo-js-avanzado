!(function (c) {
  // TODO: Temporizador
  c.info("Inicio");
  setTimeout(() => {
    c.log("Desdepues de un tiempo");
  }, 3000);

  setInterval(() => {
    c.log(new Date().toLocaleTimeString());
  }, 1000);

  //   FIXME: ASincronía y Evento Loop
})(console);
