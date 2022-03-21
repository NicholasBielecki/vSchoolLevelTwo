const mainForm = document.getElementById("mainForm")
let search= document.getElementsByClassName("diet")
function test(){
    let dietary = []

    for(i=0;i<search.length;i++){
        if(search[i].checked){
            dietary.push(search[i].value)
        }
        
    }
    
    if(dietary.length <= 0){
        dietary.push("this person has no diet restrictions")
    }
    return dietary
}

mainForm.addEventListener("submit", function(event){
    event.preventDefault()
        alert("Name:" + mainForm.firstName.value + " " + mainForm.lastName.value + "\n" + "Age:" + mainForm.age.value + "\n" + "Gender:" + mainForm.gender.value + "\n" + "Location:" + mainForm.location.value + "\n" + "Diet:" + test())
    
})

