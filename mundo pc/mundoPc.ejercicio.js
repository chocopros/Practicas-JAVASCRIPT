//? APLICATION "MUNDO PC"

//* CREATE ALL THE CLASS

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
        return `MOUSE >> [> idMouse=${this._idMouse}, typeIN=${this._typeIN}, Brand=${this._brand} <]`;
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
        return `KEYBOARD >> [> idKeyboard=${this._idKeyboard}, typeIN=${this._typeIN}, Brand=${this._brand} <]`;
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
        return `DISPLAY >> [> idDisplay=${this._idDisplay}, BRAND=${this._brand}, SIZE-DISPLAY=${this._size} <]`
    }
};

//! CLASS FOR COMPUTER
class Computer {
    static countComputer = 0;

    constructor(name, display, mouse, keyboard){
        this._idComputer = ++Computer.countComputer;
        this._name = name;
        this._display = display;
        this._mouse = mouse;
        this._keyborad = keyboard;
    }

    toString(){
        return `COMPUTER >> [> ID=${this._idComputer} >> NAME= ${this._name} <]\n${this._display}\n${this._mouse}\n${this._keyborad}`;
    }
};

//! CLASS FOR ORDER COMPUTER

class Orders {

    static countOrders = 0;

    constructor(){
        this._idOrder = ++Orders.countOrders;
        this._computer = [];  
    }

    get idOrders(){
        return this._idOrder;
    }

    addComputer(addNewComputer){
        this._computer.push(addNewComputer);
    }

    showOrder(){
        let computersOrders = '';

        for (let computer of this._computer){
            computersOrders += `\n[${computer.toString()}]\n`;
        }

        return `Order=${this._idOrder}, ${computersOrders}`

    }
};

//* CREATES OBJETS USING THE CLASS CREATED

//> CREATE MOUSES
let mouse1 = new Mouse("USB","HP")
console.log(mouse1.toString())
let mouse2 = new Mouse("USB","RAZER")
console.log(mouse2.toString())

//> CREATE KEYBOARD'S
let keyboard1 = new Keyboard("USB","HP")
console.log(keyboard1.toString())
let keyboard2 = new Keyboard("PS/2","Genius")
console.log(keyboard2.toString())

//> CREATE DISPLAY-MONITOR'S
let display1 = new Display("ASUS","26-PULG")
console.log(display1.toString())
let display2 = new Display("HP","24-PULG")
console.log(display2.toString())

//> CREATE  FINAL REGISTER USING [MOUSE; KEYBOARD AND DISPLAY] <<
let computer1 = new Computer("HP-775",display1,mouse1,keyboard1)
console.log(computer1.toString())
let computer2 = new Computer("HP-875",display2,mouse2,keyboard2)
console.log(computer1.toString())


//* RESULT FINAL PROYECT 

//> CREATE OBJET TYPE ORDER
let order1 = new Orders()
order1.addComputer(computer1)
order1.addComputer(computer2)
console.log(order1.showOrder())