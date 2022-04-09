
const form = document.nameForm1

axiosGet()

//submit button
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let newApi = {
        title: form.input1.value,
        description: form.input2.value,
        price: form.input3.value,
        imgUrl: form.input4.value,
        
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
            const newPic = document.createElement("img")
            const newInput = document.createElement("input")
            const container = document.getElementById("container")
            const deleteButton = document.createElement("input")
            const {description,title,price,imgUrl} = newData.data[i] 
            let ivar = i
        //checkbox stuff
            newInput.setAttribute("type", "checkbox")
            if(responce.data[i].completed === true){
                newli.setAttribute("style", "text-decoration: line-through")
                newInput.checked  = true
            }
            newInput.addEventListener("click", ()=>{
                axios.put(`https://api.vschool.io/nicholasBielecki/todo/${newData.data[ivar]._id}`, {completed: !newData.data[ivar].completed})
                .then(axiosGet())
                .catch(error=>console.log(error))
            })
        //delete stuff
            deleteButton.setAttribute("type", "button")
            deleteButton.value = "delete"
            deleteButton.addEventListener("click", ()=>{
                axios.delete(`https://api.vschool.io/nicholasBielecki/todo/${newData.data[ivar]._id}`)
                .then(axiosGet())
                .catch(error=>console.log(error))
            })  
        

        //text and image content   
                newli.textContent= `Title: ${title} Description: ${description} Price: ${price} Url: ${imgUrl}`
                newPic.src = `${newData.data[ivar].imgUrl}`
                newPic.setAttribute("class", "imageClass")
                
        //append
            container.appendChild(newli)
            newli.appendChild(newInput)
            newli.appendChild(deleteButton)
            newli.appendChild(editButton)
            newli.appendChild(newPic)

        
        
             
    }})
    .catch(error => console.log(error))
}



