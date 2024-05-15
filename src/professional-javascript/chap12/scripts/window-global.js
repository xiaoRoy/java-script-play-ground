var age = 29;
var showAge = () => alert(this.age);

let showAgeSecond = () => alert(this.age);
window.showAge();
//undefined
//Uncaught TypeError: window.showAgeSecond is not a function
//window.showAgeSecond();
