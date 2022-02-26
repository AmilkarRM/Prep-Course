// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

const { default: simpleGit } = require("simple-git");

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "";

/*
--- Strig ---
const nuevaString = "";
const nuevaString = '';
const nuevaString = "cadena_Datos";
const nuevaString = 'cadena_Datos';
*/

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

/*
--- Numerica ---
const nuevoNum = 1;
*/

// Crea una variable booleana:
const nuevoBool = true;

/*
--- Boolena ---
const nuevoBool = true;
const nuevoBool = false;
*/

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

/*
--- Matematico ---
const nuevaResta = 10 - 5 === 5;
*/

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

/*
--- Multi ---
const nuevaMultiplicacion = 10 * 4 === 40;
*/

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

/*
--- notas_Modulo 

const nuevoModulo = 21 % 5 === 1;
modulo, es lo que sobra de la division.
21/4=5 y me queda 1, es decir que el modulo de % 21 es 1.
*/

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str  // Devolver valor del argumento recibido: "str"  
}

/*
--- solucion_String ---
  return str  
*/

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código: 
  return x+y  // Devolver el resultado de la operacion 
  // los valores de argumentos recibidos: "x", "y"  
}

/*
--- solucion_Suma ---
  return x+y  
*/

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:  
  return x-y // Devolver el resultado de la operacion 
  // los valores de argumentos recibidos: "x", "y"  
}

/*
--- solucion_Resta ---
  return x-y  
*/

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x*y  // Devolver el resultado de la operacion 
  // los valores de argumentos recibidos: "x", "y"  
}

/*
--- solucion_Multiplica ---
  return x*y  
*/


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x/y  // Devolver el resultado de la operacion 
  // los valores de argumentos recibidos: "x", "y"  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) { // si, el valor de: "x" es estrictamente igual al valor de: "y".
    return true; // Devolver verdadero
  }  else { // si, no coincide el valor de: "x" estrictamente igual al valor de: "y".
    return false; // Devolver falso
  }
}

/*
--- notas_son_Iguales

Funcion son_Iguales recibe 2 parametros o argumentos llamados: "x", "y"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento_1, elemento_2) 

--- operadores_Comparacion

3 (===) iguales compara el dato y el valor.
2 (==) igualaes compara el dato.

Ejemplo: 

5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.

--- Probar consola_RunJs

console.log("1"===1);
--
*/

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) { // si, la longitud del valor de: "str1" es estrictamente igual a la longitud del valor de: "str2"
    return true // Devolver verdadero
  } else { // si, no coincide la longitud del valor de: "str1", estrictamente igual a la longitud del valor de: "str2"
    return false // Devolver falso
  }    
}

/*
--- notas_tiene_Misma_Longitud ---  

Funcion tiene_Misma_Longitud recibe 2 parametros o argumentos llamados: "str1", "str2"

Los parametros enviados hacen referencia a: 
cadena.length 

--- propiedad.length - String

La propiedad de un objeto String representa la longitud de una cadena.

--- Property accessors: Dot Notation or Bracket Notation ???

la notación por puntos, el nombre del método o propiedad del objeto, debe de tener un formato válido para identificadores, 
es decir, que sea una cadena alfanumérica, pudiendo contener al signo de dólar y al guión bajo, además de no poder empezar por un número. 
La notación por corchetes, omite esa restricción.
Nota. Notación por puntos solo acepta variables.

Ejemplo: 

objeto.propiedad
Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
objeto[propiedad]
Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.

https://www.acontracorrientech.com/objetos-en-javascript-guia-basica/
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors
---

*/

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90){ // si, el valor de la variable: "num" es menor a: 90  
    return true // Devolver verdadero
  } else { // si, el valor de la variable: "num" es mayor o igual a: 90.
    return false // Devolver falso
  }
}

/*
--- notas_menos_Que_Noventa  

Funcion menos_Que_Noventa recibe 1 parametro o argumento llamados: "num" 

*/


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){ // si, el valor de la variable: "num" es mayor a: 50  
    return true  // Devolver verdadero
  } else {  // si, el valor de la variable: "num" es menor o igual a: 50.
    return false  // Devolver falso   
  }
}

/*
--- notas_mayor_Que_Cincuenta  

Funcion mayor_Que_Cincuenta recibe 1 parametro o argumento llamados: "num" 

*/


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y  // Devolver el resultado de la operacion 
  // los valores de argumentos recibidos: "x", "y"  
}

