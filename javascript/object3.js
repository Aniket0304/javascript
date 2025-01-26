const course = {
    coursename : "js in hindi", 
    price : 99, 
    courseinstructor : "Hitesh"
}

// console.log(course.courseinstructor) bhut lamba hai na ye likhna issi liye iska ek alternative hai jisko de constructor khte hai

const {courseinstructor} = course

// kuch aur bhi alag tareeke hai 

const {courseinstructor : instructor} = course // isse kuch bhi naam de skte ho ":" ye wala symbol daal ke 


console.log(courseinstructor)
console.log(instructor)

