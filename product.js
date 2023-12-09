class ProductManager  {
    #products = [];

    create(data) {
        const product = {
            id: this.#products.length === 0 ? 1 : this.#products[this.#products.length - 1].id + 1,
            title: data.title,
            photo: data.photo,
            price: data.price,
            stock: data.stock
        }
        this.#products.push(product);
    }
    read(){
        return this.#products;
    }
    readOne(id){
        return this.#products.find(product => product.id === Number(id));
    }

}

const productManager = new ProductManager ();
productManager.create({
    title: "N°5 CHANEL",
    photo: "agregar foto",
    price: 118000,
    stock: 250
})
productManager.create({
    title: "Blue Seduction",
    photo: "agregar foto",
    price: 18000,
    stock: 130
})
productManager.create({
    title: "Pure Poison EDP",
    photo: "agregar foto",
    price: 18000,
    stock: 180
})
productManager.create({
    title: "Invictus EDT",
    photo: "agregar foto",
    price: 70000,
    stock: 110
})

console.log("Products:", productManager.read());
console.log("Product with id 1:", productManager.readOne(1));