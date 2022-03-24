'use strict'

//Advanded Functions
//131
//Callbacks

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function(str, fn) {
    console.log(`Result: ${fn(str)}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
    console.log('✋🏼');
};
document.body.addEventListener('click', high5);

//132
//Func returns a Func

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Olga');
greeterHey('Masha');

greet('Hello')('Jake'); //Closure

//Arrow Func variant
const greet1 = greeting => name => console.log(`${greeting}, ${name}!`);
greet1('Hello')('Mike');


//Call and Apply Methods
//133

const airfrance = {
    airline: 'AirFrance',
    iataCode: 'AF',
    bookings: [],
    //book: function() {}
    book(flightNum, passName) {
        console.log(`${passName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passName })
    }
};

airfrance.book(353, 'Jack Black')

const klm = {
    airline: 'KLM',
    iataCode: 'KL',
    bookings: []
};

const book = airfrance.book;
//call method
book.call(klm, 23, 'Paul Smith');
console.log(klm);

//apply
const flightData = [657, 'Ann Smith'];
book.apply(klm, flightData);
//better way
book.call(klm, ...flightData);

//Bind method 
//134

const bookKlm = book.bind(klm);
bookKlm(354, 'John Smith');

const bookKlm567 = book.bind(klm, 567);
bookKlm567('Mag Smith');