// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]; // Devolver coleccion de datos llamada: "array" en posicion: 0
}

/*
--- notas_devolver_Primer_Elemento

Funcion devolver_Primer_Elemento recibe 1 parametro o argumento llamado: "array"
funcion(objeto(elemento) 

Ejemplo_devolver_Primer_Elemento

coleccion_Tabla_6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
                i = [0,  1,  2,  3,  4,  5,  6,  7,  8,  9]
              
--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
--
*/

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]; // Devolver coleccion de datos llamada: "array" en posicion: 
  // array.length; puntualmente hace referencia a la cantidad de caracteres de la coleccion de datos, llamada: "array". 
  // Cuando restamos, '-1'  a la cantidad de caracteres de la coleccion de datos, llamada: "array"
  // Estamos obteniendo el ultimo elemento de la coleccion.
}
/*
--- notas_devolver_Ultimo_Elemento

Funcion devolver_Ultimo_Elemento recibe 1 parametro o argumento llamado: "array"
funcion(objeto(elemento) 

Ejemplo_devolver_Ultimo_Elemento

coleccion_Tabla_6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
                i = [0, 1, 2,  3,  4,  5,  6,  7,  8,  9] 

coleccion_Tabla_6.length = 10

--- Probar consola Run_JS

const coleccion_Tabla_6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
console.log(coleccion_Tabla_6)
console.log(coleccion_Tabla_6.length)
console.log(coleccion_Tabla_6.length - 1)

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

-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
--
*/

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length; // Devolver el valor de la coleccion de datos llamada: "array"
  // array.length; puntualmente hace referencia a la cantidad de caracteres de la coleccion de datos, llamada: "array".
}

/*
--- notas_obtener_Largo_Del_Array

Funcion obtener_Largo_Del_Array recibe 1 parametro o argumento llamado: "array"
funcion(objeto(elemento) 

Ejemplo_obtener_Largo_Del_Array

coleccion_Tabla_6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
                i = [0, 1, 2,  3,  4,  5,  6,  7,  8,  9] 

coleccion_Tabla_6.length = 10

--- Probar consola Run_JS

const coleccion_Tabla_6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
console.log(coleccion_Tabla_6)
console.log(coleccion_Tabla_6.length)
console.log(coleccion_Tabla_6.length - 1)

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

-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
--
*/

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = []; // Declarar nueva variable de tipo coleccion de datos en estado vacia, llamada: 'nuevoArray'  
  for(var i = 0; i < array.length; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: 'array'[coleccion de datos].
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'array.length' 
    // 'array.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: "array". 
    // Es decir, la posicion de la variable i, sea menor que longitud de elementos de la coleccion de datos, llamada: "array".
    // y lo sumaremos de 1 en 1.   
    nuevoArray[i] = array[i] + 1; // En cada iteracion del ciclo: For, accede al valor de la variable: "array" en posicion [i], 
    // y a cada elemento de la coleccion de datos agrega una unidad. '+ 1' 
    // y valor del resultado de la operacion es almacenado en la variable: '[nuevoArray]' en posicion [i].
  }
  return nuevoArray; // Devolver el valor de la coleccion de datos llamada: '[nuevo_Array]'  
}

/*
--- notas_incrementar_Por_Uno

Funcion incrementar_Por_Uno recibe 1 parametro o argumento llamado: "array"
funcion(objeto(elemento) 

Ejemplo_incrementar_Por_Uno

coleccion_Tabla_6 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
                i = [0, 1,  2,  3,  4,  5,  6,  7,  8,  9] 

coleccion_Tabla_6.length = 10
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

--- Probar consola Run_JS

array = [1,2,3]
    i = [0,1,2] 

array[0] = 1
array[1] = 2
array[2] = 3
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
--
*/

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento; // Enviar a ultima posicion a la coleccion de datos:'[array]', el valor recibido como argumento: 'elemento'
  return array; // Devolver el valor de la coleccion de datos llamada: '[array]'  
}

/*
--- notas_agregar_Item_Al_Final_Del_Array

Funcion agregar_Item_Al_Final_Del_Array recibe 2 parametros o argumentos llamados: "array" y "elemento"
funcion(objeto(elemento, elemento) 

--- Método push - Array

Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
Los parametros enviados hacen referencia a: 
(objeto(elemento))

Ejemplo: 
var_Numero = "123"
var_Numero1 = "1234"
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
--

--- Probar consola runJS

console.log(agregarItemAlFinalDelArray([1, 2, 3], 4));
--

--- Glosario

-El metodo push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
--
*/

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); // Enviar a primera posicion a la coleccion de datos:'[array]', el valor recibido como argumento: 'elemento'  
  return array; // Devolver el valor de la coleccion de datos llamada: '[array]'  
}

