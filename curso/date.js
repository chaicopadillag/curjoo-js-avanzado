(function () {
  console.clear();
  console.log(Date());
  let fecha = new Date();
  console.log("Dia del mes", fecha.getDate());
  console.log("Dia de la semana", fecha.getDay());
  console.log("Mes", fecha.getMonth());
  console.log("Año", fecha.getFullYear());
  console.log("Hora", fecha.getHours());
  console.log("Minuto", fecha.getMinutes());
  console.log("Segundo", fecha.getSeconds());
  console.log("Milesegundos", fecha.getMilliseconds());

  console.log(fecha.toString());
  console.log(fecha.toDateString());
  console.log(fecha.toLocaleString());
  console.log(fecha.toLocaleDateString());
  console.log(fecha.toLocaleTimeString());
  console.log(fecha.getTimezoneOffset());
  console.log(fecha.getUTCDate());
  console.log(fecha.getUTCHours());
  //   fecha timestamp
  console.log(Date.now());

  // Objeto Math-> Matemático

  console.log(Math);
  console.log(Math.PI);
  console.log(Math.abs(-7.8));
  console.log(Math.ceil(9.2));
  console.log(Math.floor(9.8));
  console.log(Math.round(9.6));
  // raiz
  console.log(Math.sqrt(81));
  // exponencial
  console.log(Math.pow(2, 5));
  console.log(Math.sign(5.6));
  console.log(Math.random());
  console.log(Math.round(Math.random() * 1000));
})();
