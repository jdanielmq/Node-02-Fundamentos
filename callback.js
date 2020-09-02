/*callback con una funcion de fecha*/
setTimeout(()=>{
    console.log('hola mundo');
}, 3000);

/*se genera la función de que utilizaremos para las pruebas*/
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Juan Daniel',
        id,
        apellido: 'Muñoz Queupul'
    }
    if(usuario.id === 20){
        callback(`El usuario con id : ${id} no existe en la base de datos`);
    }else{
        callback(null,usuario);
    }
}

/*llamado de la funcion que es de prueba*/
getUsuarioById(30, (error, usuario) => {

    if(error){
        console.log(error);
    }else{
        console.log('usuario de base de datos ::: ', usuario);
    }
})