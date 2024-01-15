// Programming er ponchorotno holo nichergula, 1-variable, 2-condition, 3-array, 4-loop, 5-function
// variable: let, const
let money = 20;
money = 12;
const name = 'kudus';

let isConfident = false;

const person = {
    name: 'kudus',
    age: 55,
    city: 'Dhaka'
}


const statement = `this person ${name} with age ${person.age}`;

// Condition
if(money > 20 && age >= 45){

}else{

}

if(money > 20 && age >= 45){
    console.log('My money is: ', 20 + 'My age is:', 45);
}
else{

}
// array
const numbers = [34, 23, 16];
const respected = ['Motiur', 'Jahangir'];
const products = [{name: 'laptop', price: 500}, {name: 'mobile', price: 600}];

//Array declare
const numbers2 = [34, 23, 16, 22, 88, 90];
const respected2 = ['Motiur', 'Jahangir', 'Ridwan', 'Kanon'];
const products2 = [{name: 'Karim', price: 500}, {name: 'mobile', price: 800}, {name: 'Rejaul', price: 10000}];

// loop: for lop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
}

// loop: for loop
for(let i = 0; i<numbers2.length; i++){
    const number = numbers[i];
}
// while loop
while(i < 10){
    text += "The number is: " + i;
    i++;
}
//do while loop
do{
    text += "The number is: " + i;
    i++;
}
while(i < 10);

// function: regular arrow
function add(num1, num2){
    return num1 + num2;
}

const result = add(45, 65);


// arrow function
const fiveTimes = num => num * 5;
const add2 = (num1, num2) => num1 + num2;
const doMath = (x, y) => {
    const sum = x + y;
    return sum * 2;
}

// arrow function

const fiveTimes2 = num => num * 5;
const add3 = (num1, num2) => num1 + num2;
const doMath2 = (x, y) => {
    const sum = x + y;
    return sum * 2;
}

