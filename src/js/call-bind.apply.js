const person = {
    name: 'Aishvarya Verma',
    age: 27,
    getDetails: function() {
        console.log(this)
        return this.name + ' ' + this.age
    }
};

const unbounded = person.getDetails
const bounded = unbounded.bind(person)
console.log(bounded())