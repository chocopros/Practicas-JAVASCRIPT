let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

//? esta funcion va a llamar cada segundo

setInterval(reloj,2000); //! Se llama cada 2 seg >> 2000ms