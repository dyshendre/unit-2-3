console.log("yes");

let users=[];

// function Signup(){
//     let username=document.getElementById("username").value;
//     let password=document.getElementById("password").value;

//     let s1=new Student();
//     s1.signUp(username,password);
//     console.log(users);
// }


class User {
// #password;
constructor() {
this.organisation = 'Masai';
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

    console.log("this.username:",this.username);
    console.log("this.password:",this.password);
if(username===this.username && password===this.password)
{
    console.log("login successfull");
}else{
    console.log("Authentication failed");
}
}

signUp(username, password) {
//we need to validate user data

let isValidated = false;

//to validate what are we checking. ( username, password)
isValidated=this.#validateUsername(username) && this.#validatePassword(password);

if(isValidated){
    this.username=username;
    this.password=password;

    console.log("User registered successfully");
    
    users.push(this);
    localStorage.setItem("signup",JSON.stringify(users));
}else{
    console.log("Please enter correct details");
}
}
}

//fact: es6 class is constructor function

let u1 = new User();

// u1.signUp('pablo','pablo123');
// u1.signUp('pablo','pablopass');
// u1.login('pablo','pablopass');

// let u2 = new User();
// u2.signUp('shaktimaan','gita');
// console.log("users:",users);
// u2.login('shaktimaan','gita');
// console.log("**********************");

class Student extends User{
constructor(){
    super();
    this.numofAssignments=0;
}
submitAssignment(){
    this.numofAssignments++;
    console.log("%c Accepted", "color:green");
}
}


class Admin extends User{
constructor(){
    super();
}
removeUser(username){
   users= users.filter((element)=>{
        return element.username != username;
    });
}
}


// let s1 = new Student();
// s1.signUp("pappu","pappupass");

// s1.login("pappu","pappupass");

// let s2 = new Student();
// s2.signUp("pappu2","pappupass2");

// s2.login("pappu2","pappupass2");

// // s1.submitAssignment();
// // s1.submitAssignment();
// // console.log('numofAssignments:',s1.numofAssignments);

// let admin=new Admin();
// admin.signUp('jonny','jonypass');
// admin.login('jonny','jonypass');
// admin.removeUser('pappu2');
// console.log(users);