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

        let edit = document.createElement('td')
        edit.setAttribute('class', 'editbtn')
        edit.textContent = 'Edit';

        let deletebutton = document.createElement('td')
        deletebutton.setAttribute('class', 'deletebtn')
        deletebutton.textContent = 'Delete';

        deletebutton.addEventListener('click', () => {
            console.log('hello');
            fetch(`http://localhost:1010/posts/delete/${element._id}`, {
                method: "DELETE",
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            window.location.reload()
        })

        row.append(img, category, title, price, edit, deletebutton)
        document.querySelector('tbody').append(row)
    });
}


function adminlogout() {

    localStorage.setItem('token',null);
    alert('You are Logout Successfully !')
    window.location = '../index.html'
}
