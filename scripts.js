

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){


    const inputCurrencyValue = document.querySelector(".input-currency").value
    const correncyValueToConvert = document.querySelector(".currency-value-to-convert")
    const correncyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 4.99
    const euroToday = 5.36
    const bitcoinToday = 136573.74
    const libraToday = 6.16

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
