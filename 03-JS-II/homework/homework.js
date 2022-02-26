// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if ((x) === (y)) return x || y;
  // si, el valor de la variable: "x", es un numero entero,
  // es estrictamente igual a el valor de la variable: "y", que tambien es un entero
  // Devolver el valor de la variable: "x" o "y"   
  if (x > y) { // si, el valor de la variable: "x" es mayor al valor de la variable "y"
    return x;  // Devolver el valor de la variable: "x"
  } else { // si, no
    return y;  // Devolver el valor de la variable: "y"
  }
}

/*
--- notas_obtener_Mayor ---  

Funcion obtener_Mayor recibe 2 parametros o argumentos llamados: "x", "y"

--- Metodo Number.isInteger - Entero

Determina si el valor enviado es de tipo: entero.

Los parametros enviados hacen referencia a: 
Number.isInteger(valor)

Valor devuelto: es un booleano  indicando si el valor dado es un entero o no.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
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
---

--- Glosario

-Boolean hace referencia a: booleano en ingles, 
es decir una variable bonaria con dos posibles valores: verdadero o falso.
-La funcion return hace referencia a: devolver o regresar en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
--
*/

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) { // si, el valor de la variable: "edad" es mayor o igual a 18
    return "Allowed";  // Devolver el mensaje: "Allowed" - "Admitido - Autorizado"
  } else {  // y si, el valor de la variable: "edad" es menor a 18 
    return "Not allowed"; // Devolver el mensaje: "Not Allowed" - "No admitido - No Autorizado"
  }
}

/*
--- notas_mayoria_De_Edad   

Funcion mayoria_De_Edad recibe 1 parametro o argumento llamados: "edad"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- Glosario

-Allown hace referencia a: permitir, autorizar, admitir en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
--
*/


function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1)  // si, el valor de la variable: "status" es estrictamente igual a: 1 
    return "Online"; // Devolver el mensaje: "Online" 
  if (status === 2) { // si, el valor de la variable: "status" es estrictamente igual a: 2 
    return "Away"; // Devolver el mensaje: "Away" 
  } else { // y si, el valor de la variable: "status" no es: 1 o 2 
    return "Offline"; // Devolver el mensaje: "Offline" 
  }
}

/*
--- notas_conexion_Estado   

Funcion conexion_Estado recibe 1 parametro o argumento llamados: "status"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- operadores_Comparacion

3 (===) iguales compara el dato y el valor.
2 (==) igualaes compara el dato.

Ejemplo: 

5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.

--- Probar consola_RunJs

console.log("1"===1);
--

--- Glosario

-Allown hace referencia a: permitir, autorizar, admitir en ingles.
-Online hace referencia a: en linea, conectado en ingles.
-Away hace referencia a: fuera o lejos en ingles.
-Offline hace referencia a: fuera de linea o desconectado en ingles.
-Status hace referencia a: estado en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
--
*/


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === "aleman") { // si, el valor de la variable: "idioma" es estrictamente igual a: "aleman" 
    return "Guten Tag!"; // Devolver el mensaje: "Guten Tag!" 
  } else if (idioma === "mandarin") { // si, el valor de la variable: "idioma" es estrictamente igual a: "mandarin" 
    return "Ni Hao!"; // Devolver el mensaje: "Ni Hao!" 
  } else if (idioma === "ingles") { // si, el valor de la variable: "idioma" es estrictamente igual a: "ingles" 
    return "Hello!"; // Devolver el mensaje: "Hello!" 
  } else { // y si, el valor de la variable: "idioma" no es estrictamente igual a: "aleman",  "mandarin" o "ingles"
    return "Hola!"; // Devolver el mensaje: "Hola!" 
  }
}

/*
--- notas_saludo   

Funcion saludo recibe 1 parametro o argumento llamado: "idioma"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- operadores_Comparacion

3 (===) iguales compara el dato y el valor.
2 (==) igualaes compara el dato.

Ejemplo: 

5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.

--- Probar consola_RunJs

console.log("1"===1);
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
--
*/

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) { // Cambiar al caso "xxx" cuando el valor de la variable: "color" sea: 
    case "blue": // blue: Azul
      return "This is blue"; // Devolver el mensaje: "This is blue" 
    case "red": // red: Rojo
      return "This is red"; // Devolver el mensaje: "This is red" 
    case "green": // green: Verde
      return "This is green"; // Devolver el mensaje: "This is green!" 
    case "orange": // orange: Naranja
      return "This is orange"; // Devolver el mensaje: "This is orange" 
    default:
      return "Color not found"; // Devolver por defecto el mensaje: "Color not found" 
  }
}

