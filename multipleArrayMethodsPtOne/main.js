var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

//Extra Credit
let plusOne = {
    firstName: "Mike",
    lastName: "Mikea",
    age: 304

}
peopleArray.push(plusOne)
peopleArray.splice(4,1)
//to reverse just switch a,b parameters in sort function.



//Main Assignment

let assignment = peopleArray.filter(param1 => param1.age >= 18).sort(function (a,b){
        if (a.lastName < b.lastName){
                    return -1
                }
                else if (a.lastName === b.lastName){
                    return 0
                }
                else{
                    return 1
                }
    })

 assignment.map(function (a){
        let newwContent = a.firstName + a.lastName + a.age
                document.body.append(document.createElement("li").textContent = newwContent)
                    console.log("<li>" + newwContent.toString() + "</li>")
               

    })

//Extra
let aAndY = []
peopleArray.filter(function(end){
    if(end.lastName.endsWith("y") || end.lastName.endsWith("a") ){
        aAndY.push(end)
    }
})
console.log(aAndY)