/*
--- notas_agregar_Item_Al_Comienzo_Del_Array

Funcion agregar_Item_Al_Comienzo_Del_Array recibe 2 parametros o argumentos llamados: "array" y "elemento"
funcion(objeto(elemento, elemento) 

--- Método unshift - Array

Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

Los parametros enviados hacen referencia a: 
(objeto(elemento))

Ejemplo: 
var_Numero = "123"
var_Numero1 = "4123"

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
--

--- Probar consola runJS

console.log(agregarItemAlFinalDelArray([1, 2, 3], 4));
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
--

--- Extras

array[array.length] = elemento; // acceder al ultimo valor
--
*/

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' '); // Devolver el valor de la coleccion de datos llamada: '[palabras]'
  // Unido o separado por uno espacio: (" ") 
}

/*
--- notas_de_Palabras_A_Frase

Funcion de_Palabras_A_Frase recibe 1 parametro o argumento llamado: "palabras" 
funcion(objeto(elemento) 


--- Método join - Array

Une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

Los parametros enviados hacen referencia a: 
coleccion_Datos.join([separador])

Ejemplo:
join("-"), join(" "), join(",") 

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
--

--- Probar consola runJS

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));
console.log(elements());
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo join, hace referencia a: unir, emsamblar o juntar en ingles. 
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
--
*/

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: 'array'[coleccion de datos].
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'array.length'
    // 'array.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: "array". 
    // En resumen: cuando la posicion de la variable i, sea menor que longitud de elementos de la variale: 'array'[coleccion de datos].  
    // y lo sumaremos de 1 en 1.
    if(array[i] === elemento) { // En cada iteracion del ciclo: For, accede al valor de la variable: 'array'[coleccion de datos]
      // y si, el valor de la variable: 'array'[coleccion de datos] es estrictamente igual a: 'elemento'
      return true; // Devolver 'verdadero'
    }
  }
  return false; // Devolver 'falso'
}

/*
--- notas_array_Contiene
  
Funcion array_Contiene recibe 2 parametros o argumentos llamados: "array", "elemento"
funcion(objeto(elemento) 
  
--- Método includes()
  
Determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
  
la sintaxis hace referencia a: 
objeto.includes(elemento)
  
Ejemplo:
  
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // expected output: true
  
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // expected output: true
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
--
  
--- Método indexOf()
  
Retorna el primer índice en el que se puede encontrar un elemento dado en el array, 
ó retorna -1 si el elemento no esta presente.
 
la sintaxis hace referencia a: 
objeto.indexOf(elemento)
  
Ejemplo:
  
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
--
  
--- operadores_De_Comparación
  
Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
  
Ejemplo: 
  
5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.
  
  
- Operador Igual (==)	
  
Devuelve true si los operandos son iguales.	
  
3 == var1
"3" == var1
3 == '3'
  
- Operador No es igual (!=)	
  
Devuelve true si los operandos no son iguales.	
  
var1 != 4
var2 != "3"
  
- Operador Estrictamente igual (===)	
 
Devuelve true si los operandos son iguales y del mismo tipo. 
  
3 === var1
 
- Operador Desigualdad estricta (!==)	
  
Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
  
var1 !== "3"
3 !== '3'
  
- Operador Mayor que (>)	
  
Devuelve true si el operando izquierdo es mayor que el operando derecho.	
  
var2 > var1
"12" > 2
  
- Operador Mayor o igual que (>=)	
  
Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
  
var2 >= var1
var1 >= 3
  
- Operador Menor que (<)	
  
Devuelve true si el operando izquierdo es menor que el operando derecho.	
 
var1 < var2
"2" < 12
  
- Operador Menor o igual (<=)	
  
Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	
  
var1 <= var2
var2 <= 5
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion
  
--- Probar consola_RunJs
  
console.log("1"===1);
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
  
--- otra opción array_Contiene
  
function arrayContiene(array, elemento) {
return array.includes(elemento)
}
--
  
--- Glosario
  
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Output, hace referencia a: salida, produccion en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
--
*/

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0; // Crea nuevo variable con el nombre: 'suma', que sea igual a: 0.
  for(var i = 0; i < numeros.length; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: 'numeros'[coleccion de datos].
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'numeros.length'
    // 'numeros.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: "numeros". 
    // En resumen: cuando la posicion de la variable i, sea menor que longitud de elementos de la variale: 'numeros'[coleccion de datos].  
    // y lo sumaremos de 1 en 1.
    suma = suma + numeros[i]; // la variable 'suma', es igual a: 'suma' + el objeto: 'numeros'[coleccion de datos] de valores enteros, donde esta ubicada[i]   
  }
  return suma; // Devolver el valor de la variable llamada: 'contador'
}

