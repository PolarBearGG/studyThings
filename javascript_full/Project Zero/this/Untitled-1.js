class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;  
    }
    hello() {
        console.log(`Hello ${this.name}` );
    }
    exit() {
        console.log(`User ${this.name} gone`);
    }
   
}
let ivan = new User('Ivan', 25);
let alex = new User('Alex', 25);
ivan.exit();