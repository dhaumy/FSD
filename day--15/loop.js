// //print hello 10 times using while loop\\

// // let i=0
// // while(i<10){
// //     console.log('hello')
// //     i++
// // }

// // let j=0
// // do{
// //   console.log('hello world')
// //   j++
// // }while(j<10)







// const POLICAD_QUESTION_DATA = {
//   "products": [
//     {
//       "id": 26,
//       "title": "Green Chili Pepper",
//       "price": 0.99
//     },
//     {
//       "id": 27,
//       "title": "Honey Jar",
//       "price": 6.99
//     },
//     {
//       "id": 28,
//       "title": "Ice Cream",
//       "price": 5.49
//     },
//     {
//       "id": 29,
//       "title": "Juice",
//       "price": 3.99
//     },
//     {
//       "id": 30,
//       "title": "Kiwi",
//       "price": 2.49
//     },
//     {
//       "id": 31,
//       "title": "Lemon",
//       "price": 0.79
//     },
//     {
//       "id": 32,
//       "title": "Milk",
//       "price": 3.49
//     },
//     {
//       "id": 33,
//       "title": "Mulberry",
//       "price": 4.99
//     },
//     {
//       "id": 34,
//       "title": "Nescafe Coffee",
//       "price": 7.99
//     },
//     {
//       "id": 35,
//       "title": "Potatoes",
//       "price": 2.29
//     }
//   ],
//   "total": 194,
//   "skip": 25,
//   "limit": 10
// };

// const data = POLICAD_QUESTION_DATA;
// console.log('hello')
// const items=data.products
// let i=0
// let sum=0
// let mx=0
// let ml=''
// const n=items.length
// while (i<n){
//   console.log(items[i]['title'] +':'+Math.round(items[i]['price']*100))


//   sum=sum+items[i]['price']*100


//   if(items[i].price>mx){
//     mx=items[i].price
//     ml=items[i].title
//   }
//   i++
// }
// console.log('Rs.',Math.round(sum))
// console.log(ml+':'+mx*100)

//-----------------------------------------------------------------------\\


// const student={name:'ajay',age:20,rollnumber:"2616400221"}
// const{name,age}=student
// console.log(name,age)


// const{rollnumber,country}=student
// console.log(rollnumber,country)



// const s1 = { name: "Ajay" };
// const s2 = { name: "Ajay" };
// const s3 = s1;
// console.log(s1 == s2);
// console.log(s1 == s3);
// console.log(s1 === s2);
// console.log(s1 === s3);