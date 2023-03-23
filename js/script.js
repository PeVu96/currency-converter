let plnValueElement = document.querySelector(".js-plnValue");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let plnValue = plnValueElement.value;
    let currency = currencyElement.value;
    let eur = 4.69;
    let usd = 4.45;
    let gbp = 5.26;
    let chf = 4.72;

    switch (currency) {
        case "eur": result = plnValue / eur
            break;
        case "usd": result = plnValue / usd
            break;
        case "gbp": result = plnValue / gbp
            break;
        case "chf": result = plnValue / chf
            break;
    }

    resultElement.innerHTML = result.toFixed(2);
})