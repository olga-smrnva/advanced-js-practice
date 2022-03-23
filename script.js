'use strict'

//Advanded Functions
//131

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