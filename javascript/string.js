const name = "Aniket"
const post = 50

// if i have to concatenate two strings then i will try this 
//console.log(name + " " + post); // but this is very wrong idea

// instead use this 
console.log(`my name is ${name} and my post is ${post}`); // this is best method 

// another way to declare string 
const another = new String("Aniket")
//console.log(another[0]); // same as c++ ( indexing )

console.log(another.substring(0,4)); // slicing of string like python 


const newstring = "    AniketDubey%20      " // too many trialing spaces before and after

console.log(newstring.replace("%20" , "-"));

console.log(newstring.trim()); // triming those extra spaces

const experiment = "Aniket-Dubey-0124"

console.log(experiment.split("-"));





