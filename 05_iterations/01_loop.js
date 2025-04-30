for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);    
}

for (let j = 0; j <= 10; j++) {
    const element = j;
    if (j == 5) {
        console.log("5 is the best number");        
    }
    console.log(element);    
}

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop: ${j}`);        
    }        
}

const array = ["sam", "tom", "james"];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`array name : ${element}`);    
    
}

for (let index = 1; index <= 20; index++) {    
    if (index === 5) {
        console.log(`Detected 5`);
        break;         
    }
    console.log(`Value of index: ${index}`);
        
}

for (let index = 1; index <= 20; index++) {    
    if (index === 5) {
        console.log(`Detected 5`);
        continue;         
    }
    console.log(`Value of index: ${index}`);
         
}
/* break keyword makes the control comes out of the loop the moment the condition is fulfilled and skips the rest of execution.
WhereAs continue keyword skips the execution for just once when the condition is met but it doesnot come out of loop and allows the rest execution of the code..
*/