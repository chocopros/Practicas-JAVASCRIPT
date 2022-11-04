
//* llamdas asincronas con uso setTimeout

function myFunctionCallBack() {
    console.log('saludo asincrono despues de 3 seg')
}

setTimeout(myFunctionCallBack,3000);

setTimeout(function() {console.log('Saludo asincrono 2')},4000)