

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



/// Go to cart page onclick

let carticon=document.querySelector('.fa-bag-shopping')
let mycart=document.querySelector('#cart')

carticon.addEventListener('click', () =>{
  window.location='./cart.html'
})

mycart.addEventListener('click', () =>{
  window.location='./cart.html'
})