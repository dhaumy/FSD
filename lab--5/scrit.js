// const student={
//     name:'dhaumy',
//     age:19,
//     batch:"Lecun",
// }


// console.log(student)

// // in this the latest value of the duplicate key will be there
// const student1={
//     name:'dhaumy',
//     name:'Naman',
//     age:19,
//     batch:"Lecun",
// }

// console.log(student1)



//-----Array-----\\


const students=['naman','aadi','dhaumy','kris']
console.log(students)
console.log(students[1])


// students[20]='ansh'
// console.log(students)

//---push--add an element at the end of array--\\
console.log(students)
students.push('yashraj')
console.log(students)

// //--this will put this whole list as a single element--\\
// students.push(['nitish','priya','aryan'])
// console.log(students)

students.push('nitish','priya','aryan')
console.log(students)


//--pop--remove the element from the end--\\

console.log(students.pop())
console.log(students)

//--shift--remove the element from the start--\\

console.log(students.shift())
console.log(students)



//--unshift--adds the element from the start--\\

students.unshift('naman')
console.log(students)



students.unshift('mehak', 'dhairya','samridhi')
console.log(students)


//--printing last element
const len =students.length
console.log(students[len-1])

//revers indixing does not work in js--\\

// delete students[6]
// console.log(students)


//----splice----\\

console.log(students)
//--start from the start index and deletes "delete-count" element--\\
students.splice(2,1)

console.log(students)


//--start from the start index and deletes "delete-all" element--\\
students.splice(5)

console.log(students)


//--deletes specified element and adds new element--\\
students.splice(2,2,'amandeep')

console.log(students)


//--adds new elements--\\
students.splice(2,0,'deep')

console.log(students)