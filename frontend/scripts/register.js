
const signup=()=>{
        console.log('myy')
        const payload={
            name:document.getElementById('fname').value,
            email:document.getElementById('mail').value,
            pass:document.getElementById('pass').value
        }
        fetch('https://beauty-queen.onrender.com/users/register',{
            method:'POST',
            headers:{ 
                'Content-type':'application/json'
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .then(err=>console.log(err))
        
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