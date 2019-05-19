const listingElement = document.querySelector('#listing');
console.log(listingElement.inn);
const response = getProductList();

response.products
    .map((product) => {
        return renderProduct(product);
    })
    .forEach((html) => {
        listingElement.innerHTML += html;
    })
