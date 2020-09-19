!(function (c) {
  const contarNumeroCaracter = (letra) => {
    return letra.length;
  };

  const RecortarCaracterSegunNumero = (letra, numero) => letra.slice(0, numero);

  const StringDevuelArraySeparadosPorCaracter = (letra) => {
    let letras_array = letra.split(" ");

    return letras_array;
  };

  const RepetirTexto = (letra, numero) => {
    let letra_repetido = "";
    for (let i = 1; i <= numero; i++) {
      letra_repetido += `${letra} `;
    }

    return letra_repetido;
  };

  c.log(contarNumeroCaracter("Electronic Music"));
  c.log(RecortarCaracterSegunNumero("Electronic Music", 4));
  c.log(StringDevuelArraySeparadosPorCaracter("Hola que tal"));
  c.log(RepetirTexto("Electronic Music", 3));
})(console);
