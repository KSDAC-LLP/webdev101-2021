class Person {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  sayHi() {
    console.log(this.name + " says hi.");
  }
}

function NewPerson(personsName, personsSalary) {
  return {
    name: personsName,
    salary: personsSalary,
  };
}

function sayHi(person) {
  console.log(person.name + " says hi.");
}

function notAPureFunc(person) {
  person.name = person.name + ":";
  console.log(person.name + " says hi.");
}

function aPureFunc(person) {
  let name = person.name + ":";
  console.log(name + " says hi.");
}

let suresh = NewPerson("Suresh Babu", 30000);
let ramesh = NewPerson("Ramesh Babu", 10000);
sayHi(suresh);

notAPureFunc(suresh);
console.log(suresh.name);
aPureFunc(ramesh);
console.log(ramesh.name);


