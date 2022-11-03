//* CREATE CLASS

//! CLASS EMPLOYEE
class Employee {

    static countEmployee = 0;

    constructor(name,salary){
        this._idEmployee = ++Employee.countEmployee;
        this._name = name;
        this._salary = salary;
    }
    get idEmployee(){
        return this._idEmployee;
    }

    details(){
        return `id_employed=${this._idEmployee}, Name=${this._name}, Salary:${this._salary}`
    }
};

//! CLASS MANAGER
class Manager extends Employee {

    static countManager = 0;

    constructor(name,salary,departament){
        super(name,salary)
        this._idManager = ++Manager.countManager;
        this._departament = departament;
    }

    get idManager(){
        return this._idManager;
    }

    details(){
        return `${super.details()},\nid_manager=${this._idManager} Departament:${this._departament}`
    }

    
};

//* CREATE ALL OBJETS

//> CREATE OBJECT EMPLOYEE
let employee1 = new Employee("Jesus", "800")
//console.log(employee1.details())
//> CREATE OBJECT MANAGER
let manager1 = new Manager("Anmy", "1000","IT")
//console.log(manager1.details())


//! >>EXAMPLE POLIMORFISMO<<
function printer(type) {
    return type.details()
}
console.log(printer(employee1))
console.log(printer(employee1))


//? OR
let printer1 = (type) => {
    return (type instanceof Manager) ? `Objet is type Manager: [${type.details()}]` : `objet isn't type Manager: [${type.details()}]`
};

console.log(printer1(employee1))
console.log(printer1(manager1))