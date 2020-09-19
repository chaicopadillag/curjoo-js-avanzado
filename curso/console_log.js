console.group("Género de Música Electrónica");
console.log("Techno");
console.log("House");
console.log("Trance");
console.log("Hardstyle");
console.log("Drum Basss");
console.groupEnd();

console.groupCollapsed("Género de Música Electrónica");
console.log("Techno");
console.log("House");
console.log("Trance");
console.log("Hardstyle");
console.log("Drum Basss");
console.groupEnd();

console.dir(window);
console.dir(document);
console.log(console);
console.table(Object.entries(console));

console.table(perro_can);
console.clear();

console.time("tiempo");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("tiempo");
// console.log(arreglo);
