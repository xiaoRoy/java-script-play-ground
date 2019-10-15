var objectOne = {};
var count = 0;
while(count < 10) {
    objectOne[count] = count * count;
    count ++;
}
objectOne.legnth = count;

var total = 0;
for(var index = 0; index < objectOne.legnth; index ++) {
    total += objectOne[index];
}
console.log(total);
