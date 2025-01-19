const url=`https://v6.exchangerate-api.com/v6/d2af8af493ab4d52a88d8592/latest/USD`;

// const url = `https://v6.exchangerate-api.com/v6/d2af8af493ab4d52a88d8592/latest/USD`;

async function convertCurrency() {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');

    if (!amount.value || !currency.value) {
        document.getElementById('result').innerHTML = 'Please enter a valid amount and currency.';
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const targetCurrency = currency.value.toUpperCase();
            const rate = data.conversion_rates[targetCurrency];
            if (rate) {
                const convertedAmount = amount.value * rate;
                document.getElementById('result').innerHTML = `The converted amount is: ${convertedAmount.toFixed(2)}`;
            } else {
                document.getElementById('result').innerHTML = 'Invalid currency code.';
            }
        } else {
            document.getElementById('result').innerHTML = 'Failed to fetch data. Try again later.';
        }
    } catch (e) {
        document.getElementById('result').innerHTML = 'An error occurred while fetching data.';
    }
}
