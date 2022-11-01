//! Create class Product

class Product {

    static countProduct = 0;

    constructor(nameProduct, priceProduct){
        this._idProduct = ++Product.countProduct;
        this._nameProduct = nameProduct;
        this._priceProduct = Number(priceProduct);
    }

    get idProduct(){
        return this._idProduct;
    }

    get nameProduct(){
        return this._nameProduct;
    }
    set nameProduct(newName){
        this._nameProduct = newName;
    }

    get priceProduct(){
        return this._priceProduct;
    }
    set priceProduct(newPrice){
        this._priceProduct = newPrice;
    }

    toString(){
        return `ID=${this._idProduct}, NAME=${this._nameProduct}, PRICE=${this._priceProduct}`
    }
}


class Order {
    static countOrder = 0;

    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        this._idOrder = ++Order.countOrder;
        this._products = [];
        this._countProductAdd = 0;
    }

    get idOrder(){
        return this._idOrder;
    }

    addProduct(productAddToCar){
        //console.log(productAddToCar)
        //console.log(this._products.length)
        if (this._products.length <= 4){

            this._products.push(productAddToCar);  

        } else {
            return 'MAX PRODUCT IN CAR'
        }
        
    }

    totalOrder() {

        let total = 0
        for (let product of this._products) {
            total += product._priceProduct
        }
        return total

    }

    showOrder(){
        let productsOrden = ''
        for (let product of this._products) {
            productsOrden += '\n' + product.toString() + ' '
        }

        return `ORDER=${this._idOrder}, PRODUCTS IN CAR (${productsOrden}),\nTOTAL PRODUCTS = (${this._products.length}) \nWITH TOTAL=${this.totalOrder()} $,  `
    }

}


//! CREATE TWO PRODUCTS -> Aceite & Pollo
let product1 = new Product('aceite', 2000)
//console.log(product1)
//console.log(product1.toString())

let product2 = new Product('pollo', 2000)
// console.log(product2)
// console.log(product2.toString())

let product3 = new Product('arroz', 2000)
// console.log(product3)
// console.log(product3.toString())

let product4 = new Product('pescado', 2000)
// console.log(product3)
// console.log(product3.toString())

let product5 = new Product('pan', 2000)
// console.log(product3)
// console.log(product3.toString())

let product6 = new Product('carne', 2000)
// console.log(product3)
// console.log(product3.toString())


//! ADD TWO PRODUCTS IN ORDER
let order1 = new Order()
order1.addProduct(product1)
order1.addProduct(product2)
order1.addProduct(product3)
order1.addProduct(product4)
order1.addProduct(product5)
order1.addProduct(product6)

//console.log(order1.idOrder)
//console.log(order1.totalOrder())
console.log(order1.showOrder())
