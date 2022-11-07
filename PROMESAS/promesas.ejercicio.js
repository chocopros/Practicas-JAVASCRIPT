//? PROMESAS

let Mypromesa = new Promise ((resolver,rechazar) => {

    let expresion = false;

    if (expresion) {
        resolver('Resolvio Correctamente')
    } else {
        rechazar('Se Produjo un error')
    }

})

//> 1ra Forma de Resolver
// Mypromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

//> 2da Foram de Resolver
// Mypromesa
//     .then(valor => console.log(valor))
//     .catch(err => console.log(err))