/*
--- notas_agregar_Numeros
    
Funcion notas_agregar_numeros recibe 1 parametro o argumento llamado: 'numeros' 
funcion(objeto(elemento)
    
--  Ejemplo_agregar_Numeros
    
elemento = '22'
coleccion_Tabla_2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
                i = [0, 1, 2, 3, 4,  5,  6,  7,  8,  9] 
    
- Sumatoria
    
i = 0 + 2
i = 2 + 4 
i = 6 + 6
i = 12 + 8
i = 20 + 10
i = 30 + 12
i = 42 + 14
i = 56 + 16
i = 72 + 18
i = 90 + 20
i = 110 
    
-Devolver sumatorio del conjunto de datos:
    
sumar_Coleccion_Tabla_2(2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) = 110
                   i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
    
- Contador
    
i = 0 + 1
i = 1 + 1 
i = 2 + 1
i = 3 + 1
i = 4 + 1
i = 5 + 1
i = 6 + 1
i = 7 + 1
i = 8 + 1
i = 9 + 1
i = 10 
    
-Devolver contador del conjunto de datos:
    
contador_Coleccion_Tabla_2(2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) = 10
                       i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
                       i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
    
- Acumulador
    
i = 0 + 2
i = 2 + 4 
i = 6 + 6
i = 12 + 8
i = 20 + 10
i = 30 + 12
i = 42 + 14
i = 56 + 16
i = 72 + 18
i = 90 + 20
i = 110 
    
-Devolver Acumulador del conjunto de datos:
    
acumulador_Coleccion_Tabla_2(2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) = 110
                         i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
                         i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
    
--
    
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
    
Ejemplo: 
acumula = acumula + arreglo[i];   
      
var array = [1] 
var array = [3] 
var array = [5] 
--
    
--- Glosario
    
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
--
*/

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
   // Promediar 
   // Sumatoria de los valores
   // agregar_Numeros es una funcion que devuelve la sumatoria de los valores [coleccion de datos] recibida como argumento llamada: 'resultadosTest' y...
   // Dividir la cantidad de valores 
   // resultados_Test.length devuelve la longitud de los valores [coleccion de datos] 
}

/*
--- notas_promedio_Resultados_Test
    
Funcion promedio_Resultados_Test recibe 1 parametro o argumento llamado: 'resultadosTest' 
funcion(objeto(elemento)
    
Ejemplo: 
    
numeros = [1,2,3] 
   
agregarNumeros(numeros) = 6
numeros.length = 3  
    
return agregarNumeros(numeros) / numeros.length; 
6/3=2
    
--- Glosario
    
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
--
*/

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = numeros[0]; // Declarar nueva variable de tipo coleccion de datos, llamada: 'max'
  //  Es igual a la variable recibida como argumento; de tipo coleccion de datos de enteros en la posicion 0 del indice i, llamada: 'numeros'.
  for(var i = 1; i < numeros.length; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: 'numeros'[coleccion de datos].
    // La variable i, es inicializada con el valor: '1'.
    // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'numeros.length'
    // 'numeros.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: "numeros". 
    // En resumen: cuando la posicion de la variable i, sea menor que longitud de elementos de la variale: 'numeros'[coleccion de datos].  
    // y lo sumaremos de 1 en 1.
    if(numeros[i] > max) { // si, el numero en la posicion i, de la variable: 'numeros'[coleccion de datos].
      // es mayor que el valor almacenado en la variable: 'max' 
      max = numeros[i]; // Guardar el numero 'clave' encontrado, en la variable llamada: 'max'
    }
  }
  return max;  // Devolver el valor de la variable llamada: 'max'
}

/*
--- notas_numero_Mas_Grande
    
Funcion numero_Mas_Grande recibe 1 parametro o argumento llamado: 'numeros' 
funcion(objeto(elemento)
    
--- Función Math.max()
    
Devuelve el mayor de cero o más números.
    
la sintaxis hace referencia a: 
objeto.Math.max(elemento)
    
Ejemplo:
    
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
    
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max
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
    
--- Glosario
    
-La funcion return hace referencia a: devolver o regresar en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
--
*/

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length < 1) return 0; // si, el valor de la variable: 'arguments.length' es estrictamente igual a: 0, Devolver: 0.
  var total = 1; // Crea nuevo variable con el nombre: 'acumula', que sea igual a: 1.
  for(var i = 0; i < arguments.length; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: 'arguments'[coleccion de datos].
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'arguments'[coleccion de datos].
    // 'arguments.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: "arguments". 
    // En resumen: cuando la posicion de la variable i, sea menor que longitud de elementos de la variale: 'arguments'[coleccion de datos].
    // y lo sumaremos de 1 en 1.
    //acumula *= arguments[i];
    total = total * arguments[i]; // 'acumula', inicialmente es una variable inicializada en: 1
    // acumula, es igual: asi mismo *(multiplicado) el objeto llamado: 'arguments' , donde esta ubicada[i]
  }
  return total; // Devolver el valor de la variable llamada: 'acumula'
}
//  console.log(multiplicarArgumentos()); // Mostrar funcion multiplicar_Argumentos

