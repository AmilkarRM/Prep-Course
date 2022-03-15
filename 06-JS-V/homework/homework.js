// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  class Usuario { // crear Clase Constructora ES6 llamada: "Usuario"
    constructor(opciones) { // Definir `constructor`, con las propiedades: usuario, nombre, email, contraseña y recibir argumento llamado: "opciones"
      this.nombre = opciones.nombre; // This .nombre es igual opciones recibida por argumento.
      this.usuario = opciones.usuario;  // This .usuario es igual opciones.usuario recibida por argumento.
      this.email = opciones.email; // This .email es igual opciones.email recibida por argumento.
      this.password = opciones.password; // This .contraseña es igual opciones.password recibida por argumento.
    }
  }
  // Adherir a la clase llamada: "Usuario", un objeto prototipo con la propiedad: "saludar"
  Usuario.prototype.saludar = function () { // Que es igual a un metodo(funcion) 
    return "Hola, mi nombre es " + this.nombre // Devolver una cadena de caracteres: 'Hola, mi nombre es {{nombre}}'
  }
  return Usuario  // Devolver usuario
}

/*
--- notas_crear_Usuario --- 

Funcion crear_Usuario no recibe parametros o argumentos pero debe aceptar un objeto: "opciones" 
objeto(opciones) 

--- Funciones_Constructoras

-La funcion constructora llamada: "Usuario", recibe un argumento llamado: "opciones" y,
accede a la propiedad del objeto: "Usuario", y comprueba si el elemento "opciones" existe dentro del conjunto de datos.
-Debo usar: this en las funciones constructoras para que el objeto sepa a que funcion esta haciendo referencia.
-Definir en `contructor`, usuario, nombre, email, contraseña y recibir argumento llamado: "opciones"
-El metodo usuario.opciones accede a la propiedad del objeto: "Usuario",
y comprueba si el elemento "opciones" existe dentro del conjunto de datos.

--- Prototype 

-Para proporcionar mecanismos de herencia, los objetos pueden tener un objeto prototipo,
el cual actúa como un objeto plantilla que hereda métodos y propiedades
-Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.

--- Glosario

-La palabra clave: this hace referencia a: esto, este o esta en ingles.
-Prototipe hace referencia a: prototipo en ingles.
-Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
-La funcion return hace referencia a: devolver o regresar en ingles.

--- Ejemplo: 
Recibir conjunto de datos idenficado con el nombre: "opciones", con algunos elementos o propiedades.

const usuario = {
      opciones: [
        {
          nombre: 'Pepe',
          usuario: 'Pepe_0',
          email: 'pepe@gmail.com',
          password: 'JavaScript Es Genial',
        },
        {
          nombre 'Juan',
          usuario: 'Juan_1',
          email: 'juan@gmail.com',
          password: 'Java Es Genial',
        },
        {
          nombre: 'Ron',
          usuario: 'Ron_2',
          email: 'ron@gmail.com',
          password: 'Go Es Genial',
        },
        {
          nombre: 'Tom',
          usuario: 'Tom_3',
          email: 'tom@gmail.com',
          password: 'R Es Genial',
        },
        {
          nombre: 'Sam',
          usuario: 'Sam_4',
          email: 'sam@gmail.com',
          password: 'Python Es Genial',
        },
      ],
    };

---

Otra opcion:

--- Funcion Constructora ES6

function crearUsuario() {
  function Usuario(opciones) { // Crear una funcion constructora llamada: Usuario. 
    // Definir `constructor`, con las propiedades: usuario, nombre, email, contraseña y recibir argumento llamado: "opciones"
    this.nombre = opciones.nombre; // This .nombre es igual opciones recibida por argumento.
    this.usuario = opciones.usuario;  // This .usuario es igual opciones.usuario recibida por argumento.
    this.email = opciones.email; // This .email es igual opciones.email recibida por argumento.
    this.password = opciones.password; // This .contraseña es igual opciones.password recibida por argumento.
  }
}
// Adherir a la clase llamada: "Usuario", un objeto prototipo con la propiedad: "saludar"
Usuario.prototype.saludar = function () { // Que es igual a un metodo(funcion) 
  return "Hola, mi nombre es " + this.nombre // Devolver una cadena de caracteres: 'Hola, mi nombre es {{nombre}}'
}
return Usuario  // Devolver usuario
}
---
*/

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:  
  return (Constructor.prototype.saludar = function () { // Adherir a la clase llamada: "Constructor", un objeto prototipo con la propiedad: "saludar"
    // Que es igual a un metodo(funcion) 
    return "Hello World!"; // Devolver una cadena de caracteres: "Hello World!"
  });
}

