let kilom = prompt("Inserisci Kilometri");
let età = prompt("Inserisci età");
let sconto;
let prezzo;

prezzo=kilom*0.21;

if(età<18){
    sconto=(prezzo*20)/100
    prezzo=prezzo-sconto;
}else if(età>=65){
    sconto=(prezzo*40)/100
    prezzo=prezzo-sconto;
}

document.getElementById(
    "base"
  ).innerText = `Prezzo: ${prezzo}`;