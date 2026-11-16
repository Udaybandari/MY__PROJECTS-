
        function print(message) {
            document.getElementById("output").textContent +=
                message + "\n";
        }

        function clearOutput() {
            document.getElementById("output").textContent = "";
        }


        // 1. SYNCHRONOUS VS ASYNCHRONOUS

        function runSyncAsync() {

            clearOutput();

            print("Start");

            setTimeout(() => {
                print("Asynchronous operation");
            }, 2000);

            print("End");

        }


        // 2. CALLBACKS

        function runCallbacks() {

            clearOutput();

            function greet(name, callback) {

                print("Hello " + name);

                callback();

            }

            function message() {
                print("Welcome to JavaScript");
            }

            greet("Uday", message);


            // Callback with parameters

            function calculate(a, b, callback) {

                let result = a + b;

                callback(result);

            }

            calculate(10, 20, function(result) {

                print("Addition: " + result);

            });
            // Asynchronous callback

            setTimeout(() => {

                print("Asynchronous Callback Executed");

            }, 1000);
            // Callback Hell
            setTimeout(() => {

                print("Step 1");

                setTimeout(() => {

                    print("Step 2");

                    setTimeout(() => {

                        print("Step 3");

                    }, 1000);

                }, 1000);

            }, 1000);

        }
        // 3. PROMISES
        function runPromises() {

            clearOutput();

            let promise = new Promise((resolve, reject) => {

                let success = true;

                if (success) {

                    resolve("Promise Fulfilled");

                } else {

                    reject("Promise Rejected");

                }

            });

            promise

                .then((result) => {

                    print(result);

                    return "Promise Chaining";

                })

                .then((result) => {

                    print(result);

                })

                .catch((error) => {

                    print("Error: " + error);

                })

                .finally(() => {

                    print("Promise Process Completed");

                });

        }
        // 4. PROMISE REJECTION
        function runRejectedPromise() {

            let promise = new Promise((resolve, reject) => {

                reject("Something went wrong");

            });

            promise.catch(error => print(error));

        }
        // 5. PROMISE METHODS

        function runPromiseMethods() {

            clearOutput();

            let p1 = new Promise(resolve => {
                setTimeout(() => resolve("Task 1"), 1000);
            });

            let p2 = new Promise(resolve => {
                setTimeout(() => resolve("Task 2"), 2000);
            });

            let p3 = new Promise((resolve, reject) => {
                setTimeout(() => reject("Task 3 Failed"), 1500);
            });


            // Promise.all()

            Promise.all([p1, p2])
                .then(result => {
                    print("Promise.all: " + result);
                })
                .catch(error => print(error));


            // Promise.allSettled()

            Promise.allSettled([p1, p2, p3])
                .then(result => {
                    print("Promise.allSettled: " +
                        JSON.stringify(result));
                });


            // Promise.race()

            Promise.race([p1, p2])
                .then(result => {
                    print("Promise.race: " + result);
                });


            // Promise.any()

            Promise.any([
                Promise.reject("Failed"),
                p2,
                p3
            ])
                .then(result => {
                    print("Promise.any: " + result);
                })
                .catch(error => print(error));


            // Promise.resolve()

            Promise.resolve("Already Resolved")
                .then(result => print(result));


            // Promise.reject()

            Promise.reject("Already Rejected")
                .catch(error => print(error));

        }


        // 6. ASYNC AND AWAIT
        function getData() {

            return new Promise((resolve, reject) => {

                setTimeout(() => {

                    resolve("Data Received Successfully");

                }, 2000);

            });

        }


        async function runAsyncAwait() {

            clearOutput();

            try {

                print("Starting...");

                let result = await getData();

                print(result);

                print("Completed");

            } catch (error) {

                print("Error: " + error.message);

            } finally {

                print("Process Finished");

            }

        }
        // 7. MULTIPLE ASYNC OPERATIONS
        async function multipleTasks() {

            let task1 = await getData();

            print(task1);

            let task2 = await getData();

            print(task2);

        }
        // 8. PARALLEL EXECUTION
        async function parallelTasks() { 

            let result = await Promise.all([
                getData(),
                getData()
            ]);

            print("Parallel: " + result);

        }
        // 9. FETCH API - GET REQUEST
        async function runFetch() {

            clearOutput();

            try {

                print("Fetching Users...");

                let response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("HTTP Error: " + response.status);
                }

                let data = await response.json();

                data.forEach(user => {

                    print(user.name + " - " + user.email);

                });

            } catch (error) {

                print("Fetch Error: " + error.message);

            } finally {

                print("Fetch Completed");

            }

        }


        // 10. FETCH API - POST REQUEST
        async function runPost() {

            clearOutput();

            try {

                let response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            name: "Uday",
                            email: "uday@example.com"
                        })
                    }
                );

                if (!response.ok) {
                    throw new Error("HTTP Error: " + response.status);
                }

                let data = await response.json();

                print("User Created:");

                print(JSON.stringify(data, null, 2));

            } catch (error) {

                print(error.message);

            }

        }
      
    
        // 11. SET TIMEOUT AND CLEAR TIMEOUT

        function runTimers() {

            clearOutput();

            let timeout = setTimeout(() => {

                print("Timeout Executed");

            }, 3000);


            // Cancel timeout

            clearTimeout(timeout);

            print("Timeout Cancelled");


            // SET INTERVAL

            let count = 0;

            let interval = setInterval(() => {

                count++;

                print("Interval: " + count);

                if (count === 5) {

                    clearInterval(interval);

                    print("Interval Stopped");

                }

            }, 1000);

        }


     

        // 13. PROMISE RESOLVE AND REJECT

        function promiseStates() {

            let pending = new Promise((resolve) => {

                setTimeout(() => {

                    resolve("Fulfilled");

                }, 2000);

            });

            pending.then(result => print(result));

        }
// Browser window dimensions
console.log(window.innerWidth);
console.log(window.innerHeight);

// Display alert
alert("Welcome!");

// Confirmation
let result = confirm("Are you sure?");

if (result) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

// Get user input
let name = prompt("Enter your name");

console.log(name);