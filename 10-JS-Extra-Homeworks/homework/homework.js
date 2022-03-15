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
  var arreglo = [] // Declarar nueva variable de tipo coleccion de datos en estado vacia, llamada: 'arreglo'  
  for (var x in objeto) { // for...in, recorre lo que esta dentro del: 'objeto' de tipo: coleccion de datos.
    // y en cada iteracion guarda en la variable x la clave del objeto  
    arreglo.push([x, objeto[x]])
    // Armar matriz clave-valor 
    // Adicionar valores o propiedades del objeto a la coleccion de datos, llamada: 'arreglo'
    // y en cada iteracion acceder al valor de la propiedad del objeto en posicion x y guardar el valor de la propiedad
    // en la coleccion de datos, llamada: 'arreglo'.
  }
  return arreglo; // Devolver arreglo
}

/*
--- notas_de_Objeto_A_matriz --- 

Funcion de_Objeto_A_Matriz recibe 1 parametro o argumento llamado: "objeto"
funcion(objeto(elemento) 
 
--- Metodo for...in

La instrucción for...in itera sobre todas las propiedades enumerables de un objeto que está 
codificado por cadenas (ignorando los codificados por Símbolos, incluidas las propiedades 
enumerables heredadas.)

Los parametros enviados hacen referencia a: 

for (variable in objeto)
  instrucción

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in
--

--- Método push 

Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
Los parametros enviados hacen referencia a: 
(objeto(elemento))

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
--

--- Método Object.keys() 

Object.keys devuelve un array cuyos elementos son strings correspondientes a las propiedades 
enumerables que se encuentran directamente en el object. El orden de las propiedades es el mismo 
que se proporciona al iterar manualmente sobre las propiedades del objeto.

Los parametros enviados hacen referencia a: 
object.keys(objeto)

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
--

--- Metodo for...of

La sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, 
como lo son: String, Array, arguments, NodeList, TypedArray, Map, Set

Los parametros enviados hacen referencia a: 
for (variable of iterable) {
  statement
}

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of
--

--- Otra opcion for de_Objeto_A_matriz 

  var arreglo = [] // Declarar nueva variable de tipo coleccion de datos en estado vacia, llamada: 'arreglo'
  var key = [] // Declarar nueva variable de tipo coleccion de datos en estado vacia, llamada: 'key'
  key = Object.keys(objeto) // Guardar en la variable llamada: 'key' el resultado 
  // del metodo Objetc.keys que recorre el 'objeto' y devuelve un array con las claves que tiene el: 'objeto'
  for (var i = 0; i < key.length; i++) {  // Declarar nueva variable de nombre: i, y Recorrer objeto llamado:"key" de tipo: coleccion de datos.
    // la variable i, inicia la iteraccion en key.length;    
    // key.length; puntualmente hace referencia a la cantidad de caracteres del objeto: ("key"). 
    // Posicion de la variable i, es menor a la longitud de objetos de la coleccion de datos, llamada:"key".
    // y lo sumaremos de 1 en 1.  
    arreglo.push([key[i], objeto[key[i]]])
    // Adicionar valores clave y valor en la coleccion de datos, llamada: 'arreglo'
    // y en cada iteracion accede al valor de la propiedad del objeto en posicion i y guardar el valor en la coleccion de datos, llamada: 'arreglo'. 
  }
  return arreglo // Devolver arreglo
}
--

--- Glosario

-la funcion map, refiere a levantar el plano de, trazar mapa en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Key, hace referencia a: clave en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
--
*/

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var obj = {} // Declarar nueva variable de tipo coleccion de datos en estado vacia, llamada: 'obj' 
  for (var i = 0; i < string.length; i++) { // Declarar nueva variable de nombre: i, y Recorrer objeto llamado:"string" de tipo: cadena.
    // la variable i, inicia la iteraccion en string.length; 
    // string.length; puntualmente hace referencia a la cantidad de caracteres de la cadena, llamada: "string".  
    // Posicion de la variable i, es menor a la longitud de caracteres de la cadena, llamada:"string".
    // y lo sumaremos de 1 en 1. 
    if (!obj[string[i]]) { // si, la variable 'obj', del "string" en la posicion i, no existe. (!)
      obj[string[i]] = 1 // la variable 'obj', del "string" en la posicion i, sera igual a 1.
      // Inicializar la nueva clave encontrada en 1 
    } else { // si, existe 
      obj[string[i]] = obj[string[i]] + 1 // la variable 'obj', del "string" en la posicion i, 
      // es igual a la variable 'obj', del "string" en la posicion i + 1.
      // Acumular + 1, del elemento 'clave' encontrado. 
    }
  }
  return obj  // Devolver arreglo
}

