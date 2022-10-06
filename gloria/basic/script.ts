
// Create a class constructor named Person
//  that should hold information about name, age, 
//  jobTitle and have a function that will return
//  a string “Hello there, My name is (name)
//  and I am (age) years old, and I am a (jobTitle)”

class Person {
    fname: string;
    age: number;
    jobTitle: string;

    constructor(fname: string, age: number, jobTitle: string;) {
        this.fname = fname;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    printInfo() {
        return `“Hello there, My name is ${this.fname} and I am ${this.age} years old, and I am a ${this.jobTitle}”`;
    }
}

// Create a class based on the Person class and add some other 
// properties like salary, jobLocation and a function that will 
// call the function that is inside the Person class and add 
// “and I get (salary) every month, and I work in (jobLocation)”

let person = new Person("Bledar",35,"software")
console.log(person.printInfo());

class Doctor extends Person {
    salary: number;
    jobLocation: string;

    constructor(fname: string, age: number, jobTitle: string, salary: number,jobLocation: string) {
        super(fname, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    printSalary() {
        return `“and I get ${this.salary} every month, and I work in ${this.jobLocation}”`
    }
}

let doctor = new Doctor("Bledar",35,"software",50000, "Manhattan")
console.log(doctor.printSalary());

