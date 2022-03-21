const button = document.getElementById('submit')
let totalNumber = document.getElementById('number')

button.addEventListener('click', function(event){
    event.preventDefault()
    let input = document.getElementsByClassName('input')
    let total = 0
        for(i=0;i<input.length;i++){
        total += parseInt(input[i].value)
        totalNumber.textContent = total + ' coins' 
        }
   
})