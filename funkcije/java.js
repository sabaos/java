function ispisiIme(ime){
    console.log(ime);
}
ispisiIme("john doe");
ispisiIme("josipa");

for(let i = 1; <= 5; i++){
    ispisiIme("josipa" + i);
}

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
    return a+ b;
}
myFunc(1,1);

function myFunc(a, b =1) {
    return a + b;
}
myFunc(1,1)