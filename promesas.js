let empleados = [
	{
		id:	1,
		nombre: 'Juan Daniel'
	},
	{
		id: 2,
		nombre : 'Francisco Vera'
	},
	{
		id:3,
		nombre:'Ignacio Zuñiga'
	}
];

let salarios = [
	{
		id:1,
		salario:1000

	},
	{
		id:2,
		salario: 1500
	}
];



let getEmpleado = (id) => {
    return new Promise((resolver, reject) => {
        let empleadoBD = empleados.find( empleado => empleado.id === id);
        if(!empleadoBD){
            reject(`No existe ningun empleado con el id: ${id}`)
        }else{
            resolver(empleadoBD);
        }
    })

}


let getSalario = (empleado) => {

    return new Promise((resolver, reject) => {
        let salarioDB = salarios.find( salario => salario.id === empleado.id);
        if(!salarioDB){
            reject(`No Existe salario para el empleado : ${ empleado.nombre }`);
        }else{
            resolver({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}



/*promesa anidas, si lo hacemos asi el metodo crecera demasiado y queda muy grande*/
getEmpleado(2)
.then(empleado =>  {
    console.log(empleado);
    getSalario(empleado)
    .then(response => {
        console.log(`El resultado con promesas es el siguiente id : ${response.id}`);
        console.log(`El nombre del Empleado es: ${response.nombre} y el salario total : ${response.salario}`);
    })
    .catch(error => console.log(error))
})
.catch(error => console.log(error));




/*metodos que crearemos promesas en cadenas*/
getEmpleado(10)
.then(empleado =>  {
    return getSalario(empleado);
})
.then(salario => {
    console.log(`El resultado con promesas es el siguiente id : ${salario.id}`);
    console.log(`El nombre del Empleado es: ${salario.nombre} y el salario total : ${salario.salario}`);
})
.catch(error => console.log(error));