/*
--- notas_multiplicar_Argumentos
    
Funcion multiplicar_Argumentos no recibe parametros o argumentos 
funcion(objeto()
    
--- Objeto arguments
    
Es una variable local disponible en todas las funciones que no son funciones flecha. 
Puedes hacer referencia a los argumentos de una función dentro de esa función utilizando su objeto arguments. 
Tiene entradas para cada argumento con el que se llamó a la función, con el índice de la primera entrada en 0.
    
Ejemplo: 
    
arguments[0] // primer argumento
arguments[1] // segundo argumento
arguments[2] // tercer argumento
    
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/arguments
--
    
--- Objeto console.log
    
Muestra un mensaje en la consola web (o del intérprete JavaScript).
    
console.log muestra el elemento en un árbol HTML
console.dir muestra el elemento en un árbol JSON
    
https://developer.mozilla.org/es/docs/Web/API/Console/log
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
    
Ejemplo: 
acumula = acumula + arreglo[i];   
      
var array = [1] 
var array = [3] 
var array = [5] 
        
--- Ejemplo: simplificar sentencia
    
acumula = acumula + arguments[i];  es igual  acumula *= arguments[i];
--
    
--  Ejemplo_agregar_Numeros
    
elemento = '22'
coleccion_Tabla_2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
                i = [0, 1, 2, 3, 4,  5,  6,  7,  8,  9] 
    
- Sumatoria
    
i = 0 + 2
i = 2 + 4 
i = 6 + 6
i = 12 + 8
i = 20 + 10
i = 30 + 12
i = 42 + 14
i = 56 + 16
i = 72 + 18
i = 90 + 20
i = 110 
    
-Devolver sumatorio del conjunto de datos:
    
sumar_Coleccion_Tabla_2(2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) = 110
                   i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
    
- Contador
   
i = 0 + 1
i = 1 + 1 
i = 2 + 1
i = 3 + 1
i = 4 + 1
i = 5 + 1
i = 6 + 1
i = 7 + 1
i = 8 + 1
i = 9 + 1
i = 10 
    
-Devolver contador del conjunto de datos:
    
contador_Coleccion_Tabla_2(2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) = 10
                      i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
                      i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
    
- Acumulador
    
i = 0 + 2
i = 2 + 4 
i = 6 + 6
i = 12 + 8
i = 20 + 10
i = 30 + 12
i = 42 + 14
i = 56 + 16
i = 72 + 18
i = 90 + 20
i = 110 
    
-Devolver Acumulador del conjunto de datos:
    
acumulador_Coleccion_Tabla_2(2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) = 110
                        i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
                        i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
    
--
    
--- Glosario
    
-Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
-El objeto Arguments hace refrencia a argumentos en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
*/

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let contador = 0; // Crea nuevo variable con el nombre: 'contador', que sea igual a: 0.
  for (let i = 0; i < arreglo.length ; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: 'arreglo'[coleccion de datos].
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'arreglo.length'
    // 'arreglo.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: 'arreglo'. 
    // En resumen: cuando la posicion de la variable i, sea menor que longitud de elementos de la variale: 'arreglo'[coleccion de datos].  
    // y lo sumaremos de 1 en 1.  
    if(arreglo[i] > 19){  // En cada iteracion del ciclo: For, accede al valor de la variable: 'arreglo' en posicion [i], 
      // y si, el numero en la posicion i, de la variable: 'arreglo', es mayor a: 18
      contador++ //  Adicionar +1, a la variable: 'contador' 
    }
  }
  return contador // Devolver el valor de la variable llamada: 'contador', que tiene almacenado lo numeros mayores a 18.
}

/*
--- notas_cuento_Elementos
    
Funcion cuento_Elementos recibe 1 parametro o argumento, llamado: 'arreglo' 
funcion(objeto(elemento)
   
--  Ejemplo_cuento_Elementos
    
elemento = '22'
arreglo = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
      i = [0, 1, 2, 3, 4,  5,  6,  7,  8,  9] 
    
- Contador?
    
i = 0 + 1
i = 1 + 1 
i = 2 + 1
i = 3 + 1
i = 4 + 1
i = 5 + 1
i = 6 + 1
i = 7 + 1
i = 8 + 1
i = 9 + 1
i = 10 
    
-Devolver contador del conjunto de datos:
   
contador_Coleccion_Tabla_2(2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) = 10
                      i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
                      i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
    
- Acumulador
    
i = 0 + 2
i = 2 + 4 
i = 6 + 6
i = 12 + 8
i = 20 + 10
i = 30 + 12
i = 42 + 14
i = 56 + 16
i = 72 + 18
i = 90 + 20
i = 110 
    
-Devolver Acumulador del conjunto de datos:
    
acumulador_Coleccion_Tabla_2(2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) = 110
                        i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
                        i = [0,  1,  2,  3,  4,   5,   6,   7,   8,  9] = 10
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
    
--- Glosario
    
-Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
--
        
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
    
Ejemplo: 
acumula = acumula + arreglo[i];   
      
var array = [1] 
var array = [3] 
var array = [5] 
        
--- Ejemplo: simplificar sentencia
    
contador = contador + 1;
contador += 1;
contador ++;
--
*/

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7 ){ // si, el valor de la variable: 'numeroDeDia', es estrictamente igual a: '1'... o,     
    // si, el valor de la variable: 'numeroDeDia', es estrictamente igual a: '7'.  
    return "Es fin de semana"  // Devolver mensaje: "Es fin de semana" 
  } // y si no,
  return "Es dia Laboral" // Devolver mensaje: "Es dia laboral"
} 


