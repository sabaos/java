var auto = {
    marka: "VW",
    gorivo: "benzin",
    model: "Golf",
    godina: 2022,
    boja: "crvena",
    maxBrzina: 160,
    trenutnaBrzina: 0,
    ubrzaj:function(ubrzanje) {
        let brzina = 0;
        this.trenutnaBrzina += ubrzanje;
        return this.trenutnaBrzina;
    },
    zakoci:function(brojSekundi) {
        while(this.trenutnaBrzina > 0 && brojSekundi >= 0){
            this.trenutnaBrzina -= 10;
            console.info("trenutna brzina pri kočenju je: " + this.trenutnaBrzina);
            brojSekundi--;
            console.info("Brojač " + brojSekundi);
        }
        return this.trenutnaBrzina
    }
};

console.log(auto.propertyIsEnumerable('marka'));


for (let key in auto) {
    if (auto.propertyIsEnumerable(key)){
        console.log("kljuc: " + key + "; vrijednost: " + auto[key])
    } }




console.log("Ja vozim auto marke: " + auto.marka);


//*(može ići i ovako sa jednostrukim navodnicima)
/*console.log(`Ja vozim auto marke: ${auto.marka}`);*/
console.log("Ja vozim auto "+auto.marka+" "+auto.model+" iz " +auto.godina+ " godine.")
console.log("Auto vozi brzinom " +auto.trenutnaBrzina);
console.log("Auto nakon ubrzanja vozi brzinom " + auto.ubrzaj(60))
console.log("Auto nakon kočenja vozi brzinom " +auto.zakoci(30))

console.log("-----------------------")

var json = JSON.stringify(auto);

console.log(json)