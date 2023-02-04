// const person = {
//     name:"John",
//     age:56,
//     isEmployed:true,
//     address:"46, Street, City - 560000",
//     displayData : function(){
//         console.log("Hi, my name is " + this.name +" and I am " + this.age+ " years old. I currently live at : " + this.address);
//     }
// }

// person.displayData();

class Person{
    tax = 0.05;
    constructor(name,age,isEmployed){
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
    }
    showDetails(){
        console.log("Hi, my name is " + this.name +" and I am " + this.age+ " years old.");
    }
}

class Employee extends Person{
    constructor(name,age,isEmployed,salary){
        super(name,age,isEmployed);
        this.salary = salary;
    }
    calculateSalary(){
        console.log("Hi, your salary is : "+this.salary);
    }
}

let john = new Employee("john", 56, true, 50000.00);
john.showDetails();
john.calculateSalary();

let jane = new Person("jane", 36, false);
jane.showDetails();
