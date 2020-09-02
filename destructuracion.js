/*creacion de objeto con un metodo get nombre, donde se construye con las ${variables}*/
let deadpool = {
    nombre : 'Juan Daniel',
    apellido : 'Muñoz Queupul',
    poder : 'regeneración',
    getNombre: function () {
        return `${ this.nombre } ${ this.apellido} y su poder es : ${ this.poder }`;
    }

}
console.log(deadpool.getNombre());

/*cuando necesitamos obtener los datos de los atributos del objeto*/
let nombre1 = deadpool.nombre;
let apellido1 = deadpool.apellido;
let poder1 =  deadpool.poder;
console.log(nombre1,apellido1,poder1);

/*se puede se puede hacer con las destructuración*/
let { nombre, apellido, poder } =  deadpool;
console.log(` el nombre es ${ nombre } ${ apellido } con el poder: ${ poder }`);

/*se puede se puede hacer con las destructuración con cambio de variable*/
let { nombre: nombreAux, apellido: apellidoAux, poder:poderAux } =  deadpool;
console.log(` el nombre es ${ nombreAux } ${ apellidoAux } con el poder: ${ poderAux }`);