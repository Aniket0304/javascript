const superheroes = ["Superman" , "Batman", "Flash"]
const marvel_heroes = ["Ironman" , "thor" , "captain America"]

// if we have to merge the arrays we cannot just use push command so there is this new method is 

const newheroes = superheroes.concat(marvel_heroes)
console.log(newheroes);

const another_array = [1,2,3,4,[6,7],5 ,8 ,[3 ,4 ,[3]]]
// there is array in array in array so we will do one thing that we can do is that we can put all the elements in single array only 
// so for this
console.log(another_array.flat(Infinity));


// one more thing we can do in heroes section is that either concating them we can use spread function too 

const real_heroes = [...superheroes, ...marvel_heroes] //these three dots represents spread function
console.log(real_heroes);

console.log(Array.isArray("Aniket"))
console.log(Array.from("Aniket"))
// intresting case 
console.log(Array.from({name : "Aniket"})); // this gives empty list 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3));


 

