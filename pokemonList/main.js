const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      const data = JSON.parse (xhr.responseText)

        // console.log(data.objects[0].pokemon)
        

      work(data.objects[0].pokemon)
     
     

  
    }
}

function work (param1){
    for(i=0;i<param1.length;i++){
        const thing = document.createElement("h3").textContent = param1[i].name
        const space = document.createElement("br")

    document.body.append(thing)
    document.body.append(space)
    }
}


      