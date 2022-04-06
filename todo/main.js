axios.get("https://api.vschool.io/nicholasBielecki/todo")
.then(responce => newData = responce)
.catch(error => console.log(`${error} \n you messed up bro`))


let newData = ""
let counter = 2

const form = document.nameForm1

form.addEventListener("submit", (event) => {
console.log(form.input1.value)
    event.preventDefault()
    counter ++

    let newApi = {
        title: counter,
        description: form.input1.value
    }
    

//todo api stuff
axios.post("https://api.vschool.io/nicholasBielecki/todo", newApi)

axios.get("https://api.vschool.io/nicholasBielecki/todo")
.then(responce => newData = responce)
.catch(error => console.log(`${error} \n you messed up bro`))


//for loop and update function
    for(i=0; i<newData.data.length; i++){
        console.log(i)
        console.log(newData)
        update(newData.data[i].description)
    }
    

})





function update (param1){
    let newDiv = document.createElement("div").textContent = param1
    document.body.append(newDiv)
}