let person = {
  name: "John",
  age: 65,
  salary: 50000,
  address: {
    city: "Toronto",
    country: "Canada",
  },
  isEmployed: true,
  spokenLanguages: ["English", "French", "Arabic"],
  displayDetails: function () {
    return (
      this.name +
      " lives in " +
      this.address.city +
      " and is " +
      this.age +
      " years old!"
    );
  },
  modifyDetails: function (age) {
    this.age = age;
    return true;
  },
  removeData: function (canDrive) {
    delete person[canDrive];
    return true;
  },
};

console.log(person.isEmployed);

person.canDrive = false;
person.age = 60;
console.log(person.displayDetails());

if (person.modifyDetails(50) == true) {
  console.log("Age modified. New age : " + person.age);
}

console.log(person);

if (person.removeData("canDrive") == true) {
  console.log("Driving details rmeoved!");
}

console.log(person);
