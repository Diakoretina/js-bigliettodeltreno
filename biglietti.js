let kilom = parseInt(prompt("Inserisci Kilometri"));
let età = parseInt(prompt("Inserisci età"));
let sconto;
let prezzo;

if(isNaN(kilom) || isNaN(età)){
    alert("Il valore inserito non è un numero. Riprova")
}else{
    alert("Prezzo del biglietto calcolato")
}

prezzo=kilom*0.21;

if(età<18){
    sconto = (prezzo*20)/100
    prezzo = prezzo-sconto;
}else if(età>=65){
    sconto = (prezzo*40)/100
    prezzo = prezzo-sconto;
}

document.getElementById(
    "base"
  ).innerText = `Prezzo: ${Math.ceil(prezzo)}`;