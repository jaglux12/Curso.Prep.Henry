// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var resultado;

  if (x>y)
  {
    resultado = x;
  }
  else
  {
    if(y>x){
      resultado = y;
    }else
      {
        resultado = Math.min(x,y);
      }
  }
  return resultado;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var resultado

  if (edad >= 18)
  {
    resultado = "Allowed"
  }
  else {
    resultado = "Not allowed"
  }
  return resultado
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var resultado
  switch(status)
  {
    case 1:
      resultado = "Online"
    break
    case 2:
      resultado = "Away"
    break
    default:
      resultado = "Offline"
    break
  }
  return resultado
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  var resultado
  switch(idioma)
  {
    case "aleman":
      resultado = "Guten Tag!"
    break
    case "mandarin":
      resultado = "Ni Hao!"
    break
    case "ingles":
      resultado = "Hello!"
    break
    default:
      resultado = "Hola!"
    break
  }
  return resultado
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var resultado
  switch(color)
  {
    case "blue":
      resultado = "This is blue"
    break
    case "red":
      resultado = "This is red"
    break
    case "green":
      resultado = "This is green"
    break
    case "orange":
      resultado = "This is orange"
    break
    default:
      resultado = "Color not found"
    break
  }
  return resultado
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return (numero === 10 || numero === 5) ? true:false
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return (numero < 50 && numero > 20) ? true:false
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código
  return (numero == Math.floor(numero)) ? true:false
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  var resultado
  var verif_fizz = false
  var verif_buzz = false

  if((numero%5)==0 && (numero%3)==0)
  {
    resultado = "fizzbuzz"
  }
  else if ((numero%3)==0)
  {
    resultado = "fizz"
    verif_fizz = true
  }
  else if((numero%5)==0)
  {
    resultado = "buzz"
    verif_buzz = true
  }
  else
  {
    resultado = numero
  }
  return resultado
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  var resultado

  if(num1 < 0 || num2 < 0 || num3 < 0)
  {
    resultado = "Hay negativos"
  }
  else if(num1 == 0 || num2 == 0 || num3 == 0)
  {
    resultado = "Error"
  }
  else
  {
    if(num1 > 0 && num1 > num2 && num1 > num3)
    {
      resultado = "Número 1 es mayor y positivo"
    }
    else if(num3 > num1 && num3 > num2)
    {
      resultado = num3 + 1
    }
    else
    {
      resultado = false
    }
  }

  return resultado
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var resultado = true

  if(numero == 0 || numero == 1)
  {
    resultado = false
  }

  for(var i = 2; i < numero; i++)
  {
    if((numero%i) == 0)
    {
      resultado = false
    }
  }
  return resultado
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return (valor == true) ? "Soy verdadero":"Soy falso"
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí

}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
