// array destructuring
const numbers = [44, 19, 100, 587, 4];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [54, 92];
const [x, y] = numbers;

console.log(x, y);

function boxIfy(num1){
    return [num1, num1 + 5];
}

// const boxed = boxIfy(8);
const [box1, box2] = boxIfy(8);
console.log(box1, box2);

// Object Destructuring

// const person = {name: 'Rahim', age: 25};

// console.log(person.name, person.age)
// console.log(person.name, person.age)
// console.log(person.name, person.age)
const persion = {id: 2, money: 34, name: 'Rahim', age: 25};
const {name, age} = person //object destructuring korar somoy variable name object er key name er sathe mil rekhe likhte hobe

console.log(name, age);
console.log(name, age);
console.log(name, age);
console.log(name, age);

// create object shortcut
const one = 25;
const two = 35;
const obj ={x: x, y: y};
const obj2 = {one, two};
console.log(obj2);

// new array using three dots
// numbers.push(56);
const newNumbers = [...numbers, 56];