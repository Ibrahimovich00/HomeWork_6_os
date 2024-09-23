class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	print() {
		console.log(this.name, this.surname);
	}
}

const person1 = new Person('Ibrahim', 'Makambaev');
person1.print();
