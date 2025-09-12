
//Ex1:
const greeter = (myArray, counter) => {
    var greetText = "Hello, ";
    for (var i = 0; i < counter; i++) {
        console.log(greetText + myArray[i]);
    }
    
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Ex2:

function capitalize(myString) {
    let [first, ...rest] = myString;
    return first.toUpperCase() + rest.join('');
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJS'));

//Ex3:

const colors = ['red', 'blue', 'green'];
const catializedColors = colors.map(capitalize);

console.log(catializedColors);

//Ex4:

var values = [1, 60, 34, 30, 20, 5];
var filterLessThan20 = values.filter(function(value) {
    return value < 20;
});

console.log(filterLessThan20)

//Ex5:

var array = [1, 2, 3, 4]
const calculateSum = array.reduce((acc, current) => acc + current, 0);
const calculateProduct = array.reduce((acc, current) => acc * current, 1);

console.log(calculateSum);
console.log(calculateProduct);

// Ex6:

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    details() {
        return `Model: ${this.name} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(name, year, price) {
        super(name, year);
        this.price = price;
    }
    inf0() {
        return `${this.name} has a balance of $${this.price}`;
    }
}
const car2 = new Car('Pontial Firebird', 1976)
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.inf0());
