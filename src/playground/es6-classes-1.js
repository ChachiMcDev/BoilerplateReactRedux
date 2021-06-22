class Person {
    constructor(firstname = 'Anon', age = 0) {
        this.firstname = firstname;
        this.age = age;
    }
    getGreeting() {
        return `herror I am ${this.firstname}`
    }
    getDescription() {
        return `${this.firstname} is ${this.age} years old`
    }

}


class Student extends Person {
    constructor(firstname, age, inschool, classlist = [], major) {
        super(firstname, age)
        this.major = major;
        this.inschool = inschool;
        this.classlist = classlist;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            return description += ` and their major is ${this.major}`
        }
        return description;

    }
}


class Traveler extends Person {
    constructor(firstname, age, location) {
        super(firstname, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.location) {
            return `${greeting} I am living it up in ${this.location}`
        }
        return greeting;
    }
}

const me = new Person('chachimccool', 33);
const me2 = new Person('red');
const student = new Student('chachi', 44, false, ['math', 'science', 'english'], 'hardnox')

console.log(me.getDescription());
console.log(student.getDescription());

const traveler1 = new Traveler('chuckers', 55, 'Portland');
const traveler2 = new Traveler('chuckers', 59);

console.log(traveler1.getGreeting());
console.log(traveler2.getGreeting());