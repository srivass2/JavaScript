
/*  Javascript Execution Context

{} --->  Global EC  <-- this

Stpes in JS Execution Context are:
1) Global Execution Context
2) Function Execution Context
3) Eval Execution Context (optional to read)

 JS code gets executed in 2 phases:

{} code first goes to  -----> Memory Creation Phase(Memory is allocated to the variable and declarations. No operation is performed here)
    then enters in to  -----> Execution Phase 

                              Example to understand execution:

let val1 = 10
let val2 = 5
function addNum(num1 , num2) {    
    let resultNum = num1 + num2 ;
    return resultNum;             
}
const result1 = addNum(val1, val2);
const result2 = addNum(4, 5);    

Step 1: Global Execution Context  <---this   (any code that is executed first it runs under global environment or global execution. This is a mandatory step which will happen no matter what)

 a) Memory Phase under GEC
    In this phase all the variable will be collected and kept in the memory. So based on above code:
      val1 will be allocated memory as UNDEFINED.
      val2 will also be allocated memory as UNDEFINED.
      addNum will be allocated as DEFINITION(since this is just a function which is declared in line 19 .i.e. entire function block{} is allocated as definition)
      result1 will be allocated memory as UNDEFINED.
      result2 will also be allocated memory as UNDEFINED.

 b) Execution Phase under GEC
    In this phase all the variable will be assigned value and operations will be performed.
      val1  <----- 10
      val2  <----- 5
      addNum <---- Here nothing will hapen since its just a definition. so line 19 to 22 no     
                  action.
      result1 <--- this calls the addNum function and here the operation will be performed. Thus this step will open Function Execution Context(this will further have two phases Memory phase and Execution Phase).    
          i) Memory Phase under FEC
             Here point to note is that we should look at the entire function while looking for variables. and not just the function call variable(since it is already got memory).
             num1  <--- UNDEFINED
             num2  <--- UNDEFINED
             resultNum <--- UNDEFINED

          ii) Execution Phase under FEC
              num1    <---  10
              num2    <---  5
              resultNum  <--- 15
              return 15  and this will send the value BACK to result1 in GEC.
    ++++++ Note, since the work of above FEC is finished so this will be deleted ++++++             

      result2 <--- this calls the addNum function again and here the operation will be performed. Thus this step will again open new Function Execution Context(this will further have two phases Memory phase and Execution Phase).
          i) Memory Phase
               num1    <--- UNDEFINED
               num2    <--- UNDEFINED
               resultNum  <--- UNDEFINED

         ii) Execution Phase
               num1    <--- 4
               num2    <--- 5
               resultNum  <--- 9
               return 9    and this will send the value BACK to result2 in GEC
               Again this FEC will be deleted from the STACK after it returned the value
               
               
++++++++++++++ Javascript CALL STACK (LIFO) based on above Execution Context ++++++++++++++++


l         l                      l          l                               l          l
l         l   addNum(val1,val2)  l          l  FEC return 15 to GEC         l          l
l         l   -----------------> l__________l --------------------------->  l          l
l_________l                      l___FEC____l  FEC work finish, poped out   l__________l
l___GEC___l                      l___GEC____l                               l___GEC____l 


l         l                      l          l                               l          l
l         l   addNum(4,5)        l          l  FEC return 9 to GEC          l          l
l         l   -----------------> l__________l --------------------------->  l          l
l_________l                      l___FEC____l  FEC work finish, poped out   l__________l
l___GEC___l                      l___GEC____l                               l___GEC____l 

*/