/*
--- notas_colors   

Funcion colors recibe 1 parametro o argumento llamado: "color"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- Declaracion switch

Evalúa una expresión, comparando el valor de esa expresión con una instancia case,
y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

Los parametros enviados hacen referencia a: 
switch (expresión) {
  case valor1: //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2: //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La funcion break hace referencia a: pausar o interrumpir en ingles.
-La funcion default hace referencia a: por defecto en ingles.
-La funcion case hace referencia a: caso en ingles.
-La funcion switch hace referencia a: cambiar o interruptor en ingles.
-Expression hace referencia a: expresion en ingles, es decir: siempre se convierte(retorna) un valor.
-Statement hace referencia a: declaracion o sentencia en ingles, es decir: realizar una accion.
--
*/

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 5 || numero === 10) {// si, el valor de la variable: "numero" es estrictamente igual a: '5' or
    // si, el valor de la variable: "numero" es estrictamente igual a: '10' 
    return true; // Devolver el mensaje: "verdadero" 
  } else { // y si, el valor de la variable: "numero" no es estrictamente igual a: '5' or '10'
    return false; // Devolver el mensaje: "falso"
  }
}

/*

--- notas_Es_Diez_O_Cinco

Funcion es_Diez_O_Cinco recibe 1 parametro o argumento llamado: "numero"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- operadores_Logicos

AND Lógico (&&), si todas las condiciones se cumple, verdadero.
Ejemplo: expr1 && expr2

OR lógico (||), si alguna de las condiciones se cumple, verdadero.
Ejemplo:  expr1 || expr2

NOT lógico (!), No se cumple las condiciones. 
Ejemplo: !expr
--

--- operadores_Comparacion

3 (===) iguales compara el dato y el valor.
2 (==) igualaes compara el dato.

Ejemplo: 

5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.

--- Probar consola_RunJs

console.log("1"===1);
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La palabra clave true hace referencia a: verdadero en ingles.
-La palabra clave true hace referencia a: falso en ingles.
-Match hace referencia a: igualar, emparejar o similar en ingles.
--
*/

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero > 20 && numero < 50) { // si, el valor de la variable: "numero" es mayor a: 20
    // y, el valor de la variable: "numero" es menor a: 50
    return true; // Devolver el mensaje: "verdadero" 
  } else {  // y si, el valor de la variable: "numero" no es mayor a : 20 y no es menor a: 50
    return false; // Devolver el mensaje: "falso" 
  }
}

/*
--- notas_esta_En_Rango

Funcion Esta_En_Rango recibe 1 parametro o argumento llamado: "numero"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- operadores_Logicos

AND Lógico (&&), si todas las condiciones se cumple, verdadero.
Ejemplo: expr1 && expr2

OR lógico (||), si alguna de las condiciones se cumple, verdadero.
Ejemplo:  expr1 || expr2

NOT lógico (!), No se cumple las condiciones. 
Ejemplo: !expr
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La palabra clave true hace referencia a: verdadero en ingles.
-La palabra clave false hace referencia a: falso en ingles.
--
*/

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Number.isInteger(numero)) {// si, el valor de la variable: "numero", es un numero entero.  
    return true; // Devolver el mensaje: "verdadero"
  } else { // y si, el valor de la variable: "numero" no es un numero entero.
    return false; // Devolver el mensaje: "falso"
  }
}

