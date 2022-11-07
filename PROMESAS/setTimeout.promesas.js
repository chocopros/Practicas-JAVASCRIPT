let promesa = new Promise ( resolver => {
    console.log('Inicio de Promesa')
    setTimeout( () => resolver('saludos con promesa y timeout'),4000);
    console.log('Fin promesa')
});

promesa
    .then(data => console.log(data))
    .catch(err => console.log(err.message))

