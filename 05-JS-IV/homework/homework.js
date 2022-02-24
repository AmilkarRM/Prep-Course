// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  let new_Cat = { // Declara nuevo objeto, nombre variable: new_Cat 
    nombre: nombre, // Propiedad objeto: nombre, y el valor argumento: "nombre"
    edad: edad, // Propiedad objeto: edad, y el valor argumento: "edad"
    meow: function () { // Método (funcion) llamado "meow"
      return "Meow!"
    }
  }
  return new_Cat; // Devolver nuevo objeto: new_Cat
}
/*
--- notas_crearGato --- 

*/

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null; // Agrega propiedad al objeto con el valor: 'null'
  return objeto // Devolver nuevo objeto
}

/*
--- notas_agregarPropiedad --- 

Funcion agregar Propiedad recibe dos parametros o argumentos: 
(objeto(argumento de tipo cadena llamado: property)
El funcion property, hace referencia a: caracteristica o propiedad en ingles.
lo objetos son: clave, valor.

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

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]()
}

/*
--- notas_invocarMetodo --- 

Funcion invocar Método recibe 2 parametros o argumentos: 
(objeto(método de tipo cadena llamado: metodo)
() Invoca ese método o funcion.
---
*/

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  let numero = objetoMisterioso.numeroMisterioso; // Declara nuevo variable, nombre variable: numero   
  return numero * 5 // Devolver el producto o resultado de multiplicar: la propiedad "numeroMisterioso" por 5. 
}


/*
--- notas_multiplicarNumeroDesconocidoPorCinco --- 

Funcion multiplicar_Numero_Desconocido_Por_Cinco recibe: 1 parametro o argumento:(objeto_Misterioso)
---
*/

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad]; // Borrar en el objeto, la propiedad recibida como argumento, identificada con el nombre: Una_Propiedad   
  return objeto // Devolver nuevo objeto
}

/*
--- notas_eliminar_Propiedad --- 

Funcion eliminar_Propiedad recibe 2 parametros o argumentos: 
objeto[unaPropiedad]
El funcion delete, hace referencia a: eliminar o borrar en ingles.
lo objetos son: clave, valor.
---
dot notation espera variables
bracket notacion es posible enviar 
---
*/


function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  let newObj = { // Declara nuevo objeto, identificado con nombre: new_Obj. // Objetos van entre: {}
    nombre: nombre, // Propiedad recibida del objeto: nombre, y el valor argumento: "nombre"
    email: email, // Propiedad recibida del objeto: email, y el valor argumento: "email"
    password: password // Propiedad recibida del objeto: password, y el valor argumento: "password"
  }
  return newObj // Devolver nuevo objeto llamado: new_Obj
}

/*
--- notas_nuevo_Usuario --- 

Funcion nuevo_Usuario recibe 3 parametros o argumentos: 
objeto(nombre, email, password) 
El funcion return, hace referencia a: devolver, regresar en ingles.

Otra opcion: 

function nuevoUsuario(nombre, email, password) {
    let newObj = {
    nombre, 
    email,
    password
      }
  return newObj
}
---
*/


function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario["email"] == null) { // si, usuario tiene la propiedad: "email" igual a: null or undefined.
    return false // Devolver falso
  } else {
    return true // Devolver verdadero
  }
}

/*
--- notas_tieneEmail ---

Funcion tiene_Email recibe 1 parametro o argumento: 
objeto(usuario) 
El funcion return, hace referencia a: devolver, regresar en ingles.
La palabra reservada undefined, hace referencia a: indefinido en ingles.
La palabra reservada null, hace referencia a: nulo o invalido en ingles.
La palabra reservada true, hace referencia a: verdadero en ingles.
La palabra reservada false, hace referencia a: falso en ingles.

--- Operador Ternario

usuario.email ? true: false // si, existe el usuario 
usuario.email == null ? false: true // si, existe el usuario 

*/

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto.hasOwnProperty(propiedad)) { // si, objeto tiene la propiedad (key), identificada con el valor de argumento: "propiedad".
    return true // Devolver verdadero
  } else {  // si, no reconoce dentro del objeto la propiedad (key), identificada con el valor de argumento: "propiedad".
    return false // Devolver falso
  }
}

