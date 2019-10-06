var table = Array(10);
/* for (var index = 0, length = table.length; index < lenght; index ++) {
    table[index] = new Array(10);
} */
for (var row = 0, rowLength = table.length; row < rowLength; row ++) {
    table[row] = new Array(10);
    for(var column = 0, columnLength = table[row].length; column < columnLength; column ++) {
        table[row][column] = row * column;
    }
}
console.log(table[4][4]); // => 16