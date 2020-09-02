"use strict";
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        // try to console this.name too
        console.log("User Created: ", name);
    }
    register() {
        console.log(this.name + " is now registered");
    }
    payInvoice() {
        console.log(this.name + " paid invoice.");
    }
}
//inherting user class
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice;
    }
}
let Nujood = new User("Nujood Kadhem", "hfdkjdk@gmail.com", 50);
Nujood.register();
// this can't be reached out of its class if it was private
console.log(Nujood.age);
let Mike = new Member(1, "Mike sh3ban", " jsdkjds@gmail.com", 90);
Mike.payInvoice();
