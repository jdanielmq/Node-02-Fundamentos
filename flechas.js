/* de funcion normal a funcion de flecha*/
function sumar(a,b){
    return a+b;
}
console.log(sumar(10,30));

/*funcion de fechas*/
let suma = (a,b) =>  a + b; 
console.log(suma(10,30));

/*ejemplo sencillo*/
function saludar (){
    return 'hola mundo de Node';
}
console.log(saludar());

/*ejemplo con funcion de fecha*/
let saludo = () => 'Hola mundo con funcion de fecha';
console.log(saludo());

/*funcion normal con parameto*/
function setNombre(nombre) {
    return `Hola ${ nombre }, como estas?`
    
}
console.log(setNombre('Juan Daniel'));

/*funcion normal con parameto*/
let setNombreFecha = (nombre) => `Hola ${nombre}, como has estado loco?`;
console.log(setNombreFecha('Juan Daniel Muñoz'));


/* cambiando la referencias del this en las funcion del objeto*/
let deadpool = {
    nombre : 'Juan Daniel',
    apellido : 'Muñoz Queupul',
    poder : 'regeneración',
    getNombre (){
        return `${ this.nombre } ${ this.apellido} y su poder es : ${ this.poder }`
    }

}
console.log(deadpool.getNombre());
