
let students=JSON.parse(localStorage.getItem("data"))||[];
let form=document.querySelector("form");
form.addEventListener("submit",login)

function login(event){
    event.preventDefault();
    let username=form.email.value;
    let password=form.password.value;

    let s2=new User();
    
    s2.login(username,password);   
}

class User{
    
    login(username,password){
        this.username=username;
        this.password=password;
        let ans1=this.validate1(username);
        let ans2=this.validate2(password);
        if(ans1==true && ans2==true)
        {
            alert("Login successful!")
            localStorage.setItem("login", "true");
            window.location.href="index.html";
        }
        else if(ans1==true && ans2==false){
            alert("Wrong credentials");
        }
        else{
            alert("User doesn't exist, Sign Up");
            window.location.href="signup.html";
        }
    }
    validate1(username){

        let filter1=students.filter(function(element){
            return element.username===username;
        });

        if(filter1.length>0){
            return true;
        }
        else{
            return false;
        }
    }

    validate2(password){

        let filter2=students.filter(function(element){
            return element.password===password;
        })

        if(filter2.length>0){
            return true;
        }
        else{
            return false;
        }
    }
}


