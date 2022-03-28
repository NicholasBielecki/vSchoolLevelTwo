// const counter = document.getElementById('counter')
// let clickNumber =  localStorage.getItem("savedClicks")

// counter.textContent = clickNumber

// function myFunc (){
//     console.log(clickNumber)
//     clickNumber ++ 
//     counter.textContent = clickNumber
//      localStorage.setItem("savedClicks", clickNumber)
// }

// document.onclick = myFunc

let isRunning = true

function stop (){
  isRunning = false
}

setTimeout(stop,3000)

  

document.addEventListener('click', event => {
  event.preventDefault()
    if(isRunning === true){
      const counter = document.getElementById('counter')
      let clickNumber =  localStorage.getItem("savedClicks")
      counter.textContent = clickNumber

                  function myFunc (){
                console.log(clickNumber)
                clickNumber ++ 
                counter.textContent = clickNumber
                localStorage.setItem("savedClicks", clickNumber)
            }
                    myFunc()
    }

})