/*
--- notas_Obtener_Resto_Modulo ---  

Funcion Obtener_Resto recibe 2 parametros o argumentos llamados: "x", "y"

Ejemplo:

modulo, es lo que sobra de la division.
21/4=5 y me queda 1, es decir que; 21 modulo % de 4, es 1 
20/4=4 y me queda 0, es decir que el modulo de % 21 es 0

-Cuando divides un numero par el resultado es 0, es decir una division exacta.
-Cuando divides un numero impar el resultado no es 0, es decir una division con residuo.
--
*/

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0) { // si, el valor de la variable: "num" modulo(%): 2, es estrictamnete igual a: 0. (Division exacta - Par)
    return true; // Devolver verdadero
  } else { // si, el valor de la variable: "num", modulo (%): 2, es diferentes de 0. (Division con residuo - Impar)
    return false;  // Devolver falso   
  }
}

/*
--- notas_es_Par 

Funcion es_Par recibe 1 parametro o argumento llamados: "num"

Ejemplo:

modulo, es lo que sobra de la division.
21/4=5 y me queda 1, es decir que; 21 modulo % de 4, es 1 
20/4=4 y me queda 0, es decir que el modulo de % 21 es 0

-Cuando divides un numero par el resultado es 0, es decir una division exacta.
-Cuando divides un numero impar el resultado no es 0, es decir una division con residuo.
*/

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 1) {  // si, el valor de la variable: "num" modulo(%): 2, es estrictamnete igual a: 1. (Division con residuo - Impar)
    return true; // Devolver verdadero
  } else { // si, el valor de la variable: "num", modulo (%): 2, es igual a: 0. (Division exacta - Par)
    return false; // Devolver verdadero
  }
}  

/*
--- notas_es_Impar 

Funcion _es_Impar Obtener_Resto recibe 1 parametro o argumento llamados: "num"

Ejemplo:

modulo, es lo que sobra de la division.
21/4=5 y me queda 1, es decir que; 21 modulo % de 4, es 1 
20/4=4 y me queda 0, es decir que el modulo de % 21 es 0

-Cuando divides un numero par el resultado es 0, es decir una division exacta.
-Cuando divides un numero impar el resultado no es 0, es decir una division con residuo.
--

--- Otra opcion es_Impar

function esImpar(num) {
  if (num % 2 !== 0) {  // si, el valor de la variable: "num" modulo(%): 2, es distinto a: 0. (Division exacta - Par) 
    return true; // Devolver verdadero
  } else {  // si, el valor de la variable: "num", modulo (%): 2, es diferente de 0. (Division con residuo - Impar)     /
    return false; // Devolver verdadero
  }
} 
--
*/


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);  // Devolver el resultado de la operacion 
  // Elevar argumento o parametro: "num" a potencia al cuadrado: "2".
}

/*
--- notas_elevar_Al_Cuadrado ---  

Funcion elevar_Al_Cuadrado recibe 1 parametro o argumento llamados: "num"

Los parametros enviados hacen referencia a: 
Math.pow(argumento o parametro, potencia_Elevar)

--- Math 

Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
Math.pow(x, y), Las devoluciones de base a la potencia de exponente, que es, baseexponent.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
--

--- Glosario

-Pow hace referencia a: poder o potencia en ingles.
--
*/

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3);  // Devolver el resultado de la operacion 
  // Elevar argumento o parametro: "num" a potencia al cubo: "3".
}

/*
--- notas_elevar_Al_Cubo ---  

Funcion elevar_Al_Cubo recibe 1 parametro o argumento llamados: "num"

Los parametros enviados hacen referencia a: 
Math.pow(argumento o parametro, potencia_Elevar)

--- Math 

Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
Math.pow(x, y), Las devoluciones de base a la potencia de exponente, que es, baseexponent.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
--

--- Glosario

-Pow hace referencia a: poder o potencia en ingles.
--
*/


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent)  // Devolver el resultado de la operacion 
   // Elevar argumento o parametro: "num" a potencia exponente.
}

