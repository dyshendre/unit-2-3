//import export
// import {navBar} from "../scripts/navbar.js"
import navBar from "../scripts/navbar.js"
console.log(navBar)
document.getElementById("navbar").innerHTML = navBar();
let login_button = document.getElementById("submit");
login_button.onclick = () =>{
    login()
}

let login = async () => {
    // e.preventDefault()
    let data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }

    let user = data.username

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers :{
            "Content-Type": "application/json",
        }
    });
    let user_data = await res.json()
    console.log(user_data);
    // getProfile(user,user_data.token)
    saveUser(user,user_data.token,50000)

    
}



// let getProfile = async (username,token) => {
//     console.log(username)
//     let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,
//     {
//        headers: {
//         "Authorization": `Bearer ${token}`
//        }
//     })
//     res = await res.json()
//     console.log(res)

// }

let saveUser = (username,token , time) => {
    let user = {
        username,
        token,
    }
    localStorage.setItem("user_details",JSON.stringify(user));

    setTimeout(()=>{
    localStorage.setItem("user_details",JSON.stringify(null));

},time)
}

/* 
users :- [u1,u2,u3]
u1 :- admin
based on email

signup
login :- token
using this token :- user detail
based on user detail we can decide he is a admin or not (abc@ymail.com)
*/