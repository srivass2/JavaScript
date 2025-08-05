class User {
    constructor (username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is: ${this.username}`);        
    }
    static createId(){   // making a method as static makes it non accessable even if it is extended.
        return `123`
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course was added by: ${this.username}`);        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123abc");
const masalaChai = new User("masalaChai");

console.log(chai.addCourse());
console.log(chai.logMe());

console.log(chai.createId()); // accessing static method
console.log(masalaChai.createId()); // accessing static method




