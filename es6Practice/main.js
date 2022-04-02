// Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

// John is the pet owner, and his name should be stored differently than the other names.

// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         var name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


                                            //NEW CODE!!!


                                            // const name = "John"
                                            // const age = 101

                                            // function runForLoop(pets) {
                                            //     let petObjects = []
                                            //     for (let i = 0; i < pets.length; i++) {
                                            //         let pet = { type: pets[i] }
                                            //         let name;
                                            //         if (pets[i] === "cat") {
                                            //             name = "fluffy"
                                            //         } else {
                                            //             name = "spot"
                                            //         }
                                            //         console.log("pet name: ", name)
                                            //         pet.name = name
                                            //         petObjects.push(pet)
                                            //     }
                                            //     console.log("man name: ", name)
                                            //     return petObjects
                                            // }

                                            // runForLoop(["cat", "dog"])




// Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

// 

                                            //MY CODE!!!
                                                // const carrots = ["bright orange", "ripe", "rotten"]

                                                // console.log(carrots.map(arr =>  
                                                //   ({type: "carrot", name: arr})  
                                                // ))

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }



//Re-write this `.filter()` ’s callback function using an arrow function:



const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
                                            //MY CODE!!!
                                                // console.log(people.filter(arr => arr.friendly === true))

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }



// Re-write the following functions to be arrow functions:

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }


                                                    //MY CODE!!!
                                                            // myFunc = (a,b) => a+b
                                                            // console.log( myFunc(1,4))

                                                            // otherFunc = (a,b) => a*b
                                                            // console.log(otherFunc(2,4))     
                                                            
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following: Hi Kat Stark, how does it feel to be 40?


// const names = (firsName = "Jane" , lastName = "Doe", age = 100) => `Hi ${firsName} ${lastName} how does it feel to be ${age}`




                                        //MY CODE!!!
                                                // console.log(names("tae", "james",55))
                                                // console.log(names())


// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }
 

                                                //MY CODE!!!
                                                    // console.log(animals.filter(arr => arr.type === "dog"))




//Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.


                        //MY CODE!!!
                                // const hello = (name, location) => `Hello ${name}! 
                                // Welcome to ${location}
                                // I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`


                                // console.log(hello("janice", "Hawaii"))