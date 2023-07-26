
function addNewProduct() {
    let obj = {
        title: document.querySelector('#title').value,
        img: document.querySelector('#Image').value,
        category: document.querySelector('#Category').value,
        price: document.querySelector('#Price').value,
    };

    fetch('https://beauty-queen.onrender.com/posts/create', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Product added:', data);
            alert('Product Added');
        })
        .catch(error => {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        });
}



function adminlogout() {
    localStorage.setItem('token', null);
    alert('You are Logout Successfully !')
    window.location = '../index.html'
}