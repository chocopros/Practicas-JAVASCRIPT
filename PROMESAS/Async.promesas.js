//? ASYNC indica que una funcion regresa una promesa

async function myFunction() {
    return 'saludos con promesa y async'
};

myFunction()
    .then(valor => console.log(valor));