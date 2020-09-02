let nombre = 'Juan Daniel';
let real = 'Francisco Vera';

/*formas distinta de inyectar los valores dentro de un string*/
console.log(nombre + ' y ' + real ) ;
console.log(`${ nombre } y ${ real }`);

/*Comparación de nombre, se demuestra que dan el mismo resultado*/
let nombreCompleto =  nombre + ' y ' + real;
let nombreTemplate = `${ nombre } y ${ real }`;
console.log(nombreCompleto === nombreTemplate);

/*atraves de la función podermos enviar el string con las variables inyectadas con ${variable}*/
function getNombre() {
    return `${ nombre } y ${ real }`;
}
console.log(getNombre());

/*aca vamos a inyectar la funcion de la misma manera que las variables*/
console.log(` el nombre es : ${ getNombre()}`);