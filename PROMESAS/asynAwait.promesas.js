//! async / await

async function myfunction () {
    let miPromesa = new Promise ( resolver => {
        setTimeout( ()=> console.log('espera de 5 seg'),5000);
        console.log('un texto');
    });
    
    return await miPromesa;

};

myfunction()
    .then(res => console.log(res))

