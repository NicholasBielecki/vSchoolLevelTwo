// Use the

// ```
// Rest Operator
// ```

// to help this function return an array of animals, no matter how many animals are passed to it:


                                    //MY CODE!!!


                                        // function collectAnimals(...a) {
                                        //     console.log(a)
                                        // }

                                        // collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
                                        // // ["dog", "cat", "mouse", "jackolope", "platypus"]

                                        // collectAnimals()



//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:



                                                    //MY CODE!!!!

                                                        // function combineFruit(fruit, sweets, vegetables){
                                                        //     return {
                                                        //         fruit,
                                                        //         sweets,
                                                        //         vegetables
                                                        //     }
                                                        // }

                                                        // console.log(combineFruit(["apple", "pear"],
                                                        // ["cake", "pie"],
                                                        // ["carrot"])) 



// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }



// Use destructuring to use the property names as variables. Desructure the object in the parameter:


                                    //MY CODE!!!
                                          // function parseSentence({location} , {duration}){
                                              
                                          //     return `We're going to have a good time in ${location} for ${duration}`
                                          //   }
                                            
                                          //  console.log(parseSentence(
                                          //     {location: "Burly Idaho"},
                                          //     {duration: "two weeks"}
                                          //   )) 


// Use array destructuring to make this code ES6:


                        //MY CODE!!!
                                // const arr = [2,3,4]

                                // function returnFirst(items){
                                //   const [firstItem, secondItem, thirdItem] = items; /*change this line to be es6*/
                                //   return secondItem
                                // }

                                // console.log(returnFirst(arr))


  // Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:



          //MY CODE!!!

                //   const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

                // function returnFavorites(arr){
                //     const [firstFav,secondFav,thirdFav] = arr
                //     return `My top three favorite activities are, ${firstFav} , ${secondFav}, and  ${thirdFav}`
                // }

                // console.log(returnFavorites(favoriteActivities)) 



 // Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.



                                          //My Code!!!

                                                  //  const realAnimals = ["dog", "cat", "mouse"];
                                                  //  const magicalAnimals = ["jackolope"];
                                                  //  const mysteriousAnimals = ["platypus"];


                                                  //                 function combineAnimals(param1,...parm2) {
                                                  //                     console.log(param1.concat(...parm2))
                                                  //                 }

                                                                  

                                                  //                 console.log(combineAnimals(realAnimals,magicalAnimals,mysteriousAnimals))
                                                                  


 //Try to make the following function more ES6y:

//  function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }


                                                  //MY CODE!!!!!

                                                          // function product(...a) {
                                                          //   var numbers = [...a];

                                                          //   return numbers.reduce(function(acc, number) {
                                                          //     console.log(acc)
                                                          //     return acc * number;
                                                          //   }, 1)
                                                          // }
                                                          // product(1,2,3,4,5,6,7)
                                                          // // console.log(product(1,2,3,4,5))



//  Make the following function more ES6y. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }


                                          //MY CODE!!!

                                                // function unshift(array, ...a) {
                                                //   return [...a].concat(array);
                                                // }

                                                // let array = [0]

                                                // console.log( unshift(array,1,2,3,4,5,6))




//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:



// function populatePeople(names){
//   return names.map(function(name){
//       name = name.split(" ");
//       // your code
//       return {
//           firstName: firstName,
//           lastName: lastName
//       }
//   })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// //[
// //  {firstName: "Frank", lastName: "Peterson"},
// //  {firstName: "Suzy", lastName: "Degual"},
// //  {firstName: "Liza", lastName: "Jones"},
// //]


                                                            //MY CODE!!!


                                                                    // function populatePeople(names){
                                                                        
                                                                    //   return names.map(function(name){
                                                                        
                                                                    //     name = name.split(" ")  
                                                                    //       firstName = name[0]
                                                                    //       lastName = name[1]
                                                                    //       return {
                                                                    //           firstName: firstName,
                                                                    //           lastName: lastName
                                                                            
                                                                    //       }
                                                                    //   })
                                                                    // }

                                                                    // console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])) 
                                                                    // //[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

