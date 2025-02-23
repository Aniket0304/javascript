if (2 == "2"){
    console.log("yuppp")
}
// this will considered as true because it will only check the value not the type of the value
// so to check the type too use "===" which is called strict equality operator
if (2 === "2"){
    console.log(" Not yuppp")
}

// Ternianry operator
const age = 18;
console.log(age >= 18 ? "You can vote" : "You can't vote");
