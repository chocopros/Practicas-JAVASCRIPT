//? APLICATION "MUNDO PC"

//! CLASS FOR TYPES OF INPUT DEVICES
class DeviceIn {

    constructor(typeIN, brand){
        this._typeIN = typeIN;
        this._brand = brand;
    }

    get typeIN(){
        return this._typeIN;
    }
    set typeIN(newTypeIN){
        this._typeIN;
    }

    get brand(){
        return this._brand;
    }
    set brand(newBrand){
        this._brand;
    }

};

//! CLASS FOR MOUSE
class Mouse extends DeviceIn {

    static countMouses = 0;

    constructor(typeIN, brand){
        super(typeIN,brand);
        this._idMouse = ++Mouse.countMouses;
    }

    get idMouse(){
        return this._idMouse
    }

    toString(){
        return `Mouse: [idMouse=${this._idMouse}, typeIN=${this._typeIN}, Brand=${this._brand}]`;
    }
};

//! CLASS FOR KEYBOARD
class Keyboard extends DeviceIn {

    static countKeyboard = 0;

    constructor(typeIN, brand){
        super(typeIN,brand);
        this._idKeyboard = ++Keyboard.countKeyboard;
    }

    get idKeyboard(){
        return this._idKeyboard;
    }

    toString(){
        return `Keyboard: [idKeyboard=${this._idKeyboard}, typeIN=${this._typeIN}, Brand=${this._brand}]`;
    }
};

let keyboard1 = new Keyboard("USB","HP")
console.log(keyboard1.toString())