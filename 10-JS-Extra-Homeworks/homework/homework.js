// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const nuevoArray = [];
  for (clave in objeto) {
    nuevoArray.push([clave, objeto[clave]]);
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let newObject ={};
  let arrays = [];
  let contador = 0;
  for(let i = 0;i<string.length;i++){
    arrays.push(string[i]);
  }
  arrays.sort();
  for(let i = 0;i<arrays.length;i++){
    for(let j = 0;j<arrays.length;j++){
      if(arrays[i] === arrays[j]){
        contador++;
      }
    }
    newObject[arrays[i]] = contador;
    contador = 0;
  }
  return newObject;
}
function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayus='';
  let dontMayus='';
  let minus = s.toLowerCase();
  for(let i = 0;i<s.length;i++){
    if (minus[i] !== s[i]){
      mayus = mayus + s[i];
    }
    else{
      dontMayus = dontMayus + s[i];
    }
  }
  string = mayus + dontMayus; 
  return string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let newArray = str.split('');
  let frase = '';
  let arrayRevertido;
  let arrayFrase;
  let stringInvertida;
  for(let i = newArray.length-1;i>=0;i--){

    frase = frase + newArray[i];
  }
  arrayFrase = frase.split(' ');
  arrayRevertido = arrayFrase.reverse();
  stringInvertida = arrayRevertido.join(' ');

  return stringInvertida;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let stringNumber= numero.toString();
  let arrayNum = stringNumber.split('');
  let arrayReverse = arrayNum.reverse();  
  let stringNumberReverse = arrayReverse.join('');
  let Escapicua = "No es capicua";
  if(stringNumber === stringNumberReverse){
    Escapicua = "Es capicua";
  }

  return Escapicua;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena='';
  for(let i = 0;i<cadena.length;i++){
    if((cadena[i] !== 'a') && (cadena[i] !== 'b') && (cadena[i] !== 'c')){
      nuevaCadena = nuevaCadena + cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let elementoActual;
  for(let i = 0;i<arr.length;i++){
    elementoActual= arr[i];
    for(j = arr.length-1;j>i;j--){
      if(arr[i].length > arr[j].length){
        arr[i] = arr[j];
        arr[j] = elementoActual;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const unionArrays = [];
  for(let i = 0; i<arreglo1.length;i++){
    for(let j = 0; j<arreglo2.length;j++){
      if(arreglo1[i] === arreglo2[j]){
        unionArrays.push(arreglo1[i]);
      }
    }
  }
  return unionArrays;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

