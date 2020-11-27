var cylinder = {
    radius : 5,
    height : 10,
    volume : function() {
        var getVolume = Math.PI * (this.radius**2) * this.height;
        console.log('Объём циллиндра равен ' + getVolume);
    },
    square : function() {
        var getSquare = 2 * Math.PI * this.radius * (this.height + this.radius);
        console.log('Площадь циллиндра равна ' + getSquare);
    },
}
cylinder.volume();
cylinder.square();

///////////////////////////////////////////////

function getResult(a, b, c) {
    var result = a + c + b ;
    return (eval(result));
}
console.log(getResult(9, 3, '*'))

//////////////////////////////////////////////

function isCharPresent(string, symbol) {
    var result = string.toLowerCase().search(symbol.toLowerCase());
    if (result >= 0) {
        return true;
    } else {
        return false;  
    }
}
console.log(isCharPresent('Hello JS', 'I'))

//////////////////////////////////////////////

function charIndexOf(string, symbol) {
    var result = string.toLowerCase().search(symbol.toLowerCase());
    return result;  
}
console.log(charIndexOf('Hello JS', 'e'))