/*
--- notas_tiene_Propiedad --- 

Funcion tiene_Propiedad recibe 2 parametros o argumentos: 
objeto(propiedad) 

--- Object.hasOwnProperty().

El metodo hasOwnProperty, hace referencia a: tiene una propiedad en ingles.
El funcion return, hace referencia a: devolver o regresar en ingles.
---
*/


function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (usuario.password === password) { // si, la propiedad (key), identificada con el valor: "password", es igual al valor del argumento recibido: "password"
    return true // Devolver verdadero
  } else { // si, no coincide el valor dentro del objeto la propiedad (key), identificada con el valor: "password", es igual al valor del argumento recibido: "password".
    return false // Devolver falso
  }
}

/*
--- notas_verificar_Password --- 

Funcion verificar_Password recibe 2 parametros o argumentos: 
objeto(usuario, password) 

La funcion return hace referencia a: devolver o regresar en ingles.

*/

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword; // Acceder a la propiedad password del objeto: "usuario"
  // y reasignar el valor recibido como argumento: "nuevaPassword" 
  return usuario // Devolver usuario
}

/*
--- notas_actualizar_Password --- 

Funcion actualizar_Password recibe 2 parametros o argumentos: 
objeto(usuario, nuevaPassword) 

Ejemplo: 

- Declarar nuevo objeto, identificado con nombre: "usuario".
-- Acceder a la propiedad del objeto: "usuario", usar el metodo usuario.password
--- Reasignar el valor recibido como argumento = "nuevaPassword" 
----  Devolver usuario

const usuario = {
  password: '1234'
}

function actualizarPassword(usuario, nuevaPassword) {
  usuario.password = nuevaPassword; 
  return usuario 
}
---
El metodo password, hace referencia a contraseña o clave en ingles.
La funcion return hace referencia a: devolver o regresar en ingles.
---
*/

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo); // Acceder a la propiedad amigos(conjunto de datos) del objeto: "usuario"
  // y agrega al final de amigos(conjunto de datos): nuevoAmigo 
  return usuario // Devolver usuario
}

/*
--- notas_agregar_Amigo --- 

Funcion agregar_Amigo recibe 2 parametros o argumentos: 
objeto(usuario, nuevaAmigo) 

El metodo usuario.amigos accede a la propiedad del objeto: "usuario",
y comprueba si el elemento "amigos" existe dentro del conjunto de datos.
Agregar al final del conjunto de datos: (nuevoAmigo)
El metodo push hace referencia a: empujar, presionar o enviar en ingles.
La funcion return hace referencia a: devolver o regresar en ingles.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
---
*/

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  for (let i = 0; i < usuarios.length; i++) { // Declara nueva variable, nombre: i. -for- Recorrer objeto: usuarios(conjunto de datos): 
    // Posicion de la variable i, sera menor a la longitud de objetos dentro del conjunto de datos: "usuarios", y lo sumaremos de 1 en 1.
    usuarios[i].esPremium = true // Posicionarse en cada uno de los usuarios del conjunto de datos del objeto y acceder a la propiedad del objeto: "esPremium" 
    // y definir cada propiedad "esPremiun" en cada uno de los usuarios del conjutno de datos del objeto: "usuarios" como: verdadera
  }
  return usuarios // Devolver usuario
}

