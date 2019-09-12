/**
 * 5.2 Compound and Empty Statements
 */
{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(π) = " + cx);
}

var oneArray = Array(20);
for(index = 0; index < oneArray.length; oneArray[index++] = 0)/* empty */;