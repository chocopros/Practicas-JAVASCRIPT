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

//! CLASS FOR DISPLAY-MONITOR
class Display {
    
    static countDisplay = 0;

    constructor(brand, size){
        this._idDisplay = ++Display.countDisplay;
        this._brand = brand;
        this._size = size;
    }
    get idDisplay(){
        return this._idDisplay;
    }

    get brand(){
        return this._brand;
    }
    set brand(newBrand){
        this._brand = newBrand;
    }

    get size(){
        return this._size;
    }
    set size(newSize){
        this._size = newSize;
    }

    toString(){
        return `DISPLAY-MONITOR >> [> idDisplay=${this._idDisplay}, BRAND=${this._brand}, SIZE-DISPLAY=${this._size} <]`
    }
};

