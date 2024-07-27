// Day 11: Promise and Async/Await
// Task / Activities:

// Activity 1 : Understanding Promise
// Task 1: Create a Promise that resolves with a message after a 2-second timeout and log the message to the console.

let myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
        console.log("resolve");
    }, 2000)
})


// Task 2: Create a Promise that rejects with an error message after a 2-seconde timeout and handle the error using .catch().

let myPromise1 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        rejected(new Error("This is an error message"))
    }, 2000)
})
myPromise1.catch((error) => {
    console.log(error);
})

// Activity 2: Chainnig Promises
// Task 3: Create a sequence of Promise that simulate fetching data from server. Chain the Promise to log messages in a specific order.



// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and the logs the resolved value.

let myPromise2 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("Promise resolved successfully")
    }, 4000)
})
async function start() {
    let result = await myPromise2;
    console.log(result);
    console.log("Async function completed");
}
start();
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

let myPromise3 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        rejected(new Error("Promise Rejected"));
    }, 6000)
})

async function handles() {
    try {
        let result = await myPromise3;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
handles();

// Activity 4: Fetching Data from an API
// Task 6 : Use the fetch API to get data from a public API and log the response data to the console using promises.

const URL = "https://freetestapi.com/api/v1/weathers";

const myPromise4 = new Promise((resolve, rejected) => {
    fetch(URL)
        .then(response => {
            if (!response) {
                throw new Error("Network response was not ok")
            }
            return response.json();
        }).then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(new Error("API FAILED: " + error.message));
        });
})
// myPromise4
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error.message);
//     });


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function api() {
    try {
        let result = await fetch(URL);
        if (!result) {
            throw new Error("Network response was not ok")
        }
        let data = await result.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch operation failed: ", error.message);
    }

}
api();

// Activity 5: Concurrent Promises
// Task 8: Use promise.all to wait for multiple promises to resolve and then log all their values.



// Task 9: Use Promise.race to log the  value of the first promise that resolves among multiple promises.