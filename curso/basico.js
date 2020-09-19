(function () {
  // string
  let nombr = "Gerard";
  let apellido = "Chaico Padilla";
  //metodos de string
  console.log(nombr.toUpperCase());
  console.log(apellido.toLowerCase());
  console.log(apellido.split(" "));
  // templete string
  let saludo = `Hola mi nombre es ${nombr} ${apellido}`;
  console.log(saludo);

  // numeros

  let a = 12;
  let b = 10.5;
  let c = "5.02";
  console.log(a.toFixed(2));
  console.log(parseInt(b));
  console.log(typeof a, typeof c);
  console.log(b + parseInt(c));
  console.log(b + parseFloat(c));

  console.log("Datos de mi Objeto Persona");
  const persona = {
    nombre: "Gerardo Chaico",
    edad: 20,
    correo: "chaico@gmail.com",
    web: "www.chaico.com",
  };
  for (const propiedad in persona) {
    console.log(propiedad, ":", persona[propiedad]);
  }

  const name = persona.nombre;

  for (const indice of name) {
    console.log(indice);
  }
  const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
      // break;
      continue;
    }
    console.log(numeros[i]);
  }
  // TODO:Destruccturación
  let { nombre, edad, correo, web } = persona;
  console.log(nombre, edad, correo, web);

  let [
    diez,
    veinte,
    treinta,
    cuarenta,
    cincuenta,
    secenta,
    setenta,
    ochenta,
    noventa,
    cien,
  ] = numeros;
  console.log(
    diez,
    veinte,
    treinta,
    cuarenta,
    cincuenta,
    secenta,
    setenta,
    ochenta,
    noventa,
    cien
  );

  // FIXME:objetos literales
  let perro = "Chiguagua",
    age = 10;
  const dog = {
    perro,
    age,
    raza: "Callejero",
    ladrar() {
      console.log("GUAUUUUU GUAUUUU!!!!!");
    },
  };

  console.log(dog);
  dog.ladrar();

  //TODO: Parametros rest

  function suma(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function (n) {
      resultado += n;
    });
    return resultado;
  }
  console.log(suma(5, 2));
  console.log(suma(5, 2, 7, 7));

  //FIXME: operador spread o propagador
  let numeros2 = [110, 120, 130, 140, 150];

  const arrayNum = [numeros, numeros2];
  console.log(arrayNum);

  const arraySpread = [...numeros, ...numeros2];
  console.log(arraySpread);

  // TODO:funciones arrow o flechas

  const escucharMusica = () => {
    console.log("Estoy escuchando música");
  };
  escucharMusica();

  const salud = () =>
    console.log("Un brindis por los que amamos la música electrónica");
  salud();
  const saludador = (nombre) => console.log(`Hola que tal ${nombre}`);
  saludador("Maria");

  const sumando = (a, b) => a + b;
  console.log(sumando(5, 5));

  const EstoyEschandoMusicaElectro = (electro) =>
    `Estoy escuchando música ${electro}`;

  console.log(EstoyEschandoMusicaElectro("Electrónica"));

  numeros.forEach((element, indice) =>
    console.log(`El elemento ${element} esta en indice ${indice}`)
  );

  const Perro = {
    nombre: "Chiguauuuuu!",
    ladrar() {
      console.log(this);
    },
  };

  const Can = {
    nombre: "Chiguauuuuu!",
    ladrar: () => {
      console.log(this);
    },
  };

  Perro.ladrar();
  Can.ladrar();

  // FIXME:función constructora
  function Animal(animal, especie, sonido) {
    this.animal = animal;
    this.especie = especie;
    this.sonido = sonido;
  }
  Animal.prototype.OnoMatopea = function () {
    console.log(`El animal ${this.animal} ${this.sonido}`);
  };

  Animal.prototype.DecirEspecie = function () {
    console.log(`El animal ${this.animal} es de especie ${this.especie}`);
  };

  const perro_can = new Animal("Perro", "Canino", "Ladra"),
    paloma = new Animal("Paloma", "Ave", "Gulula"),
    leon = new Animal("Leon", "Felino", "Ruge");

  console.log(perro_can);
  console.log(paloma);
  console.log(leon);

  perro_can.OnoMatopea();
  perro_can.DecirEspecie();

  paloma.OnoMatopea();
  paloma.DecirEspecie();

  leon.OnoMatopea();
  leon.DecirEspecie();
})();
