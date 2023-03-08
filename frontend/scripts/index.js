// carousal
function responsiveSlider() {
  const slider = document.querySelector('.container');
  let sliderWidth = slider.offsetWidth / 3;
  const sliderList = document.querySelector('ul');
  let items = sliderList.querySelectorAll('li').length - 2;
  let count = 1;

  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth;
  });

  function prevSlide() {
    if (count > 1) {
      count = count - 2;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    } else if (count == 1) {
      count = items - 1;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }

  }
  function nextSlide() {
    if (count < items) {
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;

    } else if (count == items) {
      sliderList.style.left = '0px';
      count = 1;

    }
  }
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
  setInterval(function () {
    nextSlide();
  }, 3000);
}

window.onload = function () {
  responsiveSlider();
}



/// Go to cart page onclick

let carticon = document.querySelector('.fa-bag-shopping')
let mycart = document.querySelector('#cart')

carticon.addEventListener('click', () => {
  window.location = './cart.html'
})

mycart.addEventListener('click', () => {
  window.location = './cart.html'
})



//             api fetching here                   //

let data = JSON.parse(localStorage.getItem('cart')) || []
let url = 'http://localhost:1010/posts/'

async function getdata() {
  try {
    let res = await fetch(url)
    let out = await res.json()
    // console.log(out)
    data = out
    console.log(data)
    display(data)
  }
  catch (err) {
    alert(err)
  }
}

getdata()

function display(data) {
  // console.log(data)
  document.querySelector('.container>ul').textContent = null;
  data.forEach((el) => {
    console.log(el.title)

    let div = document.createElement('div')
    div.setAttribute('class', 'box')

    let img = document.createElement('img')
    img.setAttribute('class', 'imgdiv')
    img.setAttribute('src', el.img)

    let title = document.createElement('h4')
    title.setAttribute('class', 'title')
    title.textContent = el.title.substring(0, 30)

    let price = document.createElement('h4')
    price.setAttribute('class', 'price')
    price.textContent = '₹ ' + el.price

    let ofr = document.createElement('p')
    ofr.setAttribute('class', 'ofrprice')
    ofr.textContent = 'Offer Price'

    let btn = document.createElement('button')
    btn.textContent = "Add to Cart"

    btn.addEventListener('click', function () {
      // addcart(el,ind)

      let cartdata = JSON.parse(localStorage.getItem('cart')) || []

      let temp = []
      temp.push(el)
      temp.push(1)

      cartdata.push(temp)
      localStorage.setItem('cart', JSON.stringify(cartdata))
    })

    div.append(img, title, ofr, price, btn)
    document.querySelector('.container>ul').append(div)

  });
}
