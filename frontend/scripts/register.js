
const signup=()=>{
        console.log('myy')
        const payload={
            name:document.getElementById('fname').value,
            email:document.getElementById('mail').value,
            pass:document.getElementById('pass').value
        }
        fetch('http://localhost:1010/users/register',{
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