/*
--- notas_agregar_Metodo_Prototype --- 

Funcion agregar_Metodo_Prototype recibe 1 parametro o argumento llamado, Funcion Clase ES6: "Constructor"
objeto(Constructor) 

--- Prototype 

Para proporcionar mecanismos de herencia, los objetos pueden tener un objeto prototipo,
el cual actúa como un objeto plantilla que hereda métodos y propiedades
Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.

--- Glosario

-Prototipe hace referencia a: prototipo en ingles.
-La funcion return hace referencia a: devolver o regresar en ingles.
---
*/

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  String.prototype.reverse = function () { // Adherir a la clase llamada: "String", un objeto prototipo con la propiedad: "reverse"
    // Que es igual a un metodo(funcion)   
    let str = "" // Declarar nueva variable de tipo cadena de caracteres en estado vacia, llamada: "str"
    for (let i = this.length - 1; i >= 0; i--) {// Recorrer objeto llamado:"String" prototipo(conjunto de datos) y Declarar nueva variable, nombre: i. 
      // this hace referencia al objeto: String.prototype
      // la variable i, inicia la iteraccion en this.length - 1       
      // this.length - 1, puntualmente hace referencia a la cantidad de caracteres del objeto: ("String" - 1).      
      // Posicion de la variable i, es igual a la longitud de objeto llamado:"String" prototipo dentro del conjunto de datos.   
      // hasta que i, sea mayor o igual 0, y lo restaremos de 1 en 1.    
      str = str + this[i] // str, es igual: asi mismo + el objeto llamado: String" prototipo, de valor cadena de texto donde esta ubicada[i]        
    }
    return str // Devolver una cadena de caracteres llamada: "str"
  }
}

/*
--- notas_agregar_String_Invertida ---  

--- This

-Tomara un valor dependiendo del contexto donde se aplique.
En este caso, this hace referencia al objeto llamado: "String" prototipo.

--- Prototype

-Para proporcionar mecanismos de herencia, los objetos pueden tener un objeto prototipo,
el cual actúa como un objeto plantilla que hereda métodos y propiedades.
-Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.
-Su objetivo es: agregar funcionalidades al objeto de tipo cadena de texto llamado: "String". 

--- Ejemplo

str="tony"

"toni".reverse()
i = 3 -> str = "i"
i = 2 -> str = "in"
i = 1 -> str = "ino"
i = 0 -> str = "tnot" 
 
Otra opcion: 
 
function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
 
  String.prototype.reverse = function () {
    let str = ""
    for (let i = this.length; i >= 0; i--) { // la variable i, inicie la iteraccion en this.length 
      str = str + this[i] // y hace referencia a la cadena de texto y a la cantidad de caracteres - 1
    }
    return str
  }
}
---
 
function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function () {
    return this.split("").reverse().join("");
  };
}
--- 
 
--- Glosario
 
-Recorrer o iterar, hace referencia a realizar cierta acción varias veces.
-El metodo length, hace referencia a longitud o largo en ingles.
-Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
-La funcion return hace referencia a: devolver o regresar en ingles.
-El metodo reverse, hace referencia a inversa, al contrario en ingles.
--- 
*/

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona { // crear clase llamada: "Persona"
  constructor(nombre, apellido, edad, domicilio) { // Definir `constructor`, con las propiedades: nombre, apellido, edad, domicilio.  
    this.nombre = nombre; // This .nombre es igual nombre.
    this.apellido = apellido; // This .apellido es igual apellido.
    this.edad = edad; // This .edad es igual edad.
    this.domicilio = domicilio; // This .domicilio es igual domicilio.
    this.detalle = function () { // This .detalle es igual a un metodo(funcion) 
      return { // Devolver el objeto llamado: "Persona", con sus propiedades y valores.
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio,
      }
    };
  }
}

