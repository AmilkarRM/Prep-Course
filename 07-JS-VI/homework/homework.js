// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}

/*
--- notas_mayuscula --- 

Funcion mayuscula recibe 1 parametro o argumento llamado: "nombre"
funcion(objeto(elemento) 

--- Metodo UpperCase

El método toUpperCase() devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
Los parametros enviados hacen referencia a: 
cadena.toUpperCase() 

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
--

--- Metodo slice

El método slice() devuelve una copia de una parte del array dentro de un nuevo array,
empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

Los parametros enviados hacen referencia a: 
(desde_Q_Posicion_Empiezo_Cortar, hasta_Posicion_Debo_Cortar)

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La funcion to upper_Case, refiere a mayusculas en ingles.
-La funcion slice, refiere a rebanar, porcionar en ingles.
--

--- Ejemplo RunJS: 

return nombre[0].toUpperCase() + nombre.slice(1)
}
console.log(mayuscula('mario'));
--
*/

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

/*

--- notas_invocar_Callback --- 

Funcion invocar_Callback recibe 1 parametro o argumento llamado: "cb"
funcion(objeto(elemento) 
Un callback es una funcion que se envia por parametro.

--- Glosario

Callback refiere a: llamar de vuelta, regresar, volver en ingles.

---
*/

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2); // Devolver callback con los argumentos o valores recibidos  
}

/*
--- notas_operacion_Matematica --- 

Funcion operacion_Matematica recibe 3 parametros o argumentos llamado: "n1", "n2", "cb"
funcion(objeto(elemento) 

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-Callback refiere a: llamar de vuelta, regresar, volver en ingles.

--- Ejemplo RunJS: 

console.log(operacionMatematica(1,2,function(n1,n2){
  return n1*n2
}));
---
*/

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //numero = [5,6,1,4]
  /* var suma = 0
  for (let i = 0; i < numeros.length; i++) {
     suma = suma + numeros[i];
  } */
  var suma = numeros.reduce(function (acumulador, valor_Actual) {
    return acumulador + valor_Actual;
  });
  cb(suma);
}

/*
--- notas_sumar_Array --- 

Funcion sumar_Array recibe 2 parametros o argumentos llamados: "numeros" y "cb"
funcion(objeto(elemento, elemento) 

--- Ejemplo:
Sumar numeros enteros y devolver la suma del conjunto de datos.

arrayNumeros = [1,2,3,4] = 10
i = 0; i < numeros.length; i++) { // Mientras i sea menor a la longitud del conjunto de datos

i = 0 + 1
i = 1 + 1 
i = 2 + 1
i = 3
--

--- simplificar_Sentencia_Contador

contador = contador + numeros[i];   es igual   contador += numeros[i];
--

--- Ejemplo opcion for sumar_Array:

function sumarArray(numeros, cb) {
  let suma = 0
  for(let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i]
  }
  cb(suma)
}
--

--- Ejemplo opcion reduce sumar_Array:

function sumarArray(numeros, cb) {
  let suma = numeros.reduce(function (acc, valAct) {
    return acc + valAct
  })
  cb(suma)
}
--

-- Método reduce

Ejecuta una función reductora sobre cada elemento del conjunto de datos,
devolviendo como resultado un único valor.

Los parametros enviados hacen referencia a: 
(funcion_Call_Back(acumulador, valor_Actual_a_Iterar))

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
--

--- Glosario

-La funcion return hace referencia a: devolver o regresar en ingles.
-La funcion reduce, refiere a: reducir, disminuir en ingles.
-La variable accumulator refiere a: acumulador o almacenamiento en ingles.
-La variable counter refiere a: contador en ingles.
-La variable current refiere a: actual, o de hoy en dia en ingles.
-La variable index refiere a: indice, clasificar o referenciar en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
--
*/

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for(i = 0; i < array.length; i++){ // Declarar nueva variable, nombre: i, y Recorrer objeto llamado:"array" de tipo: coleccion de datos.
      // la variable i, inicia la iteraccion en array.length;    
      // array.length; puntualmente hace referencia a la cantidad de caracteres del objeto: ("array"). 
      // Posicion de la variable i, es menor a la longitud de objetos de la coleccion de datos llamada:"array".
      // y lo sumaremos de 1 en 1.  
    cb(array[i]); //  Posicionarse en cada uno de los valores del conjunto de datos del objeto: "array" e invocar la funcion call_Back: "cb"
  } 
}

/*
--- notas_forEach --- 
 
Funcion for_Each recibe 2 parametros o argumentos llamados: "array" y "cb"
funcion(objeto(elemento, elemento) 


--- call_Back

Es una función que se pasa a otra función como un argumento, 
que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

https://developer.mozilla.org/es/docs/Glossary/Callback_function
--


--- Ejemplo opcion for:
 
function forEach(array, cb) {
  for(let i = 0; i < array.length; i++){
    cb(array[i]);
  }
}
--

--- Ejemplo opcion for_Each:

function forEach(array, cb) {
  array.foreach(function(e) {
    cb(e)
  })
}
-- 
*/

/*
--- extras

  /* array.forEach(cb); */
  /* array.forEach(function(e){
    cb(e);
  }); 
  ---


  --- Glosario

-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Callback refiere a: llamar de vuelta, regresar, volver en ingles.
-For Each refiere a: para cada en ingles.
-For refiere a: por o para en ingles.
--  
*/

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // [1,2,3,4]
  var resultado = array.map(function(e){
    return cb(e)
  })
  return resultado;
}

