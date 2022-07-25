const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.39
const euro = 5.49

const convert_button = () => {
    const input_real = document.getElementById('input-real').value
    const real_value_text = document.getElementById('real-value-text')
    const currency_value_text = document.getElementById('currency-value-text')
    const currency_select = document.getElementById('currency-select').value

    real_value_text.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(input_real)

    if (currency_select === 'US$ Dólar Americano') {
        currency_value_text.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(input_real / dolar)
    } else {
        currency_value_text.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(input_real / euro)
    }
}

const currency_select = () => {
    const currency_select = document.getElementById('currency-select').value
    const flag = document.getElementById('flag')
    const currency_name = document.getElementById('currency-name')

    if (currency_select === '€ Euro') {
        currency_name.innerHTML = 'Euro'
        flag.src = './assets/euro.png'
    } else {
        currency_name.innerHTML = 'Dólar Americano'
        flag.src = './assets/estados-unidos.png'
    }
    convert_button()
}

button.addEventListener('click', convert_button)
select.addEventListener('change', currency_select)