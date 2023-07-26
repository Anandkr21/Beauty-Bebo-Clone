let title = document.getElementById("title")
let image_1 = document.getElementById("Image_1")
let price = document.getElementById("Price")
let Category = document.getElementById("Category")
let Errors = document.getElementById("Errors")
let added = document.getElementById("added")
let submit = document.getElementById("submit")


let myform = document.querySelector("form");

myform.addEventListener("submit", (e) => {
    e.preventDefault();
    if (title.value == "" || image_1.value == "" || price.value == "" || Category.value == "") {

        Errors.style.display = "inline"
        setTimeout(() => {
            Errors.style.display = "none"
        }, 2000)
    } else {
        added.style.display = "inline"
        setTimeout(() => {
            added.style.display = "none"
        }, 2000)
        let obj = {
            title: title.value,
            image_1: image_1.value,
            price: price.value,
            Category: Category.value,
        }
        addProduct(obj);
    }
})

function addProduct(obj) {
    fetch("https://beauty-queen.onrender.com/posts/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    })
}


let logout = document.getElementById("out")

let log = document.getElementById("logout");
log.addEventListener("click", () => {
    logout.style.display = "inline"
    setTimeout(() => {
        logout.style.display = "none";
        window.open("./index.html")
    }, 2000)
})