// Arrays

// users = ['Bob', 'Jane', 'Rio', 'John'];

// push - add a new value at the end
// users.push('Tokyo');
// console.log(users);
// pop - remove a value from the end
// console.log(users.pop());
// console.log(users);
//unshift - add a new value at the beginning
// users.unshift('Tokyo');
// console.log(users);
// shift - remove a value from the beginning
// console.log(users.shift());
// console.log(users);
//modifying the elements of the array
// users[1] = 'Julia';
// console.log(users);
//length of the array
// console.log(users.length);
//challenge - how can you access the last item in the array without knowing the total number of elements?
//users[users.length-1] // last item of the array
//deleting from any index
// delete users[1];
// console.log(users);
//add elements at any index
// users.splice(2, 0, 'Nancy', 'Julia');
// console.log(users);
//remove elements at any index
// users.splice(2, 1);
// console.log(users);
// challenge - how to do you remove 2 elements from the beginning of the array (splice
// users.splice(0,2)
// challenge - how to do you add 2 elements at the end of the array (splice)
// users.splice(users.length, 0, 'add1', 'add2');
// console.log(users);

// users = ['Bob', 'Jane', 'Rio', 'John', 'Austin'];

// split
// freeUsers = users.slice(1);
// console.log(users);
// console.log(freeUsers);

// merging
// paidUsers = ['Bob', 'Jane'];
// freeUsers = ['Rio', 'John'];
// allUsers = paidUsers.concat(freeUsers);
// console.log(allUsers);

// users = ['Bob', 'Jane', 'Rio', 'John', 'Austin'];

// sorting in ascending
// users.sort();
// console.log(users);

// sorting in descending
// users.sort();
// users.reverse();
// console.log(users);

// Objects : key-value pairs
// this keyword - refers to the current object
// user = {
//     name: 'John',
//     age: 29,
//     city: 'Los Angeles',
//     displayDetails: function () {
//         console.log(this.name + " stays in " + this.city + " and is " + this.age + " years old.");
//     }
// }

// console.log(user.city);
// insertion
// user.married = true;
// user.salary = 5000.00;
// console.log(user);
// user.displayDetails();

// ---------------------------------------------

// Car Rental Application

// let cars = [
//     {
//         color: 'black',
//         type: 'minivan',
//         capacity: 7
//     },
//     {
//         color: 'white',
//         type: 'sedan',
//         capacity: 4
//     },
//     {
//         color: 'red',
//         type: 'suv',
//         capacity: 5
//     }
// ];

// console.log(cars[0].type);

// cars.push(car);

// let car = {
//     color: 'black',
//     type: 'minivan',
//     capacity: 7
// }
// console.log(cars);

// cars.splice(2, 0, car);
// console.log(cars);


let cars = [
    {
        color: 'black',
        type: 'minivan',
        capacity: 7,
        status: true
    },
    {
        color: 'red',
        type: 'sedan',
        capacity: 4,
        status: true
    },
    {
        color: 'red',
        type: 'suv',
        capacity: 5,
        status: false
    }
];

// find a sedan
// let searchResult = cars.find(car => car.color === 'red');
// console.log(searchResult);

// find multiple cars
// results = [];
// cars.forEach(car => {
//     if (car.color === 'red') {
//         results.push(car);
//     }
// });

// console.log(results);

// filter

let results = cars.filter(car => car.color === 'red');
console.log(results);

// for in for objects
// for (color in cars[0]) {
//     console.log(cars[0][color]);
//     console.log(color);
// }

// let username = "Hello";
// for (char of username) {
//     console.log(char);
// }

// availableCount = 0;
// bookedCount = 0;
// find the number of cars that are available for rent
// cars.forEach(car => {
//     if (car.status == true) {
//         availableCount++;
//     } else {
//         bookedCount++;
//     }
// });

// if (availableCount == 1) {
//     console.log(availableCount + " car is available");
// } else {
//     console.log(availableCount + " cars are available");
// }

// console.log(bookedCount + " cars are booked");

//find the number of cars that are booked (status : false)

