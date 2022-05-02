"use strict";
class Person {
    // No longer necessary
    // firstName: string;
    // lastName: string;
    // age: number;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }
    get yearsSinceAdult() {
        return this.age - 18;
    }
    set yearsSinceAdult(value) {
        this.age = value + 18;
    }
    write() {
        console.log(this.firstName + " " + this.lastName);
    }
}
class Manager extends Person {
    constructor() {
        super(...arguments);
        this.reports = new Array();
    }
}
// Fails
//let person = new Person(); // Fails
// Succeeds
let person = new Person("..,", "...", 53);
let mgr = new Manager("..,", "...", 53);
mgr.reports.push(person);
let isPerson = mgr instanceof Person; // true
let isManager = mgr instanceof Manager; //true
const adulting = person.yearsSinceAdult; // 35
person.yearsSinceAdult = 25;
const age = person.age; // 43
person.firstName = "Shawn";
person.lastName = "Wildermuth";
person.write();
function seed(person) {
    // use the IPerson interface
}
// let isPerson = person instanceof Person;
// // Using an ellipse for consiseness
// function formatName(...) : string | null {
//   if (!firstName || !lastName) return null;
//   return `${lastName}, ${firstName}`;
// }
// let fullName = formatName("Shawn", "Wildermuth");