/*
--- notas_dia_De_La_Semana
  
Funcion dia_De_La_Semana recibe 1 parametro o argumento, llamado: 'numero_De_Dia' 
funcion(objeto(elemento)
  
--- operadores_De_Comparación
  
Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
  
Ejemplo: 
  
5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.
  
- Operador Igual (==)	
  
Devuelve true si los operandos son iguales.	
  
3 == var1
"3" == var1
3 == '3'
  
- Operador No es igual (!=)	
  
Devuelve true si los operandos no son iguales.	
  
var1 != 4
var2 != "3"
  
- Operador Estrictamente igual (===)	
  
Devuelve true si los operandos son iguales y del mismo tipo. 
  
Consulta también Object.is y similitud en JS.	
3 === var1
  
- Operador Desigualdad estricta (!==)	
  
Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
  
var1 !== "3"
3 !== '3'
  
- Operador Mayor que (>)	
  
Devuelve true si el operando izquierdo es mayor que el operando derecho.	
  
var2 > var1
"12" > 2
  
- Operador Mayor o igual que (>=)	
  
Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
  
var2 >= var1
var1 >= 3
  
- Operador Menor que (<)	
  
Devuelve true si el operando izquierdo es menor que el operando derecho.	
  
var1 < var2
"2" < 12
  
- Operador Menor o igual (<=)	
  
Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	
  
var1 <= var2
var2 <= 5
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion
  
--- Probar consola_RunJs
  
console.log("1"===1);
--
  
--- Glosario
  
-Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
--
*/

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString() // Crear variable de tipo cadena de caracteres, con el nombre: 'nStr'   
  // Es igual al parametro recibido como argumento llamado: 'n', convertido en valor de texto.
  if(num.charAt(0) === "9"){ // si, el valor de la variable: 'nStr' en posicion 0 del indice i, es estrictamente igual a: '9'.  
    return true  // Devolver mensaje: "Verdadero"
  } // y si no,
  return false // Devolver mensaje: "Falso"
}

/*
--- notas_empieza_Con_Nueve
  
Funcion empieza_Con_Nueve recibe 1 parametro o argumento, llamado: 'n' 
funcion(objeto(elemento)
  
--- Método toString()
  
Devuelve una cadena que representa al objeto.
Todos los objetos tienen un método "toString" que se llama automáticamente cuando el objeto se representa
como un valor de texto o cuando un objeto se referencia de tal manera que se espera una cadena. 
Por defecto, el método toString es heredado por todos los objetos que descienden de Object. 
  
Los parametros enviados hacen referencia a: 
objeto.toString()
  
Ejemplo:
var objeto = new Object();
objeto.toString(); // Devuelve [object Object]
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
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
  
--- operadores_De_Comparación
  
Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
  
Ejemplo: 
  
5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.
  
- Operador Igual (==)	
  
Devuelve true si los operandos son iguales.	
  
3 == var1
"3" == var1
3 == '3'
  
- Operador No es igual (!=)	
  
Devuelve true si los operandos no son iguales.	
  
var1 != 4
var2 != "3"
  
- Operador Estrictamente igual (===)	
  
Devuelve true si los operandos son iguales y del mismo tipo. 
  
3 === var1
  
- Operador Desigualdad estricta (!==)	
  
Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
  
var1 !== "3"
3 !== '3'
  
- Operador Mayor que (>)	
  
Devuelve true si el operando izquierdo es mayor que el operando derecho.	
  
var2 > var1
"12" > 2
  
- Operador Mayor o igual que (>=)	
  
Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
  
var2 >= var1
var1 >= 3
  
- Operador Menor que (<)	
  
Devuelve true si el operando izquierdo es menor que el operando derecho.	
  
var1 < var2
"2" < 12
  
- Operador Menor o igual (<=)	
  
Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	
  
var1 <= var2
var2 <= 5
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion
  
--- Probar consola_RunJs
  
console.log("1"===1);
--
  
--- Glosario
  
-Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-El metodo string, hace referencia a: cadena o cuerda en ingles.
-La palabra clave else, hace referencia a: de otro modo, ademas en ingles.
--
*/

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i =0 ; i < arreglo.length - 1; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: 'arreglo'[coleccion de datos].
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'arreglo.length'
    // 'arreglo.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: 'arreglo'. 
    // '-1'; hace referencia a la posicion final de elementos de la coleccion de datos, llamada: "numeros". 
    // En resumen: cuando la posicion de la variable i, sea menor que longitud de elementos de la variale: 'arreglo'[coleccion de datos].  
    // y lo sumaremos de 1 en 1.
    if(arreglo[i] !== arreglo[i+1]){ // si, el valor de la variable: 'comparacion', es estrictamente desigual... 
      // al valor de la variable recibida como argumento llamado: 'arreglo'[coleccion de datos] en posicion del indice i.
      return false // Devolver mensaje: "Falso"   
    }
  }
  return true // Devolver mensaje: "Verdadero"
} 

