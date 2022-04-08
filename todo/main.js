let counter = 2
const form = document.nameForm1

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

//clear 
function clear (){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

//axios get
function axiosGet(){
    clear()
    axios.get("https://api.vschool.io/nicholasBielecki/todo")
    .then(responce => {
        let newData = responce
        console.log(newData)
    for(i=0;i<responce.data.length; i++){
        //consts and lets
        const newli = document.createElement("li")
        const newInput = document.createElement("input")
        const container = document.getElementById("container")
        const deleteButton = document.createElement("input")
        let ivar = i
        //checkbox stuff
        newInput.setAttribute("type", "button")
        newInput.value = "completed"
        newInput.addEventListener("click", ()=>{
            axios.put(`https://api.vschool.io/nicholasBielecki/todo/${newData.data[ivar]._id}`, {completed: !newData.data[ivar].completed})
            .then(axiosGet())
            .catch(error=>error)
        })
        //delete stuff
        deleteButton.setAttribute("type", "button")
        deleteButton.value = "delete"
        deleteButton.addEventListener("click", ()=>{
            axios.delete(`https://api.vschool.io/nicholasBielecki/todo/${newData.data[ivar]._id}`)
            .then(axiosGet)
            .catch(error=>console.log(error))
        })
        

if(responce.data[i].completed === false){
    newli.setAttribute("style", "text-decoration: line-through")}

        newli.textContent= responce.data[i].description
        //append
        container.appendChild(newli)
        newli.appendChild(newInput)
        newli.appendChild(deleteButton)

        
        
             
    }})
    .catch(error => console.log(error))
}

