class Person {

  constructor(name = "", email = "", dob = new Date()) {
    this.name = name;
    this.dob = dob;
    this.email = email;
  }

  // This is a sample method
  sayHi() {
    console.log("Hi!");
  }

  // This is another sample method
  introduce() {
    this.sayHi();
    console.log("I am " + this.name);
  }

  //TODO: Getter+Setter

}

let person1 = new Person("Hanut S. Gusain", "hanut@ksdacllp.com", new Date("07/03/1989"));
console.log(person1);
console.log(person1.name);

let person2 = new Person("Ajay Nagar", "carry.minati@youtube.com");
person2.name = "Carryminati";
person2.introduce();
