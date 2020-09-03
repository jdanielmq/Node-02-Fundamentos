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

let getEmpleado = (id, callback) => {
	let empleadoBD = empleados.find( empleado => empleado.id === id);
	
	if(!empleadoBD){
		callback(`No existe ningun empleado con el id: ${id}`)
	}else{
		callback(null, empleadoBD);
	}

}

let getSalario = (empleado, callback) => {
	let salarioDB = salarios.find( salario => salario.id === empleado.id);
	if(!salarioDB){
		callback(`No Existe salario para el empleado : ${ empleado.nombre }`);
	}else{
		callback(null, {
			nombre: empleado.nombre,
			salario: salarioDB.salario,
			id: empleado.id
		});
	}
}

getEmpleado(2, (error, empleado) => {
	if (error){
		console.log(error);
	}else{
		getSalario(empleado, (error, salario) => {
			if(error){
				console.log(error);
			}else{
				console.log(`El empleado :  ${salario.nombre} su salario: ${salario.salario}`);
			}
		})
	}
});


