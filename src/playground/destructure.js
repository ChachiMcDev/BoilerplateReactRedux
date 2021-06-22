
const person = {
    name: 'chachi',
    age: 100,
    location: {
        city: 'seattle',
        temp: undefined
    }

};

//destructuring the person object
const {name = 'Unknonw Name', age} = person;

//destructuring the location object
//giving temp the new name of daTemp and setting a default value
const {city, temp: daTemp = 105} = person.location
//const name = person.name;
//const age = person.age;



console.log(`${name} is ${age} years old. he lives in ${city} and it's a ${daTemp} degrizzles`);



const book = {
    title: 'Ego',
    author: 'charles action',
    publisher: {
        name: 'penguin',
        date: '10-05-1999'
    }
}


const {name: publisherName = 'Self-Published'} = book.publisher;


console.log(publisherName);


const address = ['front yard', 'side yard', 'backyard'];

const [yard1, , yard3] = address;

console.log(`you yards are ${yard1}, and ${yard3}`)



const item = ['coffee (iced)', '$2.00', '$2.50', '$3.00'];

const [drinkType, small, medium, large] = item;


console.log(`A medium ${drinkType} costs ${medium}`)