// Decision Making

// if block / if condition
// billAmount = 1500.00;

// if (billAmount > 1000.00) {
//     console.log("Yay! You have 10% discount!");
// }

// if-else block / if-else condition
// billAmount = 1500.00;

// if (billAmount > 1000.00) {
//     console.log("Yay! You have 10% discount!");
// } else {
//     console.log("Sorry, no discount for you!");
// }

// nested if-else block / nested if-else condition
// 1. Bill amount greater than 1000
// 2. Coupon code is "NEWUSER"

// billAmount = 500.00;
// coupon = "NEWUSER";

// if (billAmount > 1000.00) {
//     if (coupon == "NEWUSER") {
//         console.log("Yay! You have 10% discount!");
//     } else {
//         console.log("Sorry, the coupon code is invalid");
//     }
// } else {
//     console.log("Sorry, no discount for you!");
// }

// if-else ladder / if-else ladder
// 1. Bill amount > 2000, discount is 10%
// 2. Bill amount > 1000, discount is 5%
// 3. Bill amount > 500, discount is 2%

// billAmount = 300.00;
// discount = 0;

// if (billAmount > 2000.00) {
//     discount = 10;
// } else if (billAmount > 1000.00) {
//     discount = 5;
// } else if (billAmount > 500.00) {
//     discount = 2;
// } else {
//     discount = 0;
// }

// console.log("Total discount applied : " + discount + "%");

// combined decision
// && (and)
// || (or)
// ! (not)
// billAmount = 500.00;
// coupon = "NEWUSER";

// if (billAmount > 1000.00 || coupon == "NEWUSER") {
//     console.log("You are eligible for discount");
// } else {
//     console.log("You are not eligible for discount");
// }

// if (!(billAmount > 1000.00)) {
//     console.log("You are eligible for discount");
// } else {
//     console.log("You are not eligible for discount");
// }

// number = 3;
// Switch case

// switch (new Date().getDay()) {
//     case 0: console.log("Today is Sunday"); break;
//     case 1: console.log("Today is Monday"); break;
//     case 2: console.log("Today is Tuesday"); break;
//     case 3: console.log("Today is Wednesday"); break;
//     case 4: console.log("Today is Thursday"); break;
//     case 5: console.log("Today is Friday"); break;
//     case 6: console.log("Today is Saturday"); break;
//     default: console.log("Something went wrong!");
// }

// Ternary Operator
// condition ? isTrue : isFalse;

// isLoggedIn = false;
// isLoggedIn ? console.log("Logged in!") : console.log("Not Logged in!");


// While Loop

// loop variable
// while(condition){
//     loop body
//     updation
// }

// count = 5;

// while (count < 10) {
//     console.log("Count is : " + count++);
//     if (count == 9) {
//         console.log("Special message!");
//     }
// }

// Functions

//function declaration
// function calculateTotal(num1, num2) {
//     //function body
//     total = num1 + num2;
//     return total;
// }

// result = calculateTotal(50, 60);

// if (result > 50) {
//     console.log("Greater than 50");
// } else {
//     console.log("Less than 50");
// }


// Food Menu
// function showMenu() {
//     console.log("\nHere's the menu : \n1. Pizza\n2. Pasta\n3. Noodles\n4. Exit");
//     choice = prompt();
// }


// while (choice >= 1 && choice <= 4) {
//     if (choice == 1) {
//         console.log("\nPizza on the way!");
//         showMenu();
//     } else if (choice == 2) {
//         console.log("\nPasta on the way!");
//         showMenu();
//     } else if (choice == 3) {
//         console.log("\nNoodles on the way!");
//         showMenu();
//     } else {
//         break;
//     }
// }


