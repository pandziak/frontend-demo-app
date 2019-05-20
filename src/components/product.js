const currencies = getBasicCurrencies();
const currentCurrency = 'HUF';

function formatPrice(price) {
    let currencyObject = currencies.currency.find(item => item.key === currentCurrency);
    console.log(currencyObject);

    let formattedPrice =
        new Intl.NumberFormat(
            currencyObject.value,
            {style: 'currency', currency: currencyObject.key}).format(price.amount);
    console.log(formattedPrice);

    return `<div>${formattedPrice}</div>`
}

function renderProduct(product) {
    // `` - template string
    return `
        <div class="product">
		<h2 class="product-title">${product.name}</h2>
		<div>${formatPrice(product.price)}</div>
		<div class="product-description">${product.description.text}</div>
		</div>`;
}