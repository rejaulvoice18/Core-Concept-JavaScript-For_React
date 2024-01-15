// JSON
const person = {
    name: 'Abdul',
    age: 25
}

// console.log(JSON.stringify(person));

const date = JSON.stringify(person);
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);

//local storage
//localStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId');
console.log(userId);

localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsePerson = JSON.parse(storedPerson);

console.log(parsePerson.age);

const keys = Object.keys(parsePerson); //Object.keys() er madhome shudu key gula k neua jay ba use kora jay
console.log(keys);

const values = Object.values(parsePerson); // Object.values() er madhome shudhu value gula k o dhora jay;
console.log(values);

