// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var res = []

  for(var i = 0; i < array.length;i++)
  {
    res.push(array[i]+1)
  }
  return res
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var aux = array
  aux.push(elemento)
  return aux
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var aux = array
  aux.unshift(elemento)
  return aux
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = ""

  for(var i = 0; i < palabras.length;i++)
  {
      if(i==(palabras.length-1))
      {
        frase = frase + palabras[i]
      }else {
        frase = frase + palabras[i] + " "
      }
  }

  return frase
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return (array.includes(elemento))
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultados = 0
  for(var i=0;i<numeros.length;i++)
  {
      resultados = resultados + numeros[i]
  }
  return resultados
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultados = 0
  for(var i=0;i<resultadosTest.length;i++)
  {
      resultados = resultados + resultadosTest[i]
  }
  return resultados/resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var resultados = 0
  for(var i=0;i<numeros.length;i++)
  {
      resultados = Math.max(resultados,numeros[i])
  }
  return resultados
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resultados = 0
  if(arguments.length>0)
  {
    var aux = 1
    for(var i=0;i<arguments.length;i++)
    {
        aux = arguments[i] * aux
    }
    resultados = aux
  }
  return resultados
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var resultados = 0

  for(var i=0;i<arreglo.length;i++)
  {
      if(arreglo[i]>18)
      {
        resultados++
      }
  }

  return resultados
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  return (numeroDeDia==7 || numeroDeDia==1) ? "Es fin de semana":"Es dia Laboral"
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var aux = ""+n+""
  return (aux[0]=="9") ? true:false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var resultados = arreglo[0]
  var aux = true

  for(var i=0;i<arreglo.length;i++)
  {
      if(arreglo[i]==resultados)
      {
        aux = true
      }else {
        aux = false
      }
  }

  return aux
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var aux = []

  for(var i=0;i<array.length;i++)
  {
      if(array[i]=="Enero" || array[i]=="Marzo" || array[i]=="Noviembre")
      {
        aux.push(array[i])
      }
  }

  return (aux.length<3) ? "No se encontraron los meses pedidos":aux
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var aux = []

  for(var i=0;i<array.length;i++)
  {
      if(array[i]>100)
      {
        aux.push(array[i])
      }
  }

  return aux
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var aux = []
  var res = 0
  var interr = false
  var cont = 2

  for(var i = 0;i < 10;i++)
  {
    res = numero+cont
    if(i==res)
    {
      interr = true
      break
    }
    cont+=2
    aux.push(res)
  }
  return (interr==true) ? "Se interrumpió la ejecución":aux
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var aux = []
  var res = 0
  var cont = 2

  for(var i = 0;i < 10;i++)
  {
    res = numero+cont
    if(i==5)
    {
      continue
    }
    cont+=2
    aux.push(res)
  }
  return aux
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
