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
