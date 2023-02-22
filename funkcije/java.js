function ispisiIme(ime) {
    console.log(ime);
}
ispisiIme("john doe");
ispisiIme("josipa");



//parametri

function myFunc(a, b) {
    if (!b) {
        b = 1;
    }
    return a + b;
}
myFunc(1);



function myFunc(a, b) {
    b = b || 1;
    return a + b;
}
myFunc(1, 1);

function myFunc(a, b = 1) {
    return a + b;
}
myFunc(1, 1)

//funkcija kao vrijednost
var addOne = function (value) {
    return value + 1;
};
var myVar = addOne(1);
console.log(myVar);


//vježba
function traziNajduzuRijec(zadaniNiz) {
    var najduzaRijecUFunkciji = "";
    for (let i = 0; i < zadaniNiz.length; i++) {
        if (zadaniNiz[i].length > najduzaRijecUFunkciji.length) {
            najduzaRijecUFunkciji = zadaniNiz[i];
        }
    }
    return najduzaRijecUFunkciji;
}

function checkEmail(email) {
    var i = email.indexOf("@");
    console.log("search index i = " + i);
    if (i > 0) {
        var tmpEmailDomain = email.substring(i + 1, email.lenght);
        console.log(tmpEmailDomain);
        var z = email.indexOf(".");
        console.log("Search index z =" + z);
        if (z > 0) {
            return true;
        }
        return false;
        return true;
    } else {
        return false;
    }
}
var isEmailOk = checkEmail("moje.ime@gmail.com");
console.log("email OK = " + isEmailOk);
return;



var niz = ["Marko", "Ana", "Josipa", "Anamarija", "ivo"];
var naduzeIme = traziNajduzuRijec(niz);



console.log("Najduže ime je: " + naduzeIme);

