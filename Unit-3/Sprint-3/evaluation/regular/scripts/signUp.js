// console.log("yes");
let students=JSON.parse(localStorage.getItem("data"))||[];

let form=document.querySelector("form");
form.addEventListener("submit",signup)

function signup(event){
   
    event.preventDefault();
    let name=form.name.value;
    let username=form.email.value;
    let password=form.password.value;

    let s1=new User(name);
    console.log("s1:",s1);
    s1.signup(username,password);
    
}
class User{
    
    constructor(name){
        this.name=name;
       
    }

    signup(username,password){
    
            this.username=username;
            this.password=password;
            
            let ans1=this.validate1(username);
            if(ans1==false){
            alert("User registered successfully");
            students.push(this);
            console.log(students);
            localStorage.setItem("data",JSON.stringify(students));
            window.location.href="login.html";
            }
            else{
                alert("Username exists");
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
   
}



