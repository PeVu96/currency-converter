{
    const calculateResult = (plnValue, currency) => {
        const eur = 4.70;
        const usd = 4.36;
        const gbp = 5.33;
        const chf = 4.74;

        switch (currency) {
            case "eur":
                return plnValue * eur;
            case "usd":
                return plnValue * usd;
            case "gbp":
                return plnValue * gbp;
            case "chf":
                return plnValue * chf;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnValueElement = document.querySelector(".js-plnValue");
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");

        const plnValue = plnValueElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(plnValue, currency);

        resultElement.innerHTML = result.toFixed(2);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}