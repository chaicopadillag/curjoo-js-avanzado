class Animal {
  constructor(nombre, especie, sonido) {
    this.nombre = nombre;
    this.especie = especie;
    this.sonido = sonido;
    this.raza = null;
  }
  HacerSonido() {
    console.log(`El animal ${this.nombre} ${this.sonido}`);
  }
  DecirEspecie() {
    console.log(`El animal ${this.nombre} es de especie ${this.especie}`);
  }
  set setRaza(raza) {
    this.raza = raza;
  }
  get getRaza() {
    return this.raza;
  }
  static Saludar() {
    console.log("Hola soy un Animal");
  }
}

class Perro extends Animal {
  constructor(nombre, especie, sonido, tamanio) {
    super(nombre, especie, sonido);
    this.tamanio = tamanio;
  }
  Ladrar() {
    console.log("Guauuu!!!... Guauuu!!!");
  }
}
const perro_can = new Perro("Perro", "Canino", "Ladra", "Buldoj"),
  paloma = new Animal("Paloma", "Ave", "Gulula"),
  leon = new Animal("Leon", "Felino", "Ruge");

console.log(perro_can);
console.log(paloma);
console.log(leon);

perro_can.HacerSonido();
perro_can.DecirEspecie();
perro_can.Ladrar();
console.log("=============================================");

paloma.HacerSonido();
paloma.DecirEspecie();

leon.HacerSonido();
leon.DecirEspecie();
console.log("=============Metodo static, get, set==============");

Animal.Saludar();
console.log(perro_can.getRaza);
perro_can.setRaza = "Rodwailer";
console.log(perro_can.getRaza);
