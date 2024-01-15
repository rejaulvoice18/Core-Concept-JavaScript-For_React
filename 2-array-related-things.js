const numbers = [2, 4, 5, 7, 5];
const friends = ['Rafiq', 'Jabbar', 'Barkat'];
// array of objects
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'phone', price: 100},
    {id: 3, name: 'watch', price: 20},
    {id: 4, name: 'table', price: 80}
];

// map

const names = products.map(product => product.name);
const prices = products.map(pd => pd.price); // aita single line arrow function aita nije nije return kore
const prices2= products.map(pd => {
    return pd.price;
}); // multiline arrow function nije nije return kore nah, aitake return keyword er madhome return korte hoy

//forEach
products.forEach(product => console.log(product.name)); // forEach loop kuno kichu return kore nah, sorasori print kore fele.

// filter
const cheaper = products.filter(pd => pd.price < 100);

// console.log(cheaper);

// remove an item using filter

const remaining = products.filter(pd => pd.id != 3); // jei porduct gulur id number 3 na oi gula nia ekta notun array return korbe,
// means jei product er id number 3 take baad dye ekta notun array kora.

// console.log(remaining);


//find

const hasWatch = products.find(pd => pd.name === 'watch');// it will return only one match element
console.log(hasWatch);

const hasWatch2 = products.find(pd => pd.name === 'watch'); // it will return only one match element

// reduce


// includes


// push

// pop

// length

// indexOf

