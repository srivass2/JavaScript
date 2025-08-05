// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){              // created own prototype at object level or parent level so it will be there in all the child.
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){ // this prototype is created at child level so it can only be accessed at that level only
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh()
