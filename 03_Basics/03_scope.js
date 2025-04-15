let a = 10; // global scope
const b = 20;  // global scope

if(true) {
    let c = 100;   // Local scope
    const d = 200;  // local scope
    let a = 300;
    console.log(`Inner Scope a: ${a}`)
}

console.log(a);
console.log(b);
//console.log(c); // throws error at this which is correct since (c) has local scope within if block
//console.log(d); // throws error at this which is correct since (d) has local scope within if block

//+++ INTERESTING FACT  global scope in browser console is different from global scope used in node(code)