/*
--- notas_todos_Iguales
  
Funcion todos_Iguales recibe 1 parametro o argumento, llamado: 'arreglo' 
funcion(objeto(elemento)
  
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
  
--- operadores_De_Comparación
  
Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
  
Ejemplo: 
  
5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.
  
- Operador Igual (==)	
  
Devuelve true si los operandos son iguales.	
  
3 == var1
"3" == var1
3 == '3'
  
- Operador No es igual (!=)	
  
Devuelve true si los operandos no son iguales.	
  
var1 != 4
var2 != "3"
  
- Operador Estrictamente igual (===)	
 
Devuelve true si los operandos son iguales y del mismo tipo. 
  
Consulta también Object.is y similitud en JS.	
3 === var1
  
- Operador Desigualdad estricta (!==)	
  
Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
  
var1 !== "3"
3 !== '3'
  
- Operador Mayor que (>)	
  
Devuelve true si el operando izquierdo es mayor que el operando derecho.	
  
var2 > var1
"12" > 2
  
- Operador Mayor o igual que (>=)	
  
Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
  
var2 >= var1
var1 >= 3
  
- Operador Menor que (<)	
  
Devuelve true si el operando izquierdo es menor que el operando derecho.	
  
var1 < var2
"2" < 12
  
- Operador Menor o igual (<=)	
  
Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	
  
var1 <= var2
var2 <= 5
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion
  
--- Probar consola_RunJs
  
console.log("1"===1);
--
  
--- Glosario
  
-Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-La palabra clave else, hace referencia a: de otro modo, ademas en ingles.
--
*/

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = []; // Declarar nueva variable de tipo coleccion de datos en estado vacio, llamada: 'meses'.
  for(let i= 0; i<array.length; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: 'array'[coleccion de datos].
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'array.length'
    // 'array.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: "array". 
    // En resumen: cuando la posicion de la variable i, sea menor que longitud de elementos de la variale: 'array'[coleccion de datos].  
    // y lo sumaremos de 1 en 1.
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") { // y en cada iteracion accede al valor de la variable recibida como argumento llamada: 'array'[coleccion de datos] en posicion del indice i...
      // y si, el valor es estrictamente igual a: "Enero", o "Marzo", o "Noviembre"
      nuevoArray.push(array[i]); // agregar valor a la variable llamada: meses[coleccion de datos].
    }
  }
  if(nuevoArray.length < 3) { // si, la longitud del valor almacenado en la variable: 'meses' es menor a: 3
    return "No se encontraron los meses pedidos"; // Devolver mensaje: "No se encontraron los meses pedidos"
  }
  else {  // y si, el valor de la variable: 'meses' es mayor a: 3
      return nuevoArray; // Devolver el valor de la variable llamada: 'meses'
  }
}

/*
--- notas_meses_Del_Año
  
Funcion meses_Del_Año recibe 1 parametro o argumento, llamado: 'array' 
funcion(objeto(arreglo)
  
--- Método push 
  
Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
Los parametros enviados hacen referencia a: 
(objeto(elemento))
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
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
  
--- operadores_De_Comparación
  
Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
  
Ejemplo: 
  
5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.
  
- Operador Igual (==)	
  
Devuelve true si los operandos son iguales.	
  
3 == var1
"3" == var1
3 == '3'
  
- Operador No es igual (!=)	
  
Devuelve true si los operandos no son iguales.	
  
var1 != 4
var2 != "3"
  
- Operador Estrictamente igual (===)	
  
Devuelve true si los operandos son iguales y del mismo tipo. 
  
3 === var1
  
- Operador Desigualdad estricta (!==)	
  
Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
  
var1 !== "3"
3 !== '3'
  
- Operador Mayor que (>)	
  
Devuelve true si el operando izquierdo es mayor que el operando derecho.	
  
var2 > var1
"12" > 2
  
- Operador Mayor o igual que (>=)	
  
Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
  
var2 >= var1
var1 >= 3
  
- Operador Menor que (<)	
  
Devuelve true si el operando izquierdo es menor que el operando derecho.	
 
var1 < var2
"2" < 12
  
- Operador Menor o igual (<=)	
  
Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	
  
var1 <= var2
var2 <= 5
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion
  
--- Probar consola_RunJs
  
console.log("1"===1);
--
  
--- Glosario
  
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Key, hace referencia a: clave en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
--
*/

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = []; // Declarar nueva variable de tipo coleccion de datos en estado vacio, llamada: 'arrayCien'.
  for(let i= 0; i < array.length; i++) {
  // La variable i, es inicializada con el valor: '0'.
  // Posicion de la variable: 'i', inicia iteraccion cuando: 'i', es menor al valor de la variable: 'array.length'
  // 'array.length'; puntualmente hace referencia a la cantidad de elementos de la coleccion de datos, llamada: "array". 
  // En resumen: cuando la posicion de la variable i, sea menor que longitud de elementos de la variale: 'array'[coleccion de datos de enteros].  
  // y lo sumaremos de 1 en 1.
    if(array[i] > 100) {// y en cada iteracion accede al valor de la variable recibida como argumento llamada: 'array'[coleccion de datos de enteros] en posicion del indice i...
      // y si, el valor es mayor a: 100
      nuevoArray.push(array[i]);// agregar valor a la variable llamada: 'arrayCien'[coleccion de datos de enteros].
    }
  }
  return nuevoArray;// Devolver el valor de la variable llamada: 'arrayCien'
}

