/*el async trans forma una funcion a una promesa*/
let getNombrePrueba = async() => {
   
    //throw new Error('No existe nombre en la base de datos');
    return 'Juan Daniel'
};

getNombrePrueba()
.then(nombre => console.log(nombre))
.catch(error => console.log(error));



let getNombre = () => {
    return new Promise((resolve,inject) => {
        setTimeout(() => {
            resolve('Juan Daniel Muñoz Queupul');
        }, 3000);
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `hola ${ nombre }`;
}

saludo()
.then(mensaje => console.log(mensaje))
.catch(error => console.log(error));
