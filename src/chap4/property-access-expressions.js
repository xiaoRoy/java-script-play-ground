var book = {
    title: "Play a Tank",
    author: {
        name:"who",
        counry:"France"
    }
};

var oneArray = [book, 4, [44, 12]];

//console.log(book[title]) // => ReferenceError
console.log(book["title"]) // => Play a Tank
console.log(book.title) // => Play a Tank
console.log(book[0]) // => Undefined
console.log(book.author.counry) // France

oneArray[1] // => 4
console.log(oneArray[2]["1"]); // => 12
console.log(oneArray[0].title) // => Play a Tank