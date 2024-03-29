// ### **1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.**

// ```
// function fiveAndGreaterOnly(arr) {
//   // your code here
// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]



                                            // //MY CODE!!!!!
                                            // let array = [1,2,3,4,5,6,7,8,9]
                                            // console.log(array.filter(num => num>=5))



// ### **2) Given an array of numbers, return a new array that only includes the even numbers.**

// ```
// function evensOnly(arr) {
//   // your code here
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]



                                                // //MY CODE!!!!
                                                // const array = [1,2,3,4,5,6,7,8,9]
                                                // console.log(array.filter(num => num % 2 === 0))



// ### **3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length**

// ```
// function fiveCharactersOrFewerOnly(arr) {
//   // your code here
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


                                                        // //MY CODE
                                                        // const array = ["This is long", "short", "This is VERY long", "tiny", "micro"]
                                                        // console.log(array.filter(num => num.length <= 5))



// ### **4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.**

// ```
// function peopleWhoBelongToTheIlluminati(arr){
//   // your code here
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
    // { name: "Angelina Jolie", member: true },
    // { name: "Eric Jones", member: false },
    // { name: "Paris Hilton", member: true },
    // { name: "Kayne West", member: false },
    // { name: "Bob Ziroll", member: true }

// ]));
// // =>
// //[ { name: 'Angelina Jolie', member: true },
// //  { name: 'Paris Hilton', member: true },
// //  { name: 'Bob Ziroll', member: true } ]



                                                //MY CODE!!!!
//                                                 const array = [ { name: "Angelina Jolie", member: true },
                                                // { name: "Eric Jones", member: false },
                                                // { name: "Paris Hilton", member: true },
                                                // { name: "Kayne West", member: false },
                                                // { name: "Bob Ziroll", member: true }]

                                                // console.log(array.filter(name => name.member === true))


// function ofAge(arr){
//   // your code here
// }
// // test
// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]));
// // =>
// //[ { name: 'Angelina Jolie', age: 80 },
// //  { name: 'Bob Ziroll', age: 100 } ]

                                       
                                            const people = [{ name: "Angelina Jolie", age: 80 },
                                                { name: "Eric Jones", age: 2 },
                                                { name: "Paris Hilton", age: 5 },
                                                { name: "Kayne West", age: 16 },
                                                { name: "Bob Ziroll", age: 100 }]

                                                console.log(people.filter(person => person.age >= 18))