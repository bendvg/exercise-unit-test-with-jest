const sum = (a, b) => {
    return a + b
}


let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs["USD"];
    let yenes = euros * oneEuroIs["JPY"];
    return yenes;
}

const fromEuroToDollar = (euros) => {
    let dollars = euros * oneEuroIs["USD"];
    return dollars;
}

const fromYenToPound = (yenes) => {
    let euros = yenes / oneEuroIs["JPY"];
    let pounds = euros * oneEuroIs["GBP"];
    return pounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };