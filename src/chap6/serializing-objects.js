var phone = {
    barnd: "Apple",
    model: "7 plus",
    price: 1234.0,
    others: { attributes: [1, false, null] }
}

var phoneJson = JSON.stringify(phone);
console.log(phoneJson);

var clonedPhone = JSON.parse(phoneJson);