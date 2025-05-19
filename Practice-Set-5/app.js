// // 1))
// function delayedGreeting(name, time, func) {
//     console.log("Start");
//     setTimeout(() => {
//         // console.log(`Hello ,${name}`)
//         const message = `Hello ,${name}`
//         func(message)

//     }, time)

//     console.log("End");
// }

// delayedGreeting("Hammad Mustafa", 3000, function (message) {
//     console.log(message)
// })

// // 2))
// function checkEven(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number % 2 === 0) {
//                 resolve(`${number} is even`);
//             } else {
//                 reject(`${number} is odd`);
//             }
//         }, 1000);
//     });
// }
// checkEven(4)
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });


//   Task 3: Using async/await with Fetch. 
// 1. Create an async function called fetchUserData that: 
//  Fetches data from https://jsonplaceholder.typicode.com/users/6  
//  Extracts the username and email from the response 
//  Returns an object with these properties 

// async function getData() {
//     console.log("fetching user data....")
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/6')
//     const data = await res.json()
//     const { username, email } = data;
//     const obj = { username, email }
//     console.log("User data :", obj)


// }
// getData()


// 4)
// function fastTask() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Fast task done"), 500);
//     });
// }

// function mediumTask() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Medium task done"), 1000);
//     });
// }

// function slowTask() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Slow task done"), 2000);
//     });
// }

// Promise.all([fastTask(), mediumTask(), slowTask()])
//     .then((results) => {
//         console.log("All tasks completed:", results);
//     });

// Promise.race([fastTask(), mediumTask(), slowTask()])
//     .then((firstResult) => {
//         console.log("First task completed:", firstResult);
//     });




//   6))
function visitSite() {
    const userConfirmed = confirm("Do you want to visit Google?");

    if (userConfirmed) {
        
        window.open("https://www.google.com", "_blank");


        setTimeout(() => {
            alert("You went to Google.");
        }, 1000);

    } else {
        
        window.location.href = "https://www.bing.com";

        
        setTimeout(() => {
            alert("You went to Bing.");
        }, 1000);
    }
}