/*
--- notas_pasar_Usuario_A_Premium --- 

Funcion pasar_Usuario_A_Premium recibe 1 parametro o argumento: 
objeto(usuarios) 

El metodo usuario.EsPremium accede a la propiedad del objeto: "usuarios",
y comprueba si el elemento "esPremium" existe dentro del conjunto de datos.



--- Glosario

Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
El metodo length, hace referencia a longitud o largo en ingles.
Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
La funcion return hace referencia a: devolver o regresar en ingles.
Sintaxis hace referencia a la escritura de un bloque de codigo 
y al modo de combinarse y ordenarse; las palabras y las expresiones. 

--- Info Test pasar_Usuario_A_Premium

const users = [
  {esPremium: false},  
  {esPremium: false},  
  {esPremium: false},  
  {esPremium: false},  
  {esPremium: false},  
]; 
---

Ejemplo: 
Se recibe un conjunto de datos idenficado con el nombre: "usuarios", con algunos elementos.

const users = [
  {name: 'henry', esPremium: false},  
  {name: 'henry1', esPremium: false},  
  {name: 'henry2', esPremium: false},  
  {name: 'henry3', esPremium: false},  
  {name: 'henry4', esPremium: false},  

Probar Consola RunJS:

---
function pasarUsuarioAPremium(usuarios) {
  for (let i = 0; i < usuarios.length; i++) { // Declara nueva variable, nombre: i. -for- Recorrer objeto: usuarios(conjunto de datos): 
    console.log(usuarios[i]);
    // Posicion de la variable i, sera menor a la longitud de caracteres del array de objetos: "usuarios", y lo sumaremos de 1 en 1.
    usuarios[i].esPremium = true // Posicionarse en cada uno de los usuarios del conjunto de datos del objeto y acceder a la propiedad del objeto: "esPremium" 
    // y definir cada propiedad "esPremiun" en cada uno de los usuarios del conjutno de datos del objeto: "usuarios" como: verdadera
  }
  return usuarios // Devolver usuario
}
const users = [
  {name: 'henry', esPremium: false},  
  {name: 'henry1', esPremium: false},  
  {name: 'henry2', esPremium: false},  
  {name: 'henry3', esPremium: false},  
  {name: 'henry4', esPremium: false},  
]; 
console.log(pasarUsuarioAPremium(users));
---
*/

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var sumaLikes = 0 // Declara nueva variable, identificada con el nombre: "sumaLikes". // Acumulador
  for (let i = 0; i < usuario.posts.length; i++) { // Recorrer objeto: usuario en la propiedad publicacion (conjunto de datos): 
    // Posicion de la variable i, sera menor a la longitud de objetos dentro del conjunto de datos: "usuario.publicacion", y lo sumaremos de 1 en 1.
    sumaLikes = sumaLikes + usuario.posts[i].likes // sumar_Me_Gusta, es igual: asi mismo + el objeto publicacion usuario en su propiedad: "me_Gusta", de valor entero donde esta ubicada[i]  
  }
  return sumaLikes // Devolver sumar_Me_Gusta
}

/*
--- notas_sumarLikesDeUsuario --- 

Funcion sumar_Likes_De_Usuario recibe 1 parametro o argumento: 
objeto(usuario) 


--- Glosario

El elemento post, hace referencia a: publicacion en ingles.
La propiedad like, hace referencia a: me gusta en ingles.
El metodo length, hace referencia a longitud o largo en ingles.
Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
La funcion return hace referencia a: devolver o regresar en ingles.

--- Info Test sumar_Likes_De_Usuario

Ejemplo: 
Recibir un conjunto de datos idenficado con el nombre: "usuario", con algunos elementos, publicaciones.
Recorrer cada publicacion del usuario y en la propiedad "Me gusta", sumar en numero total de los "Me gusta" de cada una de las publicaciones.
 
    const user = {
      posts: [
        {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10
        },
        {
          id: '2',
          title: 'Soy Henry!',
          likes: 100
        },
        {
          id: '3',
          title: 'Qué es un JavaScript?',
          likes: 35
        },
        {
          id: '4',
          title: 'JS Objects for Dummies',
          likes: 42
        },
        {
          id: '5',
          title: 'Educación online',
          likes: 99
        },
      ],
    };
    expect(sumarLikesDeUsuario(user)).toBe(286);
  });
});
---
*/

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function () { // Definir método (función) "calcularPrecioDescuento" al objeto: producto.
    return this.precio - (this.precio * this.porcentajeDeDescuento); // Devolver precio con descuento = precio_Inicial - (precio_Inicial * porcentaje_Descuento)
  }
  return producto; // Devolver producto
}

/*
--- notas_agregarMetodoCalculoDescuento --- 

Funcion agregar_Metodo_Calculo_Descuento recibe 1 parametro o argumento: 
objeto(producto) 

La funcion return hace referencia a: devolver o regresar en ingles.
La palabra clave: this hace referencia a: esto, este o esta en ingles.

Ejemplo: 
Se recibe un conjunto de datos idenficado con el nombre: "producto", con algunos elementos, propiedades.

const producto = {
  precio: 20,
  porcentajeDeDescuento: 0.2,
  calcularPrecioDescuento: function () {
    this.precio - precio * this.porcentajeDeDescuento;
  }
}
---
*/


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
