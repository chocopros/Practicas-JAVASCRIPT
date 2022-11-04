function myFunction1() {
    console.log('function1')
}

function myFunction2() {
    console.log('function2')
}


//? Se ejecutan de Manera secuencial al llamar a las funciones
myFunction1()
myFunction2()

//* Function of type Callbacks

function print(msg) {
    console.log(msg)
}

function sum(a,b, functionCallBack) {
    let res = a +b;
    functionCallBack(`Result = ${res}`)
}

sum(5,3, print)