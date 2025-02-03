// Immediate invoked function 
// agar kisi function ko turant invoke karna hai toh iska use karte hai 
// syntax 

(function chai(){
    console.log("Print chai")
})();

// ye syntax hai IIFE ka 
// agar ek hi file me do IIFE chahiye to phle wale ko ";" seperate kar do 

(function aurcode(name){
    console.log(`${name} Print two`)
})("Aniket") // iss tarah se argument pass kar skte hai 

// kaam hai iska global variable se khud ko protect karna