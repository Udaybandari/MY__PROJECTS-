
console.log("Program Started");

// 1. CALLBACK
function getUser(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "Uday" };
        console.log("1. User data received");
        callback(user);
    }, 1000);
}

// 2. PROMISE
function getProducts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = ["Laptop", "Mobile", "Keyboard"];

            if (userId === 1) {
                console.log("2. Products received");
                resolve(products);
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}

// 3. ASYNC/AWAIT
async function displayData() {
    try {
        // Using callback
        getUser(async (user) => {
            console.log("User:", user);

            // Using Promise with await
            const products = await getProducts(user.id);

            console.log("Products:", products);
            console.log("All data loaded successfully");
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Execute function
displayData();

console.log("Program Ended");
