//**const{_} =require("./core");

// 1

var dobro =32112345678;
var lose= "1123456";
/*var jedinstveniZnakovi = function(password){
    //kod
    console.log("test " +password)
    let isNum = _.isNumber(password);
    console.log("IS NUMBER - " + isNum)
};
*/
function isUniqueChar(password)
{
    var myArray =[];
    for (var i = 0; i <= password.length; i++){
        var myChar = password.charAt(i);
        if(!myArray.includes(myChar))
        {
            myArray.push(myChar);
        }
        else{
            return false;
        }
    }
    return true;

}

function ifVeciod10(password){
    if (password.length > 10)
    {
        return password.substring(0, 10);
    }
    return password;
}
console.log("Rezultat = " + isUniqueChar(lose));
console.log("Rezultat duljine= " + ifVeciod10(dobro.toString()));
return;
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);

//aaa