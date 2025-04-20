const user = {
    username: "shashank",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`)// this keyword is used to donote that the username variable's scope is of this block i.e it refers to current context.
    }

}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage(); // the value of username got updated because this keyword only refers to that value which the variable hold in that block scope.
