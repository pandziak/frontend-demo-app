// DOM
// przecinki zamiast kropek
// zł zamiast PLN, $ zamiast USD itp. (mapeczka) albo API? biblioteka?
// 12,324 zł
// $ 12.324
// EUR znak 123.12

function formatPrice(price) {
    return '<div>...'

    // `${price.amount} + ' ' + ${price.currency}`
}

function renderProduct(product) {
    // `` - template string
    return `
        <div class="product">
		<h2 class="product-title">${product.name}</h2>
		<div>${formatPrice(product.price)}</div>
		<div class="product-description">${product.description.text}</div>
		</div>
    `;
}