{
    const calculateResult = (amount, currency) => {
        const eur = 4.45;
        const usd = 4.05;
        const gbp = 5.17;
        const chf = 4.63;

        switch (currency) {
            case "eur":
                return amount * eur;
            case "usd":
                return amount * usd;
            case "gbp":
                return amount * gbp;
            case "chf":
                return amount * chf;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-value");
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultElement.innerHTML = result.toFixed(2);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}