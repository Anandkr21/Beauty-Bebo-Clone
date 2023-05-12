
function addNewProduct() {
    let obj = {
        title: document.querySelector('#title').value,
        img: document.querySelector('#Image').value,
        category: document.querySelector('#Category').value,
        price: document.querySelector('#Price').value,
    }

    fetch('https://beauty-queen.onrender.com/posts/create', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    })
alert('Porduct Added')
}



function adminlogout() {

    localStorage.setItem('token',null);
    alert('You are Logout Successfully !')
    window.location = '../index.html'
}