class UserManager {
    #users = [];

    #verifyRequiredProps(data) {
        const requiredProps = ["name", "photo", "email"];
        const missingProps = requiredProps.filter(prop => !(prop in data) || data[prop] === undefined);
        return missingProps;
    }

    #generateUserId() {
        return this.#users.length === 0 ? 1 : this.#users[this.#users.length - 1].id + 1;
    }

    #generateWarningMessage(missingProps) {
        const missingMessages = missingProps.map(prop => `The user has not been created as the "${prop}" property is missing.`);
        return `Warning: ${missingMessages.join(". ")}`;
    }

    create(data) {
        const missingProps = this.#verifyRequiredProps(data);

        if (missingProps.length > 0) {
            console.log(this.#generateWarningMessage(missingProps));
        } else {
            const user = {
                id: this.#generateUserId(),
                name: data.name,
                photo: data.photo,
                email: data.email
            };
            this.#users.push(user);
        }
    }

    read() {
        return this.#users;
    }

    readOne(id) {
        return this.#users.find(user => user.id === Number(id));
    }
}

const userManager = new UserManager();
userManager.create({
    name: "Alejandro Perez",
    photo: "Alejandro.jpg",
    email: "alejandro.perez@gmail.com"
});
userManager.create({
    name: "Federico Suarez",
    photo: "Federico.jpg",
    email: "federico_suarez@gmail.com"
});
userManager.create({
    name: "Ana De Luca",
    photo: "Ana.jpg",
    email: "ana_deluca@gmail.com"
});
userManager.create({
    name: "Maria Sosa",
    photo: "Maria.jpg",
    email: "maria-sosa@gmail.com"
});

console.log("Users:", userManager.read());
console.log("User with id 2:", userManager.readOne(1));
