function getAll() {
    document.getElementById('list').innerHTML = ""
    axios.get("https://api.vschool.io/nicholasBielecki/todo/")
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                const h1 = document.createElement('h1')
                const h2 = document.createElement('h3')
                const h3 = document.createElement('h3')
                const h4 = document.createElement('h4')
                //PUT Button
                const check = document.createElement("input");
                check.setAttribute("type", "checkbox");
                //


                // DELETE Button
                const deleteButton = document.createElement('button')
                deleteButton.textContent = "X"
                //

                h1.textContent = "Title: " + response.data[i].title
                h2.textContent = "Description: " + response.data[i].description
                h3.textContent = "Price: " + response.data[i].price
                h4.textContent = "Image Url: " + response.data[i].imgUrl
                // 

                // APPENDING:

                if (response.data[i].completed) {
                    h1.style.textDecoration = 'line-through'
                    check.checked = true
                } else {
                    h1.style.textDecoration = 'none'
                    check.checked = false
                }


                // PUT FUNCTION
                document.getElementById('list').appendChild(check)
                check.addEventListener("click", function (event) {
                    axios.put(`https://api.vschool.io/nicholasBielecki/todo/${response.data[i]._id}`, { completed: !response.data[i].completed })
                        .then(response => getAll())
                        .catch(error => console.log(error))
                })
                // FINISH PUT

                document.getElementById('list').appendChild(h1)


                //DELETE FUNCTION
                document.getElementById('list').appendChild(deleteButton)
                deleteButton.addEventListener("click", function (event) {
                    event.preventDefault()
                    axios.delete(`https://api.vschool.io/nicholasBielecki/todo/${response.data[i]._id}`)
                        .then(response => getAll())
                        .catch(error => console.log(error))
                })
                // FINISH DELETE


                document.getElementById('list').appendChild(h2)
                document.getElementById('list').appendChild(h3)
                document.getElementById('list').appendChild(h4)
                // FINISH APPENDING
            }
        })
        .catch(error => console.log(error))
}

getAll()

const form = document.toDoForm

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const newItem = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.image.value
    }

    axios.post("https://api.vschool.io/nicholasBielecki/todo/", newItem)
        .then(response => getAll())
        .catch(error => console.log(error))

})