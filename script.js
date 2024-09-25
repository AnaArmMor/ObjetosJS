/*--Crear un objeto:----*/


let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022
};
console.log(coche);


/*---Acceder a una propiedad de un objeto:---*/

let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};
console.log(persona.nombre);


/*---Modificar una propiedad del objeto:-----*/


let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 432
};
libro.paginas = 450;
console.log(libro.paginas);

/*----Añadir una nueva propiedad:----*/

let alumno = {
    nombre: "Carlos",
    grado: "Noveno"
};
alumno.promedio = 8.5;
console.log(alumno);

/*------Eliminar una propiedad:----*/


let producto = {
    nombre: "Laptop",
    precio: 999,
    categoria: "Electrónica"
};
delete producto.categoria;
console.log(producto);

/*----Iterar sobre propiedades de un objeto:---*/


let fruta = {
    nombre: "Manzana",
    color: "Rojo",
    precio: 1.5,
    origen: "España"
};
for (let propiedad in fruta) {
    console.log(propiedad + ": " + fruta[propiedad]);
}


/*-----Objeto anidado:-----*/


let persona1 = {
    nombre: "Laura",
    edad: 28,
    direccion: {
        calle: "Calle Mayor 123",
        ciudad: "Barcelona",
        pais: "España"
    }
};
console.log(persona.direccion.calle);


/*------ Método en un objeto:------*/


let calculadora = {
    a: 5,
    b: 3,
    sumar: function() {
        return this.a + this.b;
    }
};
console.log(calculadora.sumar());


/*----Comprobar la existencia de una propiedad:-----*/


let computadora = {
    marca: "Dell",
    procesador: "Intel i7"
};
if ("memoria" in computadora) {
    console.log("La propiedad memoria existe");
} else {
    console.log("La propiedad memoria no existe");
}


/*---Objetos dinámicos:----*/


let coche1 = {};
coche.marca = "Ford";
coche.modelo = "Mustang";
coche.año = 2023;
console.log(coche);
