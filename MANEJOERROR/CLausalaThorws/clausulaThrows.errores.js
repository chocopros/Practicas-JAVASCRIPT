//! MANEJO DE ERRORES


'use strict'

try {
    let x = 10;
    //myFuction();
    throw 'My Error';
}
catch(err){
    console.log(err)
}
finally{
    console.log('Ejecute..')
}

console.log('examplee continuee ....')



//> USE THROWS
//? Validacion de Nuestros propios errores
//? error.name >> get name error
//? error.message >> get message error

let result = '';

try {

    if (isNaN(result)) throw {
        message: 'this is not a number',
        exampleValue: '0123456789'
    }
    else if ( result === '') throw {message: 'variable Null'}
    else if ( result === 0 ) throw {message: 'variable is Zero'}
    else if ( result >= '') throw {message: 'variable Positive'}
    else if ( result <= '') throw {message: 'variable Negative'}

} catch (error) {
    console.log(error)
    console.log(`NameError= ${error.name}, MesaggeError= ${error.message}`)
}