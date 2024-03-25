let sommaCarrello = 0
for (let i = 0; i < prices.length; i++) {
const prezzo = prices [i]
sommaCarrello += prezzo
}

if (sommaCarrello <= 100) {
    sommaCarrello += shippingCost
}

if (utenteCheAcquista.isAmbassador) {sommaCarrello = (sommaCarrello * 30) / 100}


const tuttiUtenti = [marco, paul, amy]
tuttiUtenti.push (marco, paul, amy)
console.log (tuttiUtenti)

for (let i= 0; i < tuttiUtenti.length; i++) {
    const utente = tuttiUtenti
    let stringaBase= `${utente.name} ${utente.lastName} `
    if (utente.isAmbassador) { stringaBase= NON}
    stringaBase += "Sei un ambassador"
    console.log(stringaBase)
}

let soloAmbassador = []
for (let i = 0; i < tuttiUtenti.length; i++) {
    const utente = tuttiUtenti
    if (utente.isAmbassador) { soloAmbassador.push (utente)}
}