/*
--- notas_mayor_A_Cien
  
funcion mayor_A_Cien recibe 1 parametro o argumento, llamado: 'array' 
funcion(objeto(arreglo)
  
--- Método push 
  
Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
Los parametros enviados hacen referencia a: 
(objeto(elemento))
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
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
  
--- operadores_De_Comparación
  
Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
  
Ejemplo: 
 
5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.
  
- Operador Igual (==)	
  
Devuelve true si los operandos son iguales.	
  
3 == var1
"3" == var1
3 == '3'
  
- Operador No es igual (!=)	
 
Devuelve true si los operandos no son iguales.	
  
var1 != 4
var2 != "3"
  
- Operador Estrictamente igual (===)	
  
Devuelve true si los operandos son iguales y del mismo tipo. 
 
Consulta también Object.is y similitud en JS.	
3 === var1
  
- Operador Desigualdad estricta (!==)	
  
Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
  
var1 !== "3"
3 !== '3'
 
- Operador Mayor que (>)	
  
Devuelve true si el operando izquierdo es mayor que el operando derecho.	
  
var2 > var1
"12" > 2
  
- Operador Mayor o igual que (>=)	

Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
  
var2 >= var1
var1 >= 3
  
- Operador Menor que (<)	
  
Devuelve true si el operando izquierdo es menor que el operando derecho.	
  
var1 < var2
"2" < 12
  
- Operador Menor o igual (<=)	
  
Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	
 
var1 <= var2
var2 <= 5
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion

--- Probar consola_RunJs
  
console.log("1"===1);
--
  
--- Glosario
  
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Key, hace referencia a: clave en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
--
*/

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = []; // Declarar nueva variable de tipo coleccion de datos en estado vacio, llamada: 'newArray'.
  var suma = numero; // Declarar nueva variable, llamada: 'suma'..., que sera igual a la variable recibida como argumento llamada: 'numero'.
  for(var i= 0; i<10; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: '10'[coleccion de datos de enteros]
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable i, sea menor a la variable: '10'.
    // y sumaremos el valor de la variable indice: i, de 1 en 1.
    suma = suma + 2; // Adicionar + 2, al valor de la variable llamada: 'suma'
    if(suma === i) break; // y si, el valor de la variable: 'suma' es estrictamente igual al valor de la variable indice: 'i'..., es decir: al numero de iteracciones.
    else { // y si, el valor de la variable: 'suma' es diferente al valor de la variable indice: 'i'
      array.push(suma);  // agregar valor de la variable: 'suma', a la variable llamada: 'newArray'[coleccion de datos de enteros].
    }
  }
  if(i < 10) { // y en cada iteracion accede al valor de la posicion del indice llamado: 'i'...
    // y si, el valor es menor a: '10'
    return 'Se interrumpió la ejecución'; // Devolver mensaje: "Se interrumpio la ejecuccion"
  }
  else {  // y si, el valor de la variable indice: 'i' es mayor a: 10
      return array;  // Devolver el valor de la variable llamada: 'newArray'
  }
}

/*
--- notas_break_Statement
  
funcion break_Statement recibe 1 parametro o argumento, llamado: 'numero' 
funcion(objeto(elemento)  
  
--- Método push 
  
Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
Los parametros enviados hacen referencia a: 
(objeto(elemento))
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
--
  
--- operadores_De_Comparación
  
Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
  
Ejemplo: 

5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.
  
- Operador Igual (==)	
  
Devuelve true si los operandos son iguales.	
  
3 == var1
"3" == var1
3 == '3'
  
- Operador No es igual (!=)	
 
Devuelve true si los operandos no son iguales.	
  
var1 != 4
var2 != "3"
  
- Operador Estrictamente igual (===)	
 
Devuelve true si los operandos son iguales y del mismo tipo. 
  
Consulta también Object.is y similitud en JS.	
3 === var1
  
- Operador Desigualdad estricta (!==)	
  
Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
  
var1 !== "3"
3 !== '3'
  
- Operador Mayor que (>)	
  
Devuelve true si el operando izquierdo es mayor que el operando derecho.	
  
var2 > var1
"12" > 2
  
- Operador Mayor o igual que (>=)	
  
Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
  
var2 >= var1
var1 >= 3
  
- Operador Menor que (<)	
  
Devuelve true si el operando izquierdo es menor que el operando derecho.	
  
var1 < var2
"2" < 12
  
- Operador Menor o igual (<=)	
  
Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	
  
var1 <= var2
var2 <= 5
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion
  
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
  
Ejemplo: 
-La sentencia i = i + 1, puede ser reemplazada por: i = i ++;
-La sentencia numero = numero + 5, puede ser reemplazada por: numero += 5;
  
Ejemplo: 
acumula = acumula + arreglo[i];   
    
var newArray = [1] 
var newArray = [3] 
var newArray = [5] 
var newArray = [7]
var newArray = [9]
var newArray = [11]
var newArray = [13]
var newArray = [15]
var newArray = [17]
var newArray = [19]
var newArray = [21]       
--
  
--- otra opcion break_Statement 
  
function breakStatement(numero) {
    var array = [] // guardando la suma de 10 numeros
    var suma = numero // 
    for (var i = 0; i < 10; i++) { // recorrer 
      suma = suma + 2 // 
      if (suma === i) break // si suma es igual al numero de iteraciones, entonces corte la ejecuccion
      else {
        array.push(suma); // porner el ultimo elemento en el array
      }
    }
    if (i < 10) { // si y es menor a 10
      return "Se interrumpio la ejecucion";
    } else {
      return array; // retorno el conjunto de datos
    }
  --  
  
--- Glosario
  
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Key, hace referencia a: clave en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
-La palabra clave: Else, hace referencia a: ademas, de otro modo en ingles.
-La palabra clave: Break, hace referencia a: interrumpir, cortar o descanso en ingles.
--    
*/

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = []; // Declarar nueva variable de tipo coleccion de datos en estado vacio, llamada: 'array'. 
  var suma = numero; // Declarar variable llamada: 'suma', que sera igual al valor de la variable recibida como argumento llamada: 'numero' 
  for(var i= 0; i<10; i++) { // Declarar nueva variable, nombre: i. Para recorrer objeto: '10'[coleccion de datos de enteros]
    // La variable i, es inicializada con el valor: '0'.
    // Posicion de la variable i, sea menor o igual a la variable: '10'.
    // y sumaremos el valor de la variable indice: i, de 1 en 1.
    if(i === 5) continue;  // si, el valor de la variable: 'i' es estrictamente igual a: '5'...
    // Continuar la ejecuccion
    else { // y si, el valor de la variable indice: 'i' es diferente de: '5'
      suma = suma + 2; //  Adicionar +2, a la variable llamada: 'suma'
      array.push(suma); // Agregar el valor a la variable llamada: 'suma' a la coleccion de datos, llamada: 'array' 
    }
  }
  return array; // Devolver el valor de la variable llamada: 'array'
}


/*
--- notas_continue_Statement
    
funcion continue_Statement recibe 1 parametro o argumento, llamado: 'numero' 
funcion(objeto(elemento)
--
  
--- Método push 
  
Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
Los parametros enviados hacen referencia a: 
(objeto(elemento))
  
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
--
  
--- operadores_De_Comparación
  
Compara sus operandos y devuelve un valor lógico en función de si
la comparación es verdadera (true) o falsa (false). 
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. 
  
Ejemplo: 
  
5 === 5; compara el dato y el valor.
5 == 5; compara el tipo de dato, es decir: enteros.
 
- Operador Igual (==)	
  
Devuelve true si los operandos son iguales.	
  
3 == var1
"3" == var1
3 == '3'
  
- Operador No es igual (!=)	
  
Devuelve true si los operandos no son iguales.	
  
var1 != 4
var2 != "3"
  
- Operador Estrictamente igual (===)	
  
Devuelve true si los operandos son iguales y del mismo tipo. 
  
Consulta también Object.is y similitud en JS.	
3 === var1
  
- Operador Desigualdad estricta (!==)	
  
Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	
  
var1 !== "3"
3 !== '3'
  
- Operador Mayor que (>)	
  
Devuelve true si el operando izquierdo es mayor que el operando derecho.	
  
var2 > var1
"12" > 2
  
- Operador Mayor o igual que (>=)	
  
Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	
  
var2 >= var1
var1 >= 3
  
- Operador Menor que (<)	
  
Devuelve true si el operando izquierdo es menor que el operando derecho.	
  
var1 < var2
"2" < 12
  
- Operador Menor o igual (<=)	
  
Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	
  
var1 <= var2
var2 <= 5
 
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion
  
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
  
Ejemplo: 
-La sentencia i = i + 1, puede ser reemplazada por: i = i ++;
-La sentencia numero = numero + 5, puede ser reemplazada por: numero += 5;
  
Ejemplo: 
acumula = acumula + arreglo[i];   
     
var newArray = [1] 
var newArray = [3] 
var newArray = [5] 
var newArray = [7]
var newArray = [9]
var newArray = [11]
var newArray = [13]
var newArray = [15]
var newArray = [17]
var newArray = [19]
var newArray = [21]       
--
 
--- Glosario
  
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Key, hace referencia a: clave en ingles.
-El metodo length, hace referencia a longitud o largo en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
-Operador de acceso Dot Notation, hace referencia a: Notación de puntos en ingles.
-Operador de acceso Bracket Notation, hace referencia a: Notación de corchetes en ingles.
--   
*/

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