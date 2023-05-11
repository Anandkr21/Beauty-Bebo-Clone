let sub = document.getElementById('submit');
let email = document.getElementsByClassName('email').value;
let password = document.getElementsByClassName('password').value;


sub.addEventListener('click', ()=>{
    let obj ={
        email:email.value,
        password:password.value
    }
    console.log(obj)
})