/*
--- notas_elevar_Exponente   

Funcion elevar_Exponente recibe 2 parametros o argumentos llamados: "num", "exponent"

Los parametros enviados hacen referencia a: 
Math.pow(argumento o parametro, potencia_Elevar)

--- Math 

Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
Math.pow(x, y), Las devoluciones de base a la potencia de exponente, que es, baseexponent.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
--

--- Glosario

-Pow hace referencia a: poder o potencia en ingles.
--
*/

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num) // Devolver el resultado de la operacion 
   // Redondear argumento o parametro: "num" a entero mas proximo.
}

/*
--- notas_redondear_Numero ---  

Funcion elevar_Exponente recibe 1 parametro o argumento llamado: "num"

Los parametros enviados hacen referencia a: 
Math.round(argumento o parametro a redondear al entero mas proximo)

--- Math 

Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
Math.round(x), Devuelve el valor de un número redondeado al número entero más cercano.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
--

--- Glosario

-Pow hace referencia a: poder o potencia en ingles.
-Round hace referencia a: redondear, alrededor en ingles.
--
*/

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)  // Devolver el resultado de la operacion 
  // Redondear argumento o parametro: "num" a entero mas proximo hacia arriba.
}

/*
--- notas_redondear_Hacia_Arriba

Funcion redondear_Hacia_Arriba recibe 1 parametro o argumento llamado: "num"

Los parametros enviados hacen referencia a: 
Math.ceil(argumento o parametro a redondear  hacia arriba)

--- Math 

Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
Math.ceil(x), Devuelve el entero más pequeño mayor o igual que un número.

Ejemplo:

2.5 a 3.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
--

--- Glosario

-Pow hace referencia a: poder o potencia en ingles.
-Ceil hace referencia a: arriba en ingles.
-Round hace referencia a: redondear, alrededor de en ingles.
--
*/

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()    
  return Math.random(); // Devolver el resultado de la operacion 
  // Devolver numero aleatorio etre 0 y 1.
}

/*
--- notas_Randow 

Funcion numero_Randow no recibe parametros o argumentos

Los parametros enviados hacen referencia a: 
Math.random(elemento)

--- Math 

Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
Math.random(), Devuelve un número aleatorio entre 0 y 1.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
--

--- Glosario

-Pow hace referencia a: poder o potencia en ingles.
-Ceil hace referencia a: arriba en ingles.
-Round hace referencia a: redondear, alrededor de en ingles.
-Randow hace referencia a: aleatorio en ingles.
--
*/

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0){ // si, el valor de la variable: "numero" es menor a: 0
    return "Es positivo"  // Devolver positivo
  } else if (numero < 0) { // si, el valor de la variable: "numero" es mayor a: 0
    return "Es negativo" // Devolver negativo
  } else { // si el valor de la variable: "numero", no es menor a: 0 y no es mayor a: 0
    return false // Devolver false
  }
}

/*
--- notas_es_Positivo ---

Funcion numero_Positivo recibe 1 parametro o argumento llamado: "numero" 

*/

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!" // Devolver el resultado de la operacion 
  // Devolver argumento llamado: "str" + "!" 
  // El signo + es usado para concatenar o unir datos.
}

/*
--- notas_agregar_Simbolo_Exclamacion

Funcion agregar_Simbolo_Exclamacion recibe 1 parametro o argumento, llamado: "str"

--- Metodo contat - String

Combina dos o más cadenas de texto y devuelve una cadena de texto nueva.

Los parametros enviados hacen referencia a: 
cadena.concat("")

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/concat
--

Otra opcion agregar_Simbolo_Exclamacion

function agregarSimboloExclamacion(str) {
  return '${str}!'; // Devolver el resultado de la operacion 
  // Devolver argumento llamado: "str" + "!"   
}
--

--- Glosario

-Pow hace referencia a: poder o potencia en ingles.
-Ceil hace referencia a: arriba en ingles.
-Round hace referencia a: redondear, alrededor de en ingles.
-Randow hace referencia a: aleatorio en ingles.
-Concatenate hace referencia a: concatenar, unir.
--
*/

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido // Devolver el resultado de la operacion 
  // Devolver argumento llamado: "nombre" + " " +  "apellido"
  // El signo + es usado para concatenar o unir datos.
}

