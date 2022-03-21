// ### **1) Make an array of numbers that are doubles of the first array**
// ```
// function doubleNumbers(arr){
//   // your code here
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// ```

                                //MY CODE!!!!!!!
                                // let arry = [4,6,8]
                                // console.log(arry.map (param1 => param1 * param1)) 
      
                                

                            
// ### **2) Take an array of numbers and make them strings**

// ```
// function stringItUp(arr){
//   // your code here
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]



                                    //MY CODE!!!
                                    // let arry = [5,10,15]
                                    // console.log(arry.map( param1 => param1.toString()))














// ### **3) Capitalize the first letter of each name and make the rest of the characters lowercase**

// ```
// function capitalizeNames(arr){
//   // your code here
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// // Output:
// // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// ```

// ---

                                        //MY CODE!!!!!!!

                            
                                    // let arry = ["john","alex","aRIel"]

                                    // console.log(arry.map(param1 => param1[0].toUpperCase()+ param1.substring(1).toLowerCase()))






// ### **4) Make an array of strings of the names**

// ```
// function namesOnly(arr){
//   // your code here
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// ```

// ---
                                //MY CODE!!!!!!!
                                        // let names =  [
                                        //     {name: "fred", age: 40},
                                        //     {name: "mike", age: 20},
                                        //     {name: "Taylor", age: 25}
                                        // ]
                                        // console.log(names.map(param1 => param1.name))


// ### **5) Make an array of strings of the names saying whether or not they can go to The Matrix**

// ```
// function makeStrings(arr){
//   // your code here
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// // ["Angelina Jolie can go to The Matrix",
// // "Eric Jones is under age!!",
// // "Paris Hilton is under age!!",
// // "Kayne West is under age!!",
// // "Bob Ziroll can go to The Matrix"]

// ```

// ---

                                        //MY CODE!!!!!!

                                            // let array = [
                                            //     {
                                            //         name: "Angelina Jolie",
                                            //         age: 80
                                            //     },
                                            //     {
                                            //         name: "Eric Jones",
                                            //         age: 2
                                            //     },
                                            //     {
                                            //         name: "Paris Hilton",
                                            //         age: 5
                                            //     },
                                            //     {
                                            //         name: "Kayne West",
                                            //         age: 16
                                            //     },
                                            //     {
                                            //         name: "Bob Ziroll",
                                            //         age: 100
                                            //     }
                                            // ]

                                            // console.log(array.map(function test (param1){
                                            //     if(param1.age > 18){
                                            //         return param1.name + " is old enough"
                                            //     }
                                            //     else{
                                            //         return param1.name + " is not old enough"
                                            //     }
                                            //     }
                                            //  ) )
// ### **6) Make an array of the names in `h1`s, and the ages in `h2`s**

let array = [
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
    ]

let why = array.map(function(param1){
     let first = document.createElement("h1").textContent = param1.name
     let second = document.createElement("h4").textContent = param1.age
     document.body.append(first)
     document.body.append(second)
})