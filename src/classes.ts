interface UserInterface {
  name: string;
  email: string;
  age: number;
  // register();
  // payInvoice();
}

class User implements UserInterface {
  // private name: string;
  // protected email: string;
  name: string;
  email: string;
  public age: number;

  constructor(name: string, email: string, age: number) {
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
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let Nujood = new User("Nujood Kadhem", "hfdkjdk@gmail.com", 50);

Nujood.register();

// this can't be reached out of its class if it was private
console.log(Nujood.age);

let Mike: User = new Member(1, "Mike sh3ban", " jsdkjds@gmail.com", 90);

Mike.payInvoice();
