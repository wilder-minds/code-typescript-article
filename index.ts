import * as moment from "moment";

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

type IWriteable= {
  write() : void;
}

class Person implements IPerson, IWriteable {

  // No longer necessary
  // firstName: string;
  // lastName: string;
  // age: number;

  constructor(public firstName: string, 
              public lastName: string, 
              public age: number) {
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.age = age;
  }

  get yearsSinceAdult() {
    return this.age - 18;
  }

  set yearsSinceAdult(value: number) {
    this.age = value + 18;
  }

  write(): void {
    console.log(this.firstName + " " + this.lastName);
  }
}

class Manager extends Person {
  reports = new Array<Person>();
}

// Fails
//let person = new Person(); // Fails
// Succeeds
let person = new Person("..,", "...", 53); 
let mgr = new Manager("..,", "...", 53);
mgr.reports.push(person);

let isPerson = mgr instanceof Person;   // true
let isManager = mgr instanceof Manager; //true
const adulting = person.yearsSinceAdult; // 35
person.yearsSinceAdult = 25;             
const age = person.age;                  // 43
person.firstName = "Shawn";
person.lastName = "Wildermuth";
person.write();

function seed(person: IPerson) {
  // use the IPerson interface
}

let date: moment.Moment = moment("2025-05-05");
