// 1))
function daysUntilNextBirthday(birthMonth, birthDay) {
    let today = new Date();
    let thisYear = today.getFullYear();

    // Create birthday date
    let birthday = new Date(thisYear, birthMonth - 1, birthDay);

    // If birthday is already passed this year, set to next year
    if (birthday < today) {
        birthday.setFullYear(thisYear + 1);
    }
    // Get difference in time
    let difference = birthday - today;
    // Convert time to days
    let daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    console.log("Days until next birthday:", daysLeft);
}

daysUntilNextBirthday(9, 22);


// 2))
let numbers = [];

for (let i = 0; i < 5; i++) {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
}

console.log("Random Numbers:", numbers);
console.log("Max Number:", Math.max(...numbers));
console.log("Min Number:", Math.min(...numbers));


// 3))
let today = new Date();

let day = today.getDate();        // Get day (1–31)
let month = today.getMonth() + 1; // Get month (0–11) + 1
let year = today.getFullYear();   // Get full year (e.g. 2025)

// Add leading 0 if day or month is less than 10
if (day < 10) {
    day = "0" + day;
}
if (month < 10) {
    month = "0" + month;
}

// date in DD/MM/YYYY format
console.log("DD/MM/YYYY:", day + "/" + month + "/" + year);

// date in MM/DD/YYYY format
console.log("MM/DD/YYYY:", month + "/" + day + "/" + year);



// 4)

let radius = Math.floor(Math.random() * 10) + 1;
let area = Math.PI * radius * radius;

console.log("Random Radius:", radius);
console.log("Area of Circle:", area.toFixed(2));
