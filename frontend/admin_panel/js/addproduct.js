
function addNewProduct(){
    let obj = {
        title:document.querySelector('#title').value,
        img:document.querySelector('#Image').value,
        category:document.querySelector('#Category').value,
        price:document.querySelector('#Price').value,
    }

    fetch('http://localhost:1010/posts/create', {
        method:'POST',
        headers:{
            "Content-type":"application/json",
            Authorization:localStorage.getItem('token')
        },
        body:JSON.stringify(obj)
    })
}