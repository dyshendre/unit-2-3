console.log("yes");

let users=JSON.parse(localStorage.getItem("signup"))||[];

function Signup(){
    let name=document.getElementById("name").value;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let type=document.getElementById("select").value;

    let s1=new Student(type);
    s1.signUp(name,username,password,type);
    console.log(users);
}

function Login(){
    let username2=document.getElementById("username").value;
    let password2=document.getElementById("password").value;

    let filter3=users.filter(function(element){
        // console.log(element.password);
        return element.username===username2;
    })
    console.log(filter3);
    if(filter3.length>0)
    {
        console.log(filter3[0].type);

        let s2=new Student(filter3[0].type);
        s2.login(username2,password2);

    }
    else{
        alert("User doesn't exist, Sign Up");
    }
}

class User {
// #password;
constructor(type) {
this.type=type;
}

#validateUsername(username) {
//if username includes symbol '#', invalid username

// if (username.includes('#')) {
//   return false;
// } else {
//   return true;
// }

//if else condition using ternery operator

//condition ? ifsuccessfull() : ifnotsuccessfull()

    let value = username.includes('#') ? false : true;

    return value;
}

#validatePassword(password) {

    let value = password.includes('123') ? false : true;

    return value;
}

login(username, password){

    let ans1=this.validate1(username);
    let ans2=this.validate2(password);
    let ans3=this.type;
    if(ans1==true && ans2==true && ans3==="admin")
    {
        alert("Admin Login successful!");
        window.location.href="1admin.html"
    }
    else if(ans1==true && ans2==true && ans3==="student") 
    {
        alert("Student Login successful!");
        let profile=[];
        profile.push(username);
        localStorage.setItem("profileData",JSON.stringify(profile));
        window.location.href="2student.html"
    }
    else if(ans1==true && ans2==false){
        alert("Wrong password");
    }
}
validate1(username){

    let filter1=users.filter(function(element){
        // console.log(element.username);
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

    let filter2=users.filter(function(element){
        // console.log(element.password);
        return element.password===password;
    })

    if(filter2.length>0){
        return true;
    }
    else{
        return false;
    }
}

signUp(name,username, password,type) {

let isValidated = false;

isValidated=this.#validateUsername(username) && this.#validatePassword(password);

if(isValidated){
    this.name=name;
    this.username=username;
    this.password=password;

    if(this.type==="admin")
    {
        console.log("Admin registered successfully"); 
        alert("Admin registered successfully");
    }
    else{
        console.log("Student registered successfully");
        alert("Student registered successfully");
    }
    
    
    users.push(this);
    localStorage.setItem("signup",JSON.stringify(users));
}else{
    console.log("Please enter correct details");
}
}
}
class Student extends User{
    constructor(type){
        super(type);
    }
    }
    
    
    // class Admin extends User{
    // constructor(){
    //     super();
    // }
    // removeUser(username){
    //    users= users.filter((element)=>{
    //         return element.username != username;
    //     });
    // }
    // }