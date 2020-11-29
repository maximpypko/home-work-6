var cylinder = {
    radius : 5,
    height : 10,
    volume : function() {
        var getVolume = Math.PI * (this.radius**2) * this.height;
        return ('Объём циллиндра равен ' + getVolume);
    },
    square : function() {
        var getSquare = 2 * Math.PI * this.radius * (this.height + this.radius);
        return('Площадь циллиндра равна ' + getSquare);
    },
}
console.log(cylinder.volume());
console.log(cylinder.square());

///////////////////////////////////////////////

function getResult (a, b, c) {
    var result;
    switch(c) {
        case '+': 
        result = a + b;
        break;
        case '-': 
        result = a - b;
        break;
        case '*': 
        result = a * b;
        break;
        case '/': 
        result = a / b;
        break;
        case '**': 
        result = a ** b;
        break;
        case '%': 
        result = a % b;
        break;
        default :
        result = 'Введите математический знак'
    }
    return result;
}
console.log(getResult(10, 3, '*'))

//////////////////////////////////////////////

function isCharPresent(string, symbol) {
    for (var i = 0; i <= string.length; i++) {
        if (string.charAt(i) == symbol) {
            var result = true;
            break;
        } else {
            result = false;
        }
    }
    return result;
}
console.log(isCharPresent('Hello JS', 'n'));

//////////////////////////////////////////////

function charIndexOf(string, symbol) {
    var result = string.search(symbol);
    return result;  
}
console.log(charIndexOf('Hello JS', 'e'));