/*
--- notas_combinar_Nombres ---  

Funcion combinar_Nombres recibe 2 parametros o argumentos, llamado: "nombre", "apellido"

--- Metodo contat - String

Combina dos o más cadenas de texto y devuelve una cadena de texto nueva.

Los parametros enviados hacen referencia a: 
cadena.concat("")

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/concat
--

--- Glosario

-Concatenate hace referencia a: concatenar, unir.
--
*/

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!" // Devolver el resultado de la operacion 
  // Devolver "Texto" mas argumento llamado: "nombre" + "!" 
  // El signo + es usado para concatenar o unir datos.
}

/*
--- notas_obtener_Saludo  

Funcion obtener_Saludo recibe 1 parametro o argumento, llamado: "nombre"

--- Metodo contat - String

Combina dos o más cadenas de texto y devuelve una cadena de texto nueva.

Los parametros enviados hacen referencia a: 
cadena.concat("")

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/concat
--

Otra opcion obtener_Saludo

function obtenerSaludo(nombre) {
  return 'Hola${nombre}!' // Devolver el resultado de la operacion 
  // Devolver "Texto" mas argumento llamado: "nombre" + "!" 
  // El signo ${} es usado para concatenar o unir datos.
}
--

--- Glosario

-Concatenate hace referencia a: concatenar, unir.
--
*/


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho; // Devolver el resultado de la operacion 
   // los valores de argumentos recibidos: "ancho", "alto"
}

/*
--- solucion_obtener_Area_Rectangulo ---  

Funcion obtener_Area_Rectangulo recibe 2 parametros o argumentos llamados: "alto", "ancho"

-Formula area_Rectangulo = Alto * Ancho
--
*/


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  // return lado * 4;
  return lado + lado + lado + lado;  // Devolver el resultado de la operacion 
   // El valor del argumento recibo: "lado"  
}

/*
--- notas_retornar_Perimetro

Funcion retornar_Perimetro  recibe 1 parametro o argumento llamados: "lado"

-Formula perimetro = lado * 4
-Formula perimetro = lado + lado + lado + lado 
--
*/

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2; // Devolver el resultado de la operacion 
  // De los valores de argumentos recibidos: "base", "altura"
}

/*
--- notas_area_Del_Triangulo ---  

Funcion area_Del_Triangulo recibe 2 parametros o argumentos llamados: "base", "altura"

-Formula area_Triangulo = (Base * Altura) / 2
--
*/

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20  // Devolver el resultado de la operacion 
  // Del valor del argumento recibo: "euro" * el valor de la tasa de cambio del dolar.
}

/*
--- notas_de_Euro_A_Dolar 

Funcion area_Del_Triangulo recibe 1 parametro o argumento llamado: "euro"
*/

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length > 1) { // si, la longitud de caracteres de la cadena, llamada:"letra" es mayor a: 1.
    return "Dato incorrecto"; // Devolver mensaje "Dato incorrecto", solo debemos aceptar un caracter.
  } else if ( // y si, el valor del la variable: "letra" es escrictamente igual a:
    // "a", "e", "i", "o", "u" or "A", "E", "I", "O", "U".
  letra === "a" || 
  letra === "e" ||
  letra === "i" ||
  letra === "o" ||
  letra === "u" ||
  letra === "A" || 
  letra === "E" ||
  letra === "I" ||
  letra === "O" ||
  letra === "U" 
  ) { 
    return "Es vocal" // Devolver mensaje "Es vocal".
  } else { // y si no;
    return "Dato incorrecto" // Devolver mensaje "Dato incorrecto".
  }  
}

/*
--- notas_es_Vocal 

Funcion es_Vocal recibe 1 parametro o argumento llamado: "letra"

--- operadores_Comparacion

3 (===) iguales compara el dato y el valor.
2 (==) igualaes compara el dato.

Ejemplo: 

5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.

--- Probar consola_RunJs

console.log("1"===1);
--

--- Otra forma es_Vocal

if (letra.length > 1) {
  return "Dato incorrecto";
} if (
letra === "a" || 
letra === "e" ||
letra === "i" ||
letra === "o" ||
letra === "u" ||
letra === "A" || 
letra === "E" ||
letra === "I" ||
letra === "O" ||
letra === "U" 
) { 
  return "Es vocal"
} 
return "Dato incorrecto"
}

--- Glosario

-La funcion concatenate, hace referencia a: unir, enlazar en ingles 
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-Skip hace referencia a: omitir, saltar en ingles.
--
*/



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
