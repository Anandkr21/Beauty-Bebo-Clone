

const login=()=>{
    const payload={           
        email:document.getElementById('mail').value,
        pass:document.getElementById('pass').value
    }
    fetch('http://localhost:1010/users/login',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        localStorage.setItem('token',token)
    })
    .catch(err=>console.log(err))

    window.open("./index.html")
    
}