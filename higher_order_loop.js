// for of loop 
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
    // console.log(element);
}
const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
for (const [key , values] of map) {
    // console.log(key , values);
}



// for in loop ...... if we want to access element in an object we can not use for of loop so this loop is useful for that
const heroes = {
    ironman: 'suit',
    spiderman: 'web',
    superman: 'cape'
}
for (const key  in heroes) {
    // console.log(`for given key ${key} the value is ${heroes[key]}`);
}



// ab ek simple travel karne ke liye ek bhut advance loop hai jise ham for each loop khte hai 
arr.forEach((item) => {
    // console.log(item);
})

function printing(item){
    // console.log(item);
}
arr.forEach(printing); // yaha pe sirf reference lenge function ka naaki call karenge

// isme index aur array karke bhi parameter hai 
arr.forEach((item, index, arr) => {
    console.log(item , index , arr);
}   )