/*
--- notas_number_Of_Characters --- 
 
Funcion number_Of_Characters recibe 1 parametro o argumento llamado: "string"
funcion(objeto(elemento) 

--- operador_Comparación (!)

Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 

No es igual (!=) // Devuelve true si los operandos no son iguales.

Ejemplo: 

!false = true
!true = false 
--

--- Otra opcion number_Of_Characters:

  function numberOfCharacters(string) {
  var obj = {}
  for (let i = 0; i < string.length; i++) {
    if (Object.keys(obj).includes(string[i])) {
      obj[string[i]] = obj[string[i]] + 1
      continue;
    }
    obj[string[i]] = 1
  }
  return obj;
}
--

--- Property accessors: Dot Notation or Bracket Notation ???

la notación por puntos, el nombre del método o propiedad del objeto, debe de tener un formato válido para identificadores, 
es decir, que sea una cadena alfanumérica, pudiendo contener al signo de dólar y al guión bajo, además de no poder empezar por un número. 
La notación por corchetes, omite esa restricción.
Nota. Notación por puntos solo acepta variables.

Ejemplo: 

objeto.propiedad
objeto[propiedad]

https://www.acontracorrientech.com/objetos-en-javascript-guia-basica/
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors
--


--- Método Object.keys() 

Object.keys devuelve un array cuyos elementos son strings correspondientes a las propiedades 
enumerables que se encuentran directamente en el object. El orden de las propiedades es el mismo 
que se proporciona al iterar manualmente sobre las propiedades del objeto.

Los parametros enviados hacen referencia a: 
object.keys(objeto)

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
--

--- Metodo includes

Determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

Los parametros enviados hacen referencia a: 
arr.includes(searchElement[, fromIndex])

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
--


--- Glosario

-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
*/

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cadenaMayus = "" // Declarar variable de tipo cadena de caracteres en estado vacio, llamada: cadena_Mayuscula.
  var cadenaMinus = "" // Declarar variable de tipo cadena de caracteres en estado vacio, llamada: cadena_Minuscula.

  for (var i = 0; i < s.length; i++) { // Declarar nueva variable de nombre: i, y Recorrer objeto llamado:"s" de tipo: cadena.
    // la variable i, inicia la iteraccion en s.length; 
    // string.length; puntualmente hace referencia a la cantidad de caracteres de la cadena, llamada: "s".  
    // Posicion de la variable i, es menor a la longitud de caracteres de la cadena, llamada:"s".
    // y lo sumaremos de 1 en 1. 
    if (s[i] === s[i].toUpperCase()) { // si, la letra en la posicion i, de la variable cadena, 
      // es igual a la letra en la posicion i, de la variable cadena; convertida en mayuscula.
      cadenaMayus += s[i] // Acumular + 1, del elemento 'clave' encontrado, en la variable llamada: cadena_Mayuscula
    } else { // si, es falso
      cadenaMinus += s[i] // Acumular + 1, del elemento 'clave' encontrado, en la variable llamada: cadena_Minuscula
    }
  }
  return cadenaMayus.concat('', cadenaMinus) // Devolver variable cadena_Mayuscula, unida '' cadena_Minuscula
}

/*
--- notas_cap_To_Front --- 

Funcion cap_To_Front recibe 1 parametro o argumento llamado: "s"
funcion(objeto(elemento) 

--- Metodo UpperCase

El método toUpperCase() devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
Los parametros enviados hacen referencia a: 
cadena.toUpperCase() 

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
--
 
--- Ejemplo: simplificar sentencia

cadenaMayus = cadenaMayus + s[i]; es igual cadenaMayus += s[i];
--

--- Glosario

-La funcion concatenate, hace referencia a: unir, enlazar en ingles 
-La funcion return hace referencia a: devolver o regresar en ingles.
-La palabra clave string hace referencia a: cadena o cuerda en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-La funcion to upper_Case, refiere a mayusculas en ingles.
--
*/


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase = str.split(' ').map(function (element) { // Declara variable llamada frase
    // Tomar cadena de texto llamada: "str"  recibida como argumento
    // Split, convierte en un conjunto de datos(array) la cadena de texto recibida como argumento, separado las frases por: ' '.
    // Map, crea nuevo conjunto de datos(array) con los resultados de la funcion
    return element.split('').reverse().join('') // Devolver elemento
    // Split, convierte en un conjunto de datos(array) la cadena de texto recibida como argumento, separado las frases por: ,.
    // Reverse, invierte el orden de los elementos de un array en su lugar
    // Join, une todos los elementos de una matriz en una cadena y devuelve esta cadena.
  }).join(' ') // Join, une todos los elementos de una matriz en una cadena y devuelve esta cadena., separado por: ' '
  return frase // Devolver variable frase
}

