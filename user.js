class UserManager {
    #users = [];
    create(data) {
        const user = {
            id: this.#users.length === 0 ? 1 : this.#users[this.#users.length - 1].id + 1,
            name: data.name,
            photo: data.photo,
            email: data.email
        };
        this.#users.push(user);
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
    email: "alejandro.perez@example.com"
});
userManager.create({
    name: "Federico Suarez",
    photo: "Federico.jpg",
    email: "federico_suarez@example.com"
});
userManager.create({
    name: "Ana De Luca",
    photo: "Ana.jpg",
    email: "ana_deluca@example.com"
});
userManager.create({
    name: "Maria Sosa",
    photo: "Maria.jpg",
    email: "maria-sosa@gmail.com"
});

console.log("Users:", userManager.read());
console.log("User with id 2:", userManager.readOne(2));
