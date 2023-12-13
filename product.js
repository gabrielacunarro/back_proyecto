class ProductManager {
    static #products = [];

    #verifyRequiredProps(data) {
        const requiredProps = ["title", "photo", "price", "stock"];
        const missingProps = requiredProps.filter(prop => !(prop in data));
        return missingProps;
    }

    #generateProductId() {
        return ProductManager.#products.length === 0 ? 1 : ProductManager.#products[ProductManager.#products.length - 1].id + 1;
    }

    #generateWarningMessage(missingProps, title) {
        const missingMessages = missingProps.map(prop => `The product has not been created as the "${prop}" property is missing for "${title}".`);
        return `Warning: ${missingMessages.join(". ")}`;
    }

    create(data) {
        const missingProps = this.#verifyRequiredProps(data);

        if (missingProps.length > 0) {
            console.log(this.#generateWarningMessage(missingProps, data.title));
        } else {
            const id = this.#generateProductId();

            const product = {
                id,
                title: data.title,
                photo: data.photo,
                price: data.price,
                stock: data.stock
            };

            ProductManager.#products.push(product);
        }
    }

    read() {
        return ProductManager.#products;
    }

    readOne(id) {
        return ProductManager.#products.find(product => product.id === Number(id));
    }
}

const productManager = new ProductManager();
productManager.create({
    title: "N°5 CHANEL",
    photo: "assets/chaneln5.png",
    price: 118000,
    stock: 250
});

productManager.create({
    title: "Blue Seduction",
    photo: "assets/BlueSeduction.png",
    price: 18000,
    stock: 130
});

productManager.create({
    title: "Pure Poison EDP",
    photo: "assets/PurePoison.png",
    price: 18000,
    stock: 180
});

productManager.create({
    title: "Invictus EDT",
    photo: "assets/Invictus.png",
    price: 70000,
    stock: 110
});

console.log("Products:", productManager.read());
console.log("Product with ID 1", productManager.readOne(1));