/*
--- notas_as_A_Mirror --- 
 
Funcion as_A_Mirror recibe 1 parametro o argumento llamado: "str"
funcion(objeto(elemento) 


--- Método split
 
Divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

Los parametros enviados hacen referencia a: 
cadena.split([separador][, limite])

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
--

--- Método map

Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

Los parametros enviados hacen referencia a: 
(funcion_Call_Back(valor_Actual_a_Iterar, indice))

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
--

--- Método reverse

Invierte el orden de los elementos de un array en su lugar. 
El primer elemento pasa a ser el último y el último pasa a ser el primero.

Los parametros enviados hacen referencia a: 
elemento.reverse()

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
--

--- Método join

Une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

Los parametros enviados hacen referencia a: 
elemento.join([separator])

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La funcion split, hace referencia a: separar o dividir en ingles.
-La funcion map, hace referencia a: trazar un mapa o levantar el plano de en ingles.
-La funcion reverse, hace referencia a: inverso, contrario o reverso en ingles.
-La funcion join, hace referencia a: unir o juntar en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-- 
*/


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numero1 = numero.toString(); // Declarar variable numero1, que sera igual al valor del argumento recibido 
  // Convertido en un dato de tipo cadena de caracteres o "string".
  var numero2 = ""; // Declarar variable numero2, que inicialmente es una cadena de caracteres "" vacia.
  numero2 = numero1.split("").reverse().join(""); // numero2 es igual a numero 1 pero con el resultado de aplicar los metodos:
  // Split, convierte en un conjunto de datos(array) la cadena de texto recibida como argumento, separado las frases por: ,.
  // Reverse, invierte el orden de los elementos de un array en su lugar
  // Join, une todos los elementos de una matriz en una cadena y devuelve esta cadena.
  if (numero1 === numero2) { // si, numero1 es igual a numero2
    return "Es capicua" // Devolver: "Es capicua"
  } else { // si, numeros1 no es igual a numero2 
    return "No es capicua" // Devolver: "Es capicua"
  }
}

/*
--- notas_capicua --- 
 
Funcion capicua recibe 1 parametro o argumento llamado: "numero"
funcion(objeto(elemento) 

-- Objeto string

Se utiliza para representar y manipular una secuencia de caracteres.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
--

--- Método split - String
 
Divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
es decir: Separa o divide una cadena de caracteres y la convierte en un conjunto de datos.

Los parametros enviados hacen referencia a: 
cadena.split([separador][, limite])

Ejemplo: 

var_Numero = "12321"
var_Numero1 = "1", "2", "3", "2", "1"

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
--

--- Método reverse - Array

Invierte el orden de los elementos de un array en su lugar. 
El primer elemento pasa a ser el último y el último pasa a ser el primero.

Los parametros enviados hacen referencia a: 
elemento.reverse()

Ejemplo: 

var_Numero = "12345"
var_Numero1 = "54321"

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
--

--- Método join

Une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

Los parametros enviados hacen referencia a: 
elemento.join([separator])

Ejemplo: 

var_Numero = "1", "2", "3", "4", "5"
var_Numero1 = "12345"

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La funcion split, hace referencia a: separar o dividir en ingles.
-La funcion join, hace referencia a: unir o juntar en ingles.
-La funcion map, hace referencia a: trazar un mapa o levantar el plano de en ingles.
-La funcion reverse, hace referencia a: inverso, contrario o reverso en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-- 
*/

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadena_NoAbc = ""; // Crea un String o cadena de caracteres, con el nombre cadena_No_Abc, en estado vacio. ""  
  for (var i = 0; i < cadena.length; i++) {  // Declarar nueva variable de nombre: i, y Recorrer objeto llamado:"cadena" de tipo: cadena de caracteres.
    // la variable i, inicia la iteraccion en cadena.length; 
    // cadena.length; puntualmente hace referencia a la cantidad de caracteres de la cadena, llamada: "cadena". 
    // Posicion de la variable i, es menor a la longitud de caracteres de la cadena, llamada:"cadena".
    // y lo sumaremos de 1 en 1.     
    // Es decir: La posicion de la variable i, es menor a la cantidad de caracteres de la variable cadena, y lo sumaremos de 1 en 1.    
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") { // si, cadena en la posicion i, es diferente de "a", &&
      // y si, cadena en la posicion i, es diferente de "b", &&
      // y si, cadena en la posicion i, es diferente de "c"
      cadena_NoAbc = cadena_NoAbc + cadena[i]
      // "cadena_No_Abc", inicialmente es un cadena de caracteres vacia y si cumple la condicion agregar el caracter 
      // a la variable: "cadena_No_Abc", en la posicion i. 
    }
  }
  return cadena_NoAbc; // Devolver: cadena_No_Abc
}


