/* Switch stament syntax

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

//EXAMPLE 1
const month = 4;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    default:
        console.log("not a month");        
        break;
}

//EXAMPLE 2
const months = "march";
switch (months) {
    case "jan":
        console.log("Jan");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("Mar");
        break;
    default:
        console.log("not a month");        
        break;
}