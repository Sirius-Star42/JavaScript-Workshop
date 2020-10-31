
function convert() {
    var x = document.getElementById("text").value
    var roman = [];
    var lst = {
    1 : "I",
    4 : "IV",
    5 : "V",
    9 : "IX",
    10 : "X",
    40 : "XL",
    50 : "L",
    90 : "XC",
    100 : "C",
    400 : "CD",
    500 : "D",
    900 : "CM",
    1000 : "M"   
};

    var j = 1;

    for (i=x.length-1; i >-1; i--) {
        if ((x[i] * j) in lst ) {
            roman.unshift(lst[x[i] * j])
        } else {
            roman.unshift(lst[j].repeat(x[i]))
        }
    j *= 10  
    }
    document.getElementById("result").innerHTML = roman.join("")
}

    

