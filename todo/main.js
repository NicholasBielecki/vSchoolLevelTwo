
let newData = ""
let counter = 2
const form = document.nameForm1
const mainDiv = document.getElementById("mainDiv")
const newInput = document.createElement("input")
const newDiv = document.createElement("div")

axiosGet()

//submit button
form.addEventListener("submit", (event) => {
    event.preventDefault()
    counter ++

    let newApi = {
        title: counter,
        description: form.input1.value
    }

    clear()
    form.input1.value = ""

    axios.post("https://api.vschool.io/nicholasBielecki/todo", newApi)
    .then(() => axiosGet())
    .catch(error => console.log(error))
})

//clear and delete
function clear (){
    while(mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.firstChild)
    }
}



//axios stuff
function axiosGet(){
    axios.get("https://api.vschool.io/nicholasBielecki/todo")
    .then(responce => {newData = responce

    for(i=0;i<newData.data.length; i++){
        mainDiv.append(newDiv.textContent = newData.data[i].description)
        mainDiv.append(newInput)
        newInput.setAttribute('type', 'checkbox')
        mainDiv.append(document.createElement("br"))
        
       
        
    }})
    .catch(error => console.log(error))
}

