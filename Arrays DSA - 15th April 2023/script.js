// Arrays in JS

let arrayName = ["Jane", "John", "Bob", "Keller", "Alex"];
//                 0       1       2       3       4
console.log(arrayName[0]); // first item
console.log(arrayName[arrayName.length - 1]); //last item

// Modifying a value
arrayName[3] = "Mike";
console.log(arrayName);

// Insertion at the end
arrayName.push("Ross");
console.log(arrayName);

// Insertion at the beginning
arrayName.unshift("Peter");
console.log(arrayName);

// Removal at the end
let temp = arrayName.pop();
console.log(temp + " removed from the array");
console.log(arrayName);

// Removal at the beginning
let temp2 = arrayName.shift();
console.log(temp2 + " removed from the array");
console.log(arrayName);

// Delete at a specific index
delete arrayName[3];
console.log(arrayName);

// Convert array to string
console.log(arrayName.toString());

// Reverse an array
reversedArray = arrayName.reverse();
console.log(reversedArray);

// Sorting an array
console.log(arrayName.sort());
console.log(arrayName.sort().reverse());

// Multi-dimentsional Arrays
let arrayName2D = [
  ["Jane", "Doe"],
  ["John", "Random"],
  ["Bob", "Durant"],
  ["Keller", "Vinci"],
  ["Alex", "Caffrey"],
];

console.log(arrayName2D[2][1]);
