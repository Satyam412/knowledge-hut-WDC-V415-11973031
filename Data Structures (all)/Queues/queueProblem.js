// We are keeping a track of reservations made for an event at a hotel. We need to store the bookings as they come in and only the first 3 bookings will be confirmed. Display the confirmed bookings at the end. Add a total of 5 bookings.

// Hint : Store 5, display confirmed

// Each booking consists of the following : 1. Name of the person, 2. No of people, 3. Booking Date

let bookings = [];

function addBooking(booking) {
  bookings.push(booking);
}

function printConfirmed() {
  for (let index = 0; index < 3; index++) {
    console.log(bookings[index]);
  }
}

addBooking({ name: "John1", noOfPeople: 10, date: new Date() });
addBooking({ name: "John2", noOfPeople: 10, date: new Date() });
addBooking({ name: "John3", noOfPeople: 10, date: new Date() });
addBooking({ name: "John4", noOfPeople: 10, date: new Date() });
addBooking({ name: "John5", noOfPeople: 10, date: new Date() });
printConfirmed();