/*
--- notas_delete_Abc --- 

Funcion delete_Abc recibe 1 parametro o argumento llamado: "cadena"
funcion(objeto(elemento) 

--- Ejemplo: simplificar sentencia

cadena_NoAbc = cadena_NoAbc + cadena[i]; es igual, cadena_NoAbc += cadena[i];
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
--
---
*/

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arr1 = new Array; // Crea nuevo Array o conjunto de datos con el nombre: "arr1"  
  arr1 = arr.sort(function (a, b) { // La coleccion de datos: "arr1" es igual al argumento recibido: "arr" 
    // pero con el resultado de aplicar el metodo:   
    // Sort, ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.
    // Deben ser enviados dos parametros: sort(funcion(a,b))
    return a.length - b.length // Devolver o retornar por la longitud de manera ascendente
    // return b.length - a.length // Devolver o retornar por la longitud de manera descendente
  })
  return arr1; // Devolver: coleccion de datos ordenado llamado: "arr1"
}

/*
--- notas_sort_Array --- 
 
Funcion sort_Array recibe 1 parametro o argumento llamado: "arr"
funcion(objeto(elemento) 


--- Método sort - Array

Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

Los parametros enviados hacen referencia a: 
coleccion_datos.sort([compareFunction])

Ejemplo ordenamiento longitud ascendente: 
 
["You", "are", "beautiful", "looking"]
 ["3", "3", "9", "7"]
[“You", "are", "looking", "beautiful"]
 ["3", "3", "7", "9"]

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
--

--- Glosario

-El metodo sort, hace referencia a ordenar, clasificar en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
--
*/

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arreglo = []; // Crea nuevo Array o conjunto de datos con el nombre arreglo, en estado vacio.
  for (let i = 0; i < arreglo1.length; i++) { // Declarar nueva variable de nombre: i, y Recorrer objeto llamado:"arreglo 1" de tipo: cadena de caracteres.
    // la variable i, inicia la iteraccion en arreglo1.length; 
    // arreglo1.length; puntualmente hace referencia a la cantidad de caracteres de la coleccion de datos, llamada: "arreglo 1". 
    // Posicion de la variable i, es menor a la longitud de caracteres de la coleccion de datos, llamada:"arreglo 1".
    // y lo sumaremos de 1 en 1.     
    // Es decir: la posicion de la variable i, sera menor a la cantidad de caracteres de la variable arreglo1, y lo sumaremos de 1 en 1.
    for (let j = 0; j < arreglo2.length; j++) { // Declarar nueva variable de nombre: j, y Recorrer objeto llamado:"arreglo 2" de tipo: cadena de caracteres.
      // la variable j, inicia la iteraccion en arreglo2.length; 
      // arreglo2.length; puntualmente hace referencia a la cantidad de caracteres de la coleccion de datos, llamada: "arreglo 2". 
      // Posicion de la variable j, es menor a la longitud de caracteres de la coleccion de datos, llamada:"arreglo 2".
      // y lo sumaremos de 1 en 1.      
      // es decir: la posicion de la variable j, sera menor a la cantidad de caracteres de la variable: "arreglo 2", y lo sumaremos de 1 en 1.
      if (arreglo1[i] === arreglo2[j]) { // si, el arreglo en la posicion i, es igual al arreglo en la posicion j.
        arreglo.push(arreglo1[i]) // Envia el valor de la posicion i, del "arreglo_1" al "arreglo". 
      }
    }
  }
  return arreglo; // devolver arreglo 
}

/*
  --- notas_busco_Interseccion
   
  Funcion notas_busco_Interseccion recibe 2 parametros o argumentos llamado: "arreglo1" , "arreglo2" 
  funcion(objeto(elemento, elemento) 
  
  Ejemplo: 
  Interseccion hace referencia a numeros que tiene en comun.
  
  arreglo1 = ["4", "2", "3", "5", "0"]
  arreglo2 = ["1", "3", "4", "6", "7"]
  arreglo_N_Comun= ["4", "3"]
  
  --- Método push - Array
  
  Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
  Los parametros enviados hacen referencia a: 
  (objeto(elemento))
  
  Ejemplo: 
  var_Numero = "12345"
  var_Numero1 = "54321"
  
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  --
  
  --- Glosario
  
  -la funcion map, refiere a levantar el plano de, trazar mapa en ingles.
  -La funcion return hace referencia a: devolver o regresar en ingles.
  -El metodo push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
  -Array, hace referencia a: coleccion, conjunto o formacion en ingles.
  -Key, hace referencia a: clave en ingles.
  -El metodo length, hace referencia a longitud o largo en ingles.
  -Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
  -El metodo sort, hace referencia a ordenar, clasificar en ingles.
  -Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
  -Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
  -Declarar hace referencia a escribir la funcion.
  -Invocar hace referecia de hacer funcionar la funcion.
  -Interseccion hace referencia a numeros que tiene en comun.
  --
*/

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

