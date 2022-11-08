//import export
// import {navBar} from "../scripts/navbar.js"
import navBar from "../scripts/navbar.js"
console.log(navBar)
document.getElementById("navbar").innerHTML = navBar();
let submit_btn = document.getElementById("submit")
submit_btn.onclick = (event) => {
    register(event);
};

let register = async function (e) {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
    };
    console.log(data);

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    let result = await res.json();
    console.log(result);
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("username").value = ""
    document.getElementById("mobile").value = ""
    document.getElementById("description").value = ""


}