
// JAVASCRIPT ARRAYS 



// 1. CREATING AND ACCESSING ARRAYS
{
    let fruits = ["Apple", "Banana", "Mango", "Orange"];

    console.log(fruits[0]);          // Apple
    console.log(fruits[1]);          // Banana
    console.log(fruits.length);      // 4

    // Updating an element
    fruits[1] = "Grapes";

    // Checking array
    console.log(Array.isArray(fruits)); // true
}


// 2. ADDING ELEMENTS
{
    let numbers = [10, 20, 30];

    numbers.push(40);       // Add at end
    numbers.unshift(5);     // Add at beginning

    // Add at a specific position
    numbers.splice(2, 0, 15);

    console.log(numbers);
    // [5, 10, 15, 20, 30, 40]
}


// 3. FINDING ELEMENTS
{
    let numbers = [10, 20, 30, 40, 50];

    console.log(numbers.includes(30));      // true
    console.log(numbers.indexOf(30));       // 2
    console.log(numbers.lastIndexOf(30));   // 2

    // Find first matching element
    console.log(numbers.find(num => num > 25)); // 30

    // Find index of first matching element
    console.log(numbers.findIndex(num => num > 25)); // 2

    // Find last matching element (ES2023)
    console.log(numbers.findLast(num => num > 25)); // 50

    // Find last matching index (ES2023)
    console.log(numbers.findLastIndex(num => num > 25)); // 4
}


// 4. REMOVING ELEMENTS
{
    let numbers = [10, 20, 30, 40, 50];

    numbers.pop();          // Remove last
    numbers.shift();        // Remove first
    numbers.splice(1, 1);   // Remove specific element

    console.log(numbers);   // [20, 40]
}


// 5. REMOVING ALL ELEMENTS
{
    let numbers = [10, 20, 30];

    // Method 1
    numbers.length = 0;

    console.log(numbers); // []

    // Method 2
    let anotherArray = [10, 20, 30];

    anotherArray.splice(0, anotherArray.length);

    console.log(anotherArray); // []
}


// 6. COMBINING TWO ARRAYS
{
    let arr1 = [10, 20];
    let arr2 = [30, 40];

    // Using concat()
    let combined1 = arr1.concat(arr2);

    // Using spread operator
    let combined2 = [...arr1, ...arr2];

    console.log(combined1);
    console.log(combined2);
}


// 7. COPYING AN ARRAY
{
    let original = [10, 20, 30];

    // Using slice()
    let copy1 = original.slice();

    // Using spread operator
    let copy2 = [...original];

    // Using Array.from()
    let copy3 = Array.from(original);

    console.log(copy1);
    console.log(copy2);
    console.log(copy3);
}


// 8. SHALLOW COPY VS DEEP COPY
{
    // Shallow copy
    let original = [{ name: "Uday" }, { name: "Rahul" }];

    let shallowCopy = [...original];

    shallowCopy[0].name = "Arun";

    console.log(original[0].name);
    // Arun (nested object is shared)

    // Deep copy
    let original2 = [{ name: "Uday" }, { name: "Rahul" }];

    let deepCopy = structuredClone(original2);

    deepCopy[0].name = "Arun";

    console.log(original2[0].name);
    // Uday (original remains unchanged)
}


// 9. ITERATING AN ARRAY
{
    let fruits = ["Apple", "Banana", "Mango"];

    // Using for loop
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    // Using for...of
    for (let fruit of fruits) {
        console.log(fruit);
    }

    // Using forEach()
    fruits.forEach((fruit, index) => {
        console.log(index, fruit);
    })
}


// 10. JOIN METHOD
{
    let fruits = ["Apple", "Banana", "Mango"];

    let result = fruits.join(", ");

    console.log(result);
    // Apple, Banana, Mango
}


// 11. SORTING AN ARRAY
{
    let fruits = ["Mango", "Apple", "Banana"];

    fruits.sort();

    console.log(fruits);
    // ["Apple", "Banana", "Mango"]

    let numbers = [40, 10, 100, 20];

    // Ascending order
    numbers.sort((a, b) => a - b);

    console.log(numbers);
    // [10, 20, 40, 100]

    // Descending order
    numbers.sort((a, b) => b - a);

    console.log(numbers);
    // [100, 40, 20, 10]

    // Reverse array
    numbers.reverse();

    console.log(numbers);
}


// 12. TESTING ARRAY ELEMENTS - EVERY()
{
    let numbers = [10, 20, 30, 40];

    // Checks whether ALL elements satisfy condition
    let result = numbers.every(num => num > 5);

    console.log(result); // true
}


// 13. TESTING ARRAY ELEMENTS - SOME()
{
    let numbers = [10, 20, 30, 40];

    // Checks whether AT LEAST ONE element satisfies condition
    let result = numbers.some(num => num > 30);

    console.log(result); // true
}


// 14. FILTER METHOD
{
    let numbers = [10, 15, 20, 25, 30, 35];

    let result = numbers.filter(num => num > 20);

    console.log(result);
    // [25, 30, 35]
}


// 15. MAP METHOD
{
    let numbers = [1, 2, 3, 4, 5];

    // Transforms every element and returns a new array
    let result = numbers.map(num => num * 2);

    console.log(result);
    // [2, 4, 6, 8, 10]
}


// 16. REDUCE METHOD
{
    let numbers = [10, 20, 30, 40];

    // Calculate sum
    let total = numbers.reduce((sum, num) => {
        return sum + num;
    }, 0);

    console.log(total); // 100

    // Calculate product
    let product = numbers.reduce((result, num) => {
        return result * num;
    }, 1);

    console.log(product); // 240000
}


