"use strict";

function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0
  //Convierto el número en array e invierto el orden
  num = num.toString();
  let arrNumInvertido = num.split("").reverse();
  let suma = [];
  //Ignoro los valores que son 0 y pusheo a suma los valores que son 1 ya operados
  for (let i = 0; i < arrNumInvertido.length; i++) {
    const element = arrNumInvertido[i];
    if(element == 0){
      continue;
    }else{
      let numMultiplicado = element * 2 ** i;
      suma.push(numMultiplicado);
    }
  }
  //Esto es para que no de error cuando quiero convertir el binario 0 o 1 a decimal
  if(num.length > 1){
    let resultado = suma.reduce(function(a, b){ return a + b; });
    return resultado;
  }else if (num == 1){
    return 1;
  }
  else{
    return 0;
  }
}

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
  if(num === 0){
    return 0;
  }
  let numDividido = num / 2;
  let arrBinario = [];
  while(numDividido != 0){
    if (Number.isInteger(numDividido)){
      arrBinario.push(0);
    }else{
      arrBinario.push(1);
    }
    numDividido = Math.floor(numDividido) / 2;
  }
  let resultado = arrBinario.reverse().join("");
  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