/*
--- notas_map --- 

Funcion map recibe 2 parametros o argumentos llamados: "array" y "cb"
funcion(objeto(elemento, elemento) 

--- Método map

Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

Los parametros enviados hacen referencia a: 
(funcion_Call_Back(valor_Actual_a_Iterar, indice))

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
--

--- call_Back

Es una función que se pasa a otra función como un argumento, 
que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

https://developer.mozilla.org/es/docs/Glossary/Callback_function

Ejemplo call_Back: 

function operacionMatematica(n1, n2, cb) {
  return cb(n1, n2)
}
console.log(operacionMatematica(1, 2, function (n1, n2) {
  return n1 * n2
}));
--

--- funciones_Flecha

Es una alternativa compacta a una expresión de función tradicional, 
pero es limitada y no se puede utilizar en todas las situaciones.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
--
 
---Ejemplo:
Sumar numeros enteros y devolver la suma de la coleccion de datos.
 
arrayNumeros = [1,2,3] = 6
 
i = 0; i < numeros.length; i++) { // Mientras i sea menor a la longitud del conjunto de datos
 
i = 0 + 1
i = 1 + 1 
i = 2 + 1
i = 3 

--- simplificar_Sentencia_Contador

contador = contador + numeros[i];   es igual   contador += numeros[i];
--

--- Ejemplo opcion for function map:

let arrayCb= [] 

for(let i = 0; i < array.length; i++){
  arrayCb.push(cb(array[i])); // en cada vuelta 
}
return arrayCb
}
--

--- Ejemplo opcion function map:
 
return array.map(function(e){
  return cb(e)  
});
--

--- Ejemplo opcion arrow function
 
return array.map(e ==> cb(e))
});
--

--- Ejemplo opcion arrow function:
 
return suma(n1, n2)
  return n1+n2  
});
--

--- Ejemplo opcion arrow function:

const suma = (n1, n2) ==> n1 + n2
--

--- Glosario

-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-Callback refiere a: llamar de vuelta, regresar, volver en ingles.
-La funcion map, refiere a levantar el plano de o trazar mapa en ingles.
-la funcion arrow, refiere a: flecha en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
--  

--- Probar RunJs

const arrayNum = [1, 2, 3, 4, 5]
console.log(arrayNum.filter(function(elemento){
  return elemento % 2 === 0
}));
--

const arrayNum = [1, 2, 3, 4, 5]
console.log(arrayNum.map(function(elemento){
  return elemento * 2
}));
--
*/


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a/A".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // ['ala','pelota','avion']
  var nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === "a") {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;

/*
--- notas_filter --- 

Funcion filter recibe 1 parametro o argumento llamados: "array"
funcion(objeto(elemento) 

--- Método filter

Crea un nueva coleccion de datos con todos los elementos que cumplan la condición implementada por la función dada.
Los parametros enviados hacen referencia a: 
funcion(objeto(elemento))

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Ejemplo filter:

return array.filter(e ==> e[0] === "a") // Primer elemento de cadena de caracteres debe ser igual a: "a" 
--

--- Otra opcion filter: 

return array.filter(function(e){
  return e[0] === "a";
})
}
--

--- Método push 

Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
Los parametros enviados hacen referencia a: 
(objeto(elemento))

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
--

--- Metodo lower_Case

El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.
Los parametros enviados hacen referencia a: 
cadena.toLowerCase() 

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

Ejemplo lower_Case: 

return array.filter(e ==> e[0].toLowerCase() === "a") // Primer elemento de cadena de caracteres debe ser igual a: "a"
--

--- Glosario

-El funcion filter, hace referencia a: filtrar en ingles.
-El metodo lower case, hace referencia a: minusculas en ingles.
-Array, hace referencia a: coleccion, conjunto o formacion en ingles.
-Push, hace referencia a: empujar, presionar, añadir o enviar en ingles. 
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-La funcion return hace referencia a: devolver o regresar en ingles.
-Declarar hace referencia a escribir la funcion.
-Invocar hace referecia de hacer funcionar la funcion.
--  

--- Otra opcion filter for each 

function encuentra_a(elemento) {
  if (elemento.startsWith('A') || elemento.startsWith('a')) {
    str_a.push(elemento);
    console.log(str_a);
  }
  return str_a;
}
str.forEach(encuentra_a);
console.log(str_a)
--

---- Otro ejemplo filter: 

  return array.filter(e ==> e[0] === "a") // Primer elemento de cadena de caracteres debe ser igual a: "a"  
}

const arrays = ["ala", "alambrado", "hola"] // conjunto de elementos, donde cada uno es una cadena de caracteres
console.log(filter(arrays));

var str = ['Ana', 'Pedro', 'Seba', 'Jonatan'];
var str_a = []; // crear string vacio para captar el resultado de la devolucion de la funcion; cuales elementos comienzan con la letra a

for (var i = 0; i < str.length; i++) {
  if (str[i].startsWith('A') || str[i].startsWith('a')) { // valido con que letra comienza
    str_a.push(str[i]);
  }
}
console.log(str_a);
console.log(str_a.length)
--

--- Extras: 
 /*  var resultado = array.filter(function(palabra){
    return palabra[0] === "a" 
  }) */
 /* 
  return resultado
 /*  return array.filter((e)=> e[0] === 'a') */
}

// ["ala", "avion",'Ala']
// ["ala","avion"]
//


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
