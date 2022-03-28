

//1a and 1b

// function myFunc (a,b){
//     console.log(typeof(b))
//     try {
//         if(isNaN(a) || isNaN(b)){
//             throw "This is an error"
//         }
        
//     }
//     catch(error){
//         console.log(error)
//     }
    
    
    
// return a + b
// }

// myFunc(2,"j")



//2a and 2b


var user = {username: "sam", password: "123abc"};

function login (username, password){
    try{
        if ((username != user.username) || (password != user.password)){
            throw "Bad Login"
        }
             console.log("Login Sucessful")
    }
    catch(error){
        console.log(error)
    }
    
        
}

login("sam", "123ab")

