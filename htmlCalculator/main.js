let addList = document.getElementById("addList")
let addForm = document.addForm


addForm.addEventListener("submit", function(event){
    event.preventDefault()
    let newItem = document.createElement("li")    
    newItem.textContent = parseInt(addForm.firstAdd.value)  + parseInt(addForm.secondAdd.value)
    addList.append(newItem)
    
})

let subList = document.getElementById('subList')
let subForm = document.subForm

subForm.addEventListener("submit", function(event){
    event.preventDefault()
    let newItem = document.createElement("li")    
    newItem.textContent = parseInt(subForm.firstSub.value)  - parseInt(subForm.secondSub.value)
    subList.append(newItem)
})

let mulList = document.getElementById("mulList")
let mulForm = document.mulForm

mulForm.addEventListener("submit", function(event){
    event.preventDefault()
    let newItem = document.createElement("li")    
    newItem.textContent = parseInt(mulForm.firstMul.value)  * parseInt(mulForm.secondMul.value)
    mulList.append(newItem)
})