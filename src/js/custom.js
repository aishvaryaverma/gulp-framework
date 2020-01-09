class Person {
    constructor(name, yearOfBirth, work) {
        this.name = name;
        this.work = work;
        this.yearOfBirth = yearOfBirth;
    }

    age() {
        return new Date().getFullYear() - parseInt(yearOfBirth);
    }
}

console.log(new Person('Aashu', 1993, 'Front end Developer'));
console.log(new Person('Pooja', 1994, 'Hoursewife'));