/*
--- notas_es_Entero ---

Funcion es_Entero recibe 1 parametro o argumento llamado: "numero"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

Numeros enteros o naturales: 1, -1, 100, 20.
Numeros decimales: 0.8, 0.001, 0.3.

--- Metodo Number.isInteger - Entero

Determina si el valor enviado es de tipo: entero.

Los parametros enviados hacen referencia a: 
Number.isInteger(valor)

Valor devuelto: es un booleano indicando si el valor dado es un entero o no.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
--

--- Math 

Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. 
Math.floor(), Devuelve el máximo entero menor o igual a un número, es decir: redondear hacia abajo.
Math.ceil(argumento o parametro a redondear hacia arriba.
Math.round(x), Devuelve el valor de un número redondeado al número entero más cercano.

Ejemplo Math.floor: 2.5 a 2. - 1.6 a 1. - 0.8 a 0.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
--

--- Otra opcion es_Entero

function esEntero(numero) {
  if(numero === Math.floor(numero)){ // si, el valor de la variable: "numero". 
    // es estrictamente igual a el valor de la variable: "numero", redondeado hacia abajo    
    return true // Devolver el mensaje: "verdadero"
  } else {// y si, el valor de la variable: "numero", redondeado hacia abajo, no tiene decimales, es decir: no son iguales.
    return false; // Devolver el mensaje: "falso"
  }
  }
--

--- Glosario

-Floor hace referencia a: piso, fondo o suelo en ingles.
-Math hace referencia a: matematicas en ingles.
-Ceil hace referencia a: arriba en ingles.
-Round hace referencia a: redondear, alrededor de en ingles.
--
*/

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) { // si, el valor de la variable: "numero" modulo(%) de 3, es estrictamente igual a un residuo de: 0, es decir: "numero" es divisible por 3.
    // y, el valor de la variable: "numero" modulo(%) de 5, es estrictamente igual a un residuo de: 0. es decir: "numero" es divisible por 5.
    return "fizzbuzz";  // Devolver el mensaje: "fizzbuzz" 
  } else if (numero % 3 === 0) { // si, el valor de la variable: "numero" modulo(%) de 3, es estrictamente igual a un residuo de: 0.
    return "fizz";  // Devolver el mensaje: "fizz" 
  } else if (numero % 5 === 0) { // si, el valor de la variable: "numero" modulo(%) de 5, es estrictamente igual a un residuo de: 0.
    return "buzz";  // Devolver el mensaje: "buzz" 
  } else { // si, el valor de la variable: "numero" modulo(%) de 3 or "numero "modulo(%) de 5, no son estrictamente iguales a un residuo de: 0.  
    return numero; // Devolver el mensaje: "numero" 
  }
}

/*
--- notas_fizz_Buzz

Funcion fizz_Buzz recibe 1 parametro o argumento llamado: "numero"

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- operadores_Logicos

AND Lógico (&&), si todas las condiciones se cumple, verdadero.
Ejemplo: expr1 && expr2

OR lógico (||), si alguna de las condiciones se cumple, verdadero.
Ejemplo:  expr1 || expr2

NOT lógico (!), No se cumple las condiciones. 
Ejemplo: !expr
--
*/

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if (num1 < 0 || num2 < 0 || num3 < 0) { // si, el valor de la variable: "num_1" es menor a 0, es decir: si es un numero negativo. 
    // o si, el valor de la variable: "num_2" es menor a 0, es decir: si es un numero negativo.
    // o si, el valor de la variable: "num_3" es menor a 0, es decir: si es un numero negativo.    
    return "Hay negativos"; // Devolver el mensaje: "Hay negativos" 
  } else if (num1 === 0 || num2 === 0 || num3 === 0) { // si, el valor de la variable: "num_1" es estrictamente igual a: 0, es decir: si es un numero entero positivo.
    // o si, el valor de la variable: "num_2" es estrictamente igual a: 0, es decir: si es un numero entero positivo.
    // o si, el valor de la variable: "num_3" es estrictamente igual a: 0, es decir: si es un numero entero positivo.      
    return "Error";  // Devolver el mensaje: "Error" 
  } else if (num1 > 0 && num1 > num2 && num1 > num3) { // si, el valor de la variable: "num_1" es mayor a: 0, es decir: si es un numero entero positivo.
    // y si, el valor de la variable: "num_1" es mayor a el valor de la variable: "num_2" 
    // y si, el valor de la variable: "num_1" es mayor a el valor de la variable: "num_3"        
    return "Número 1 es mayor y positivo"; // Devolver el mensaje: "Número 1 es mayor y positivo" 
  } else if (num3 > num1 && num3 > num2) { // si, el valor de la variable: "num_3" es mayor a el valor de la variable: num_1.
    // y si, el valor de la variable: "num_3" es mayor al valor de la variable: "num_2"     
    return num3 + 1; // Devolver el resultado de la operacion: num_3 + 1
  } else {
    return false;  // Devolver mensaje: "falso"
  }
}
/*
--- notas_Operadores_Logicos

Funcion operadores_Logicos 3 parametros o argumentos llamado: "num_1", "num_2", "num_3"
Los parametros enviados hacen referencia a: 
funcion(objeto(elemento_1, elemento_2, elemento_3) 

--- operadores_Logicos

AND Lógico (&&), si todas las condiciones se cumple, verdadero.
Ejemplo: expr1 && expr2

OR lógico (||), si alguna de las condiciones se cumple, verdadero.
Ejemplo:  expr1 || expr2

NOT lógico (!), No se cumple las condiciones. 
Ejemplo: !expr
--

--- operadores_Comparacion

3 (===) iguales compara el dato y el valor.
2 (==) igualaes compara el dato.

Ejemplo: 

5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.

--- Probar consola_RunJs

console.log("1"===1);
--

--- simplificar_Sentencia

-Ejemplo contador:  suma + 1, con cada elemento

contador = contador + 1; 
contador = contador + 1;   es igual   contador += 1;

-Ejemplo acumulador: acumula el elemento que estoy contado.

acumulador = acumulador + arreglo[i]; 
acumulador = contador + numeros[i];   es igual   acumulador += numeros[i];

-La expresion i ++,  hace referencia a: i + 1
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La palabra clave true hace referencia a: verdadero en ingles.
-La palabra clave false hace referencia a: falso en ingles.
-La palabra encode hace referencia a: codificar o cifrar en ingles.
-la palabra hard encode hace referencia a: codificacion dura en ingles.
--
*/

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1.
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1, NO son considerados números primos
  if (numero < 2) return false; // si, el valor de la variable: "numero" es menor a: '2', 
  // Debido a que los números 0 y 1, No son considerados números primos.
  // Devolver el valor: "falso"  
  for (var i = 2; i < numero; i++) { // Declara nueva variable, nombre: i. Para recorrer objeto: "numero"(entero).
    // La variable i, es inicializada con el valor: '2', 
    // Debido a que los números 0 y 1, No son considerados números primos.
    // Posicion de la variable i, sea menor al valor de la variable: "numero". 
    // y sumaremos el valor de la variable indice: i, de 1 en 1.
    if (numero % i === 0) return false; // si, el valor de la variable: "numero" modulo(%) de i, es estrictamente igual a residuo: 0
    // Debido a que una division exacta su residuo es: '0'. 
    // Devolver el valor: "falso"  
  }
  return true; // Devolver el valor: "falso"  
}

/*
--- notas_es_Primo

Funcion es_Primo recibe 1 parametro o argumento llamado: "numero"
Los parametros enviados hacen referencia a: 

funcion(objeto(elemento) 

--- numero_Primo

-Un numero primo es: divisible por sí mismo y por 1.
-Los números 0 y 1, No son considerados números primos.
 
Ejemplos Numeros Primos:

-3 debido a que es divisible solo por si mismo: 3
-5 debido a que es divisible solo por si mismo: 5

Ejemplos Numeros no Primos: 

-15 debido a que es divisible por: 3, 5, 15.
 15/3=5, residuo: '0'
 15/5=3, residuo: '0'
 15/15=1, residuo: '0'

 -10 debido a que es divisible por: 2, 5, 10.
 10/2=5, residuo: '0' 
 10/5=2, residuo: '0' 
 10/10=1, residuo: '0' 
--

--- simplificar_Sentencia

-Ejemplo contador:  suma + 1, con cada elemento

contador = contador + 1; 
contador = contador + 1;   es igual   contador += 1;

-Ejemplo acumulador: acumula el elemento que estoy contado.

acumulador = acumulador + arreglo[i]; 
acumulador = contador + numeros[i];   es igual   acumulador += numeros[i];

-La expresion i ++,  hace referencia a: i + 1
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La palabra clave true hace referencia a: verdadero en ingles.
-La palabra clave false hace referencia a: falso en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
--
*/

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true) return "Soy verdadero"; // si, el valor de la variable: "valor" es estrictamente igual a: 'true'.
  // Devolver el mensaje: "Soy verdadero"
  if (valor === false) return "Soy falso";
  // Devolver el mensaje: "Soy falso"
}

/*
--- notas_es_Verdadero

Funcion es_Verdadero recibe 1 parametro o argumento llamado: "valor"
Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- Glosario

-La palabra clave true hace referencia a: verdadero en ingles.
-La palabra clave false hace referencia a: falso en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
--
*/

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let tabla_Del_6 = [] // Declarar nueva variable de tipo coleccion de datos(array) en estado vacia, llamada: [tabla_Del_6] 
  for (let i = 0; i < 11; i++) {// Declarar nueva variable, nombre: i. Para recorrer objeto: '11'(entero).
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable i, sea menor al valor de la variable: '11'.
    // y sumaremos el valor de la variable indice: i, de 1 en 1.
    tabla_Del_6.push(6 * i) 
    // y en cada iteracion accede al valor de la variable en posicion i, y multiplica el valor en: i * '6'. 
    // y agregar el valor del resultado de la operacion en la variable: [tabla_Del_6]    
  }
  return tabla_Del_6 //  Devolver coleccion de datos con los argumentos recibidos 
}

/*
--- notas_tabla_Del_Seis

Funcion tabla_Del_Seis no recibe parametros o argumentos.

Los parametros enviados hacen referencia a: 
funcion(objeto() 

Ejemplo:

tabla6 = [0, 6, 12, ... 54, 60]
     i = [0, 1, 2, ... 9, 10]

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
  
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Key, hace referencia a: clave en ingles.
-Value, hace referencia a: valor en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
--
*/

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero < 1000 && numero > 99) return true; // si, el valor de la variable: "numero" es menor a: '1000',
  // y, el valor de la variable: "numero" es mayor a: '99', 
  // Devolver el valor: "verdadero"  
  return false // Devolver el valor: "verdadero"  
}

/*
--- notas_tiene_Tres_Digitos

Funcion tiene_Tres_Digitos recibe 1 parametro o argumento llamado: "numero".

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

--- operadores_Logicos

AND Lógico (&&), si todas las condiciones se cumple, verdadero.
Ejemplo: expr1 && expr2

OR lógico (||), si alguna de las condiciones se cumple, verdadero.
Ejemplo:  expr1 || expr2

NOT lógico (!), No se cumple las condiciones. 
Ejemplo: !expr
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-Clear hace referencia a: limpiar o despejar en ingles. 
--
*/

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 0;  // Declarar nueva variable de nombre: i
  // La variable i, es inicializada con el valor de: '0'  
  do { // Realizar accion mientras que... el valor de la variable: i, sea menor a: '8'
    i = i + 1; //  Adicionar +1, a la variable indice: i  
    numero = numero + 5; //  Adicionar +5, a la variable: "numero"
  }
  while (i < 8); // Realizar accion mientras que... el valor de la variable: i, sea menor a: '8'
  return numero; // Devolver el valor de la variable: "numero"  
}

/*
--- notas_do_While

Funcion do_While recibe 1 parametro o argumento llamado: "numero".

Los parametros enviados hacen referencia a: 
funcion(objeto(elemento) 

Ejemplo:

numero = 2
numero = [2, 7, 12, 17, 22, 27, 32, 37]
     i = [0, 1, 2,  3,  4,  5,  6,  7]

numero = 5
numero = [5, 10, 15, 20, 25, 30, 35, 40]
     i = [0,  1,  2,  3,  4,  5,  6,  7]

--- simplificar_Sentencia

-Ejemplo contador:  suma + 1, con cada elemento

contador = contador + 1; 
contador = contador + 1;   es igual   contador += 1;

-Ejemplo acumulador: acumula el elemento que estoy contado.

acumulador = acumulador + arreglo[i]; 
acumulador = contador + numeros[i];   es igual   acumulador += numeros[i];

-La expresion i ++,  hace referencia a: i + 1

Ejemplo: 
-La sentencia i = i + 1, puede ser reemplazada por: i = i ++;
-La sentencia numero = numero + 5, puede ser reemplazada por: numero += 5;
--

- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La funcion do hace referencia a: hacer o realizar en ingles.
-La funcion while hace referencia a: mientras o mientras que en ingles.
--
*/

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