// 17. FLATTENING ARRAY - FLAT()
{
    let numbers = [1, 2, [3, 4], [5, 6]];

    let result = numbers.flat();

    console.log(result);
    // [1, 2, 3, 4, 5, 6]

    // Multiple nested levels
    let nested = [1, [2, [3, [4]]]];

    console.log(nested.flat(Infinity));
    // [1, 2, 3, 4]
}


// 18. FLATMAP()
{
    let numbers = [1, 2, 3];

    let result = numbers.flatMap(num => [num, num * 2]);

    console.log(result);
    // [1, 2, 2, 4, 3, 6]
}


// 19. REMOVING DUPLICATES USING SET
{
    let numbers = [10, 20, 10, 30, 20, 40];

    let uniqueNumbers = [...new Set(numbers)];

    console.log(uniqueNumbers);
    // [10, 20, 30, 40]
}


// 20. MAP() VS FOREACH()
{
    let numbers = [1, 2, 3];

    // map() returns a new array
    let result = numbers.map(num => num * 2);

    console.log(result);
    // [2, 4, 6]

    // forEach() returns undefined
    let output = numbers.forEach(num => {
        console.log(num * 2);
    });

    console.log(output); // undefined
}


// 21. ARRAY.FROM()
{
    // Convert string into array
    let result1 = Array.from("HELLO");

    console.log(result1);
    // ["H", "E", "L", "L", "O"]

    // Convert Set into array
    let result2 = Array.from(new Set([1, 2, 2, 3]));

    console.log(result2);
    // [1, 2, 3]

    // Using mapping function
    let result3 = Array.from([1, 2, 3], num => num * 2);

    console.log(result3);
    // [2, 4, 6]
}


// 22. ARRAY.ISARRAY()
{
    console.log(Array.isArray([1, 2, 3])); // true
    console.log(Array.isArray("Hello"));  // false
    console.log(Array.isArray({ a: 1 })); // false
}


// 23. SLICE() VS SPLICE()
{
    let numbers = [10, 20, 30, 40, 50];

    // slice(start, end)
    // Extracts without changing original
    let result1 = numbers.slice(1, 3);

    console.log(result1); // [20, 30]
    console.log(numbers); // Original unchanged

    // splice(start, deleteCount)
    // Removes elements and changes original
    let result2 = numbers.splice(1, 2);

    console.log(result2); // [20, 30]
    console.log(numbers); // [10, 40, 50]
}


// 24. ARRAY DESTRUCTURING
{
    let fruits = ["Apple", "Banana", "Mango"];

    let [first, second, third] = fruits;

    console.log(first);  // Apple
    console.log(second); // Banana
    console.log(third);  // Mango

    // Skipping elements
    let [a, , c] = fruits;

    console.log(a, c);

    // Default values
    let [x, y = "Orange"] = ["Apple"];

    console.log(x, y);
    // Apple Orange
}


// 25. SPREAD OPERATOR
{
    let arr1 = [10, 20, 30];

    // Copying
    let copy = [...arr1];

    // Combining
    let arr2 = [40, 50];

    let combined = [...arr1, ...arr2];

    // Adding elements
    let updated = [...arr1, 40];

    console.log(copy);
    console.log(combined);
    console.log(updated);
}


// 26. AT() METHOD
{
    let fruits = ["Apple", "Banana", "Mango"];

    console.log(fruits.at(0));  // Apple
    console.log(fruits.at(-1)); // Mango
}


// 27. FILL() METHOD
{
    let numbers = [1, 2, 3, 4];

    numbers.fill(0);

    console.log(numbers);
    // [0, 0, 0, 0]

    let values = [1, 2, 3, 4];

    values.fill(100, 1, 3);

    console.log(values);
    // [1, 100, 100, 4]
}


// 28. IMMUTABLE ARRAY METHODS (ES2023)
{
    let numbers = [30, 10, 20];

    // Sort without modifying original
    let sorted = numbers.toSorted((a, b) => a - b);

    console.log(sorted);  // [10, 20, 30]
    console.log(numbers); // [30, 10, 20]

    // Reverse without modifying original
    let reversed = numbers.toReversed();

    console.log(reversed); // [20, 10, 30]

    // Replace element without modifying original
    let updated = numbers.with(1, 100);

    console.log(updated); // [30, 100, 20]
    console.log(numbers); // [30, 10, 20]
}


// 29. PRACTICAL EXAMPLE - ARRAY OF OBJECTS
{
    let students = [
        { name: "Uday", marks: 85 },
        { name: "Rahul", marks: 65 },
        { name: "Arun", marks: 90 },
        { name: "Kiran", marks: 45 }
    ];

    // Get student names
    let names = students.map(student => student.name);

    console.log(names);

    // Get students who passed
    let passed = students.filter(student => student.marks >= 50);

    console.log(passed);

    // Find a particular student
    let student = students.find(student => student.name === "Uday");

    console.log(student);

    // Calculate total marks
    let total = students.reduce((sum, student) => {
        return sum + student.marks;
    }, 0);

    console.log(total); // 285

    // Check if all students passed
    let allPassed = students.every(student => student.marks >= 50);

    console.log(allPassed); // false

    // Check if at least one student scored above 90
    let hasHighScore = students.some(student => student.marks > 90);

    console.log(hasHighScore); // false
}



