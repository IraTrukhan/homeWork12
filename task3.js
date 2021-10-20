function areaSquare(width){
    return width ** 2;
}

function perimeterRestangle(length, width){
    return 2 * (length + width);
}


let length = +prompt('Enter length polygon:');
let width = +prompt('Enter width polygon:');

(length === width) ? alert (`Area square: ${areaSquare(length)}`) 
    : alert (`Perimetr square: ${perimeterRestangle(length,width)}`);
