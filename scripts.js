

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


const convertValues = async () => {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const correncyValueToConvert = document.querySelector(".currency-value-to-convert")
    const correncyValueConverted = document.querySelector(".currency-value")

    const data = await fetch( "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    console.log(data)
    
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high
    const libraToday = 6.25

if(currencySelect.value == "dolar"){

    correncyValueConverted.innerHTML = new Intl.NumberFormat ("en-US" , {
        style: "currency" , 
        currency: "USD" ,
    }).format(inputCurrencyValue / dolarToday)
}
if(currencySelect.value == "euro"){

    correncyValueConverted.innerHTML = new Intl.NumberFormat ( "de-DE" , {
        style: "currency",
        currency: "EUR" ,
    }) .format(inputCurrencyValue / euroToday)
    
}

if(currencySelect.value == "bitcoin"){

    correncyValueConverted.innerHTML = new Intl.NumberFormat ( "btc" , {
        style: "currency",
        currency: "BTC" ,
    }) .format(inputCurrencyValue / bitcoinToday)
    
}

if(currencySelect.value == "libra"){

    correncyValueConverted.innerHTML = new Intl.NumberFormat ( "GBP" , {
        style: "currency",
        currency: "GBP" ,
    }) .format(inputCurrencyValue / libraToday)
    
}



 correncyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR" , {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")

if(currencySelect.value == "dolar"){
    currencyName.innerHTML = ("Dolár Americano")
    currencyImage.src = "./assets/estados-unidos (1) 1.png"
}

if(currencySelect.value == "euro"){
    currencyName.innerHTML = ("Euro")
    currencyImage.src = "./assets/euro.png"

}

if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = ("bitcoin")
    currencyImage.src = "./assets/bitcoin.png"

}

if(currencySelect.value == "libra"){
    currencyName.innerHTML = ("libra")
    currencyImage.src = "./assets/libra.png"

}

convertValues()

}

currencySelect.addEventListener("change" , changeCurrency )
convertButton.addEventListener("click", convertValues )
