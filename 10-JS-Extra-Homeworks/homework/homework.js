// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto)

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let letras = new Map();
  var letras_cont = []
  for(var i = 0; i < string.length; i++){
    if(!letras_cont.includes(string.charAt(i)))
    {
      letras_cont.push(string.charAt(i))
    }
  }

  for(var i = 0; i < letras_cont.length; i++){
    var cont = 0
    for(var v = 0; v < string.length; v++){
      if(string.charAt(v) == letras_cont[i])
      {
        cont = cont + 1
      }
    }
    letras.set(letras_cont[i],cont)
  }

  return Object.fromEntries(letras)

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var letras_m = []
  var letras_min = []
  for(var i = 0; i < s.length ;i++ )
  {
    if(s.charAt(i) == s.charAt(i).toUpperCase())
    {
      letras_m.push(s.charAt(i))
    }else{
      letras_min.push(s.charAt(i))
    }
  }
  var res = letras_m.concat(letras_min)
  return res.join("")
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var res = str.split(" ")

  for(var i = 0; i < res.length; i++){
    if( i == res.length-1){
      res[i] = res[i].split("").reverse().join("")
    }else{
      res[i] = res[i].split("").reverse().join("") + " "
    }
  }

  return res.join("")
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cad = numero.toString().split("").reverse().join("")
  var res = ""

  if(numero == cad){
    res = "Es capicua"
  }else{
    res = "No es capicua"
  }
  return res
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cad = cadena.split("")
  var res = []
  for(var i = 0; i < cad.length; i++)
  {
    if(cad[i] != "a" && cad[i] != "b" && cad[i] != "c"){
      res.push(cad[i])
    }
  }
  return res.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
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
