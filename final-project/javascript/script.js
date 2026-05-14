console.log("GreenTech Solutions has loaded successfully!");

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function () {
    let searchValue = searchBar.value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function (product) {
        let text = product.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});