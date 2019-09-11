/**
 * 5.6.2 break
 */

function checkMatrix(matrix) {
    var sum = 0;
    var success = false;
    sum: if(matrix) {
        for(var firstIndex = 0; firstIndex < matrix.length; firstIndex ++ ) {
            var row = matrix[x];
            if(!row) {
                break sum;
            }
            for (var secondIndex = 0; secondIndex < row.length; secondIndex ++) {
                var cell = row[secondIndex];
                if(isNaN(cell)) {
                    break sum;
                }
                sum += cell;
            }
        }
    }
    success = true;
}
/**
 * 5.6.5 throw 
 */
function factorial(number) {
    if(number < 0) throw new Error("number must not be negetive.");
    var result = 1;
    while(number > 1) {
        result *= number;
        number --;
    }
    return result;
}

try {
    console.log(factorial(-11));
}catch(exception) {
    console.log(exception.message);
}