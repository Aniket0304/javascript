const newarr = [1,2,3,4,5]
// baaki ke topic jaise indexing or baaki sab c++ ke jaise hi hai 

const news2 = newarr.slice(1,3) // slice me wo bas print karata hai na ki change karta hai 
console.log("B" , news2);
console.log(newarr);

const news1 = newarr.splice(1,3) // splice wo array me se utne element nikal ke hi print karata hai original array me change karke
console.log('A' , news1)
console.log(newarr);


