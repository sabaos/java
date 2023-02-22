var dog = {};
dog.breed = 'Golden retriver';
dog['other breed'] = 'chiuauauaa';



var glavnaPasmina = dog.breed;
var podPasmina = dog["other breed"]
console.log("Pasmina: " + glavnaPasmina);
console.log('Pod pasmina: ' + podPasmina);


//*

var osoba = {};
osoba.ime = "mario"
osoba.prezime = "sabolić";
osoba.godine = "34";
osoba.brojCipela = "43";

/*var isObrisano = delete osoba.prezime;
console.log(isObrisano)*/

/*var json = JSON.stringify(osoba);
console.log(json);
return;*/

if (osoba.brojCipela > 39) {
    console.log(`ime i prezime: ${osoba.ime} ${osoba.prezime}`)
}