let allproduct = JSON.parse(localStorage.getItem('product')) || [];
let url = 'http://localhost:1010/posts/'

async function getdata() {
    try {
        let res = await fetch(url)
        let out = await res.json()
        data = out;
        // console.log(data)
        display(data)
    } catch (error) {
        console.log(error)
    }
}

getdata();

function display(data) {
    // console.log(data)
    document.querySelector('tbody').textContent = null;
    data.forEach(element => {
        let row = document.createElement('tr')
        row.setAttribute('class', 'subcontainer')

        let category = document.createElement('td')
        category.setAttribute('class', 'category')
        category.textContent = element.category;

        let img = document.createElement('img')
        img.setAttribute('class', 'imgdiv')
        img.setAttribute('src', element.img)

        let title = document.createElement('td')
        title.setAttribute('class', 'title')
        title.textContent = element.title.substring(0, 11)

        let price = document.createElement('td')
        price.setAttribute('class', 'price')
        price.textContent = '₹ ' + element.price;

        row.append(img, category, title, price)
        document.querySelector('tbody').append(row)
    });
}


function adminlogout(){
    alert('You are Logout Successfully !')
    window.location = '';
}
