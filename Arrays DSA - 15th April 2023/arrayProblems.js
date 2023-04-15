// Q1. Find the smallest element in the array
//  -> using built in methods
// let numbers = [20, 45, 12, 4, 17, 80, 68];
// console.log(
//   numbers.sort(function (a, b) {
//     return a - b;
//   })[0]
// );

//  -> without using built in methods

// let smallest = numbers[0];
// for (let index = 1; index < numbers.length; index++) {
//   if (smallest > numbers[index]) {
//     smallest = numbers[index];
//   } else {
//     continue;
//   }
// }

// console.log(smallest);

// Q2. We are running an offer such that the least priced product in a cart is free. Write a script to find the lowest priced item in the cart and display the final amount after applying the discount.
// let cart = [10, 12, 15, 17, 5];

// let smallest = cart[0];
// for (let index = 1; index < cart.length; index++) {
//   if (smallest > cart[index]) {
//     smallest = cart[index];
//   } else {
//     continue;
//   }
// }

// let finalPrice = 0;
// for (let index = 0; index < cart.length; index++) {
//   finalPrice = finalPrice + cart[index];
// }

// console.log("Total cart Price : " + finalPrice);
// console.log("Discounted Price : " + (finalPrice - smallest));

// Q3. Write a script that reverses an array without using built-in methods.
// let numbers = [20, 45, 12, 4, 17, 80, 68];
// let reversedArray = [];

// let count = numbers.length;
// for (let index = 0; index < numbers.length; index++) {
//   count--;
//   reversedArray[count] = numbers[index];
// }

// console.log(reversedArray);

// for (let index = numbers.length - 1; index >= 0; index--) {
//   reversedArray.push(numbers[index]);
// }

// Q4. You are given a list of tracking IDs. You need to find a specific ID from the list and return it's position. Show an error if the ID doesn't exist.

// let trackingList = [1001, 2005, 1010, 1987, 6789, 1100];
// let tracker = 1111;
// let position = -1;

// for (let index = 0; index < trackingList.length; index++) {
//   if (trackingList[index] == tracker) {
//     position = index;
//   }
// }

// if (position != -1) {
//   console.log("Tracking ID found at position " + position);
// } else {
//   console.log("Tracking ID not found!");
// }