/*
--- notas_Persona --- 

--- Funciones_Constructoras

-La funcion constructora llamada: "Persona"
-Debo usar: this en las funciones constructoras para que el objeto sepa a que funcion esta haciendo referencia.
-Definir en `contructor`, nombre, apellido, edad, domicilio, detalle.
-El metodo persona.detalle accede a la propiedad del objeto: "Persona",
y comprueba si el elemento "detalle" existe dentro del conjunto de datos.
 
--- Probar code Run JS

class Persona { // crear clase llamada: "Persona"
  constructor(nombre, apellido, edad, domicilio) { // Definir `constructor`, con las propiedades: nombre, apellido, edad, domicilio.  
    this.nombre = nombre; // This .nombre es igual nombre.
    this.apellido = apellido; // This .apellido es igual apellido.
    this.edad = edad; // This .edad es igual edad.
    this.domicilio = domicilio; // This .domicilio es igual domicilio.
    this.detalle = function () { // This .detalle es igual a un metodo(funcion) 
      return { // Devolver metodo llamado: "detalle", con las propiedades de la persona. 
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio,
      }
    };
  }
} 
const persona = new Persona("Juan", "Perez", 22, "Saavedra 123");
console.log(persona.detalle())
--- 
*/

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  const persona = new Persona(nombre, apellido, edad, dir); // Declarar nueva variable de tipo constante llamada: "persona"
  // que es igual y heredara de la clase llamada: "Persona", sus propiedades y valores(nombre, apellido, edad, domicilio).    
  return persona; // Devolver el objeto creado llamado: "persona"
}

/*
--- notas_crear_Instancia_Persona --- 

-Funcion crear_Instancia_Persona recibe 4 parametros o argumentos (nombre, apellido, edad, dir)
con respectivos valores: "Juan", "Perez", 22, "Saavedra 123" 

otra opcion:
 
function crearInstanciaPersona(nombre, apellido, edad, dir) {
  return new Persona(nombre, apellido, edad, dir)
}
---
*/

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function () { // Adherir a la clase llamada: "Persona", un objeto prototipo con la propiedad: "datos"
    // Que es igual a un metodo(funcion) 
    return this.nombre + ", " + this.edad + " años" // // Devolver una cadena de caracteres: 'Hola, mi nombre es {{nombre}}'
  }
}

/*
--- notas_agregar_Metodo --- 

-Funcion agregar_Metodo no recibe parametros o argumento ()

--- Funciones_Constructoras

-La funcion constructora llamada: "Persona", no recibe argumento,
accede a la propiedad del objeto: "Persona", y comprueba si el elemento "datos" existe dentro del conjunto de datos.
-Debo usar: this en las funciones constructoras para que el objeto sepa a que funcion esta haciendo referencia.
-El metodo Persona.prototype.datos accede a la propiedad del objeto: "Persona",
y comprueba si el elemento "datos" existe dentro del conjunto de datos.

--- Prototype 

Para proporcionar mecanismos de herencia, los objetos pueden tener un objeto prototipo,
el cual actúa como un objeto plantilla que hereda métodos y propiedades
Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.
Al prototipo de una clase le estamos agregando un nuevo metodo y es como acceder directamente a las funcionalidades de la clase

--- Glosario

-La palabra clave: this hace referencia a: esto, este o esta en ingles.
-Prototipe hace referencia a: prototipo en ingles.
-Array en ingles se refiere a un conjunto de elementos o una formacion de elementos.
-La funcion return hace referencia a: devolver o regresar en ingles.
 
Otra opcion: 
 
function agregarMetodo() {

  Persona.prototype.datos = function () { return `${this.nombre}, ${this.edad} años` } 
}
--- 
*/





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
