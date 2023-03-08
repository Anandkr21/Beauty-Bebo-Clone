let cartdata = JSON.parse(localStorage.getItem('cart')) || []
display(cartdata)

function display(cartdata) {
    document.querySelector('cart-product').textContent = null;
    document.querySelector('#ttl-prdt').textContent = cartdata.length;

    cartdata.forEach((el, ind) => {
        let div = document.createElement('div')
        div.setAttribute('class', 'watch-div')

        let img = document.createElement('img')
        img.setAttribute('class', 'imgdiv')
        img.setAttribute('src', el[0].avatar)

        let title = document.createElement('h4')
        title.setAttribute('class', 'title')
        title.textContent = el[0].title;

        let price = document.createElement('h4')
        price.setAttribute('class', 'price')
        price.textContent = '₹ ' + el[0].price;

        //Quentity decreaseing
        let dec = document.createElement('button')
        dec.textContent = '-';

        dec.addEventListener('click', () => {
            if (qt.textContent <= 1) {
                cartdata.splice(ind, 1);

                localStorage.setItem('cart', JSON.stringify(cartdata))
                window.location.reload();
            } else {
                el[1]--
                total -= Number(el[0].price);
                document.querySelector('#total').textContent = total;

                localStorage.setItem('cart', JSON.stringify(cartdata))
                qt.textContent--;
            }
        })

        // Default quentity by 1 
        let qt = document.createElement('span')
        qt.textContent = el[1];

        qt.style.border = '1px solid #ddd';
        qt.style.padding = '7px 17px';
        qt.style.marginLeft = '20px';

        let inc = document.createElement('button')
        inc.textContent = '+';

        inc.addEventListener('click', () => {
            el[1]++;
            total += Number(el[0].price);
            document.querySelector('#total').textContent = total;

            qt.textContent++;
            localStorage.setItem('cart', JSON.stringify(cartdata))
        })

        let ofr = document.createElement('p')
        ofr.setAttribute('class', 'ofrprice')
        ofr.textContent = 'Offer Price';

        let btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.addEventListener('click', () => {
            cartdata.splice(el, 1);
            localStorage.setItem('cart', JSON.stringify(cartdata))
            window.location.reload();
        })

        div.append(img, title, ofr, price, dec, qt, inc, btn)
        document.querySelector('.cart-product').append(div)
    });
}


let total = cartdata.reduce((acc, el) => acc + Number(el[0].price), 0)
document.querySelector('#total').textContent = total;

function placed() {
    alert('Order Placed Successfully !')
    window.location='index.html'
}