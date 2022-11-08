async function Register(){


    let signup_data=
    {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        username: document.getElementById('username').value,
        mobile: document.getElementById('mobile').value,
        description: document.getElementById('description').value,
    };

    //JSON format
    signup_data=JSON.stringify(signup_data);

    let signup_api_link='https://masai-api-mocker.herokuapp.com/auth/register';

    //fetch
    let response=await fetch(signup_api_link, {
        method:"POST",
        body:signup_data,
        headers:
        {
            'Content-Type':'application/json',
        },
    });
    let data=await response.json();
    console.log('data',data);
}

async function login(){
    let login_data={
        username:document.getElementById('login-username').value,
        password:document.getElementById('login-password').value,
    };

    login_data=JSON.stringify(login_data);

    let login_api_link='https://masai-api-mocker.herokuapp.com/auth/login';
    let response=await fetch(login_api_link,{
        
        method:'POST',
        body:login_data,
        headers:{
            'Content-Type':'application/json',
        }
    });

    let data=await response.json();
    console.log('data:',data);
}