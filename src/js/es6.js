class Person {
    constructor(name, yearOfBirth, work) {
        this.name = name;
        this.work = work;
        this.yearOfBirth = yearOfBirth;
    }

    age() {
        return new Date().getFullYear() - parseInt(this.yearOfBirth);
    }
}
const person1 = new Person('Aashu', 1993, 'Front end Developer')
const person2 = new Person('Pooja', 1994, 'Hoursewife')

// console.log(person1);
// console.log(person2);

// Object.keys()
var family = {
    f: 'k',
    m: 'S',
    w: 'P',
    d: 'S'
};

// console.log(Object.keys(family))