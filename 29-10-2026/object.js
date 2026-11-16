
// 1. CREATING AN OBJECT


console.log("1. CREATING AN OBJECT");

let student = {
    name: "Uday",
    age: 22,
    city: "Warangal",
    course: "JavaScript",
    isCompleted: true
};

console.log(student);


// 2. ACCESSING OBJECT PROPERTIES


console.log("\n2. ACCESSING OBJECT PROPERTIES");

console.log(student.name);       // Dot notation
console.log(student["age"]);     // Bracket notation
console.log(student.city);


// 3. UPDATING OBJECT PROPERTIES


console.log("\n3. UPDATING OBJECT PROPERTIES");

student.age = 23;
student.city = "Hyderabad";

console.log(student);


// 4. ADDING NEW PROPERTIES


console.log("\n4. ADDING NEW PROPERTIES");

student.email = "uday@gmail.com";
student.mobile = 9876543210;

console.log(student);



// 5. DELETING OBJECT PROPERTIES


console.log("\n5. DELETING OBJECT PROPERTIES");

delete student.mobile;

console.log(student);


// 6. OBJECT METHODS


console.log("\n6. OBJECT METHODS");

let person = {
    name: "Uday",
    age: 22,

    greet: function () {
        console.log("Hello, Welcome!");
    },

    introduce() {
        console.log("My name is " + this.name);
    }
};

person.greet();
person.introduce();


// 7. THIS KEYWORD


console.log("\n7. THIS KEYWORD");

let employee = {
    name: "Rahul",
    salary: 30000,

    displayDetails() {
        console.log("Employee Name:", this.name);
        console.log("Employee Salary:", this.salary);
    }
};

employee.displayDetails();


// 8. NESTED OBJECTS


console.log("\n8. NESTED OBJECTS");

let user = {
    name: "Uday",
    age: 22,

    address: {
        city: "Warangal",
        state: "Telangana",
        country: "India"
    }
};

console.log(user.address);
console.log(user.address.city);
console.log(user.address.state);


// 9. ARRAY OF OBJECTS


console.log("\n9. ARRAY OF OBJECTS");

let students = [
    { name: "Uday", age: 22 },
    { name: "Rahul", age: 21 },
    { name: "Arun", age: 23 }
];

console.log(students);

console.log(students[0].name);
console.log(students[1].age);

students.forEach(function (student) {
    console.log(student.name, student.age);
});


// 10. OBJECT.KEYS()


console.log("\n10. OBJECT.KEYS()");

console.log(Object.keys(student));

// 11. OBJECT.VALUES()


console.log("\n11. OBJECT.VALUES()");

console.log(Object.values(student));



// 12. OBJECT.ENTRIES()

console.log("\n12. OBJECT.ENTRIES()");

console.log(Object.entries(student));



// 13. CHECKING PROPERTY EXISTENCE


console.log("\n13. CHECKING PROPERTY EXISTENCE");

console.log("name" in student);

console.log(student.hasOwnProperty("age"));

console.log("mobile" in student);


// 14. OBJECT DESTRUCTURING


console.log("\n14. OBJECT DESTRUCTURING");

let personDetails = {
    name: "Uday",
    age: 22,
    city: "Hyderabad"
};

let { name, age, city } = personDetails;

console.log(name);
console.log(age);
console.log(city);



// 15. RENAMING DURING DESTRUCTURING


console.log("\n15. RENAMING DURING DESTRUCTURING");

let { name: studentName, age: studentAge } = personDetails;

console.log(studentName);
console.log(studentAge);


// 16. DEFAULT VALUES IN DESTRUCTURING


console.log("\n16. DEFAULT VALUES");

let { course = "HTML" } = personDetails;

console.log(course);


// 17. SPREAD OPERATOR - COPYING OBJECT


console.log("\n17. SPREAD OPERATOR");

let original = {
    name: "Uday",
    age: 22
};

let copied = { ...original };

console.log(copied);


// ========================================
// 18. COMBINING OBJECTS
// ========================================

console.log("\n18. COMBINING OBJECTS");

let personalDetails = {
    name: "Uday",
    age: 22
};

let professionalDetails = {
    course: "JavaScript",
    experience: "Beginner"
};

let combined = {
    ...personalDetails,
    ...professionalDetails
};

console.log(combined);


// ========================================
// 19. OBJECT.ASSIGN()
// ========================================

console.log("\n19. OBJECT.ASSIGN()");

let obj1 = { name: "Uday" };
let obj2 = { age: 22 };

let mergedObject = Object.assign({}, obj1, obj2);

console.log(mergedObject);


// ========================================
// 20. OBJECT.FREEZE()
// ========================================

console.log("\n20. OBJECT.FREEZE()");

let frozenObject = {
    name: "Uday",
    age: 22
};

Object.freeze(frozenObject);

frozenObject.age = 25;
frozenObject.city = "Warangal";

console.log(frozenObject);
console.log(Object.isFrozen(frozenObject));


// ========================================
// 21. OBJECT.SEAL()
// ========================================

console.log("\n21. OBJECT.SEAL()");

let sealedObject = {
    name: "Uday",
    age: 22
};

Object.seal(sealedObject);

sealedObject.age = 25;       // Allowed
sealedObject.city = "Hyd";  // Not allowed
delete sealedObject.name;   // Not allowed

console.log(sealedObject);
console.log(Object.isSealed(sealedObject));


// ========================================
// 22. FOR...IN LOOP
// ========================================

console.log("\n22. FOR...IN LOOP");

let car = {
    brand: "Toyota",
    model: "Innova",
    year: 2024
};

for (let key in car) {
    console.log(key, ":", car[key]);
}


// ========================================
// 23. OPTIONAL CHAINING
// ========================================

console.log("\n23. OPTIONAL CHAINING");

let userDetails = {
    name: "Uday",
    address: {
        city: "Warangal"
    }
};

console.log(userDetails.address?.city);
console.log(userDetails.contact?.phone);


// ========================================
// 24. COMPUTED PROPERTY NAMES
// ========================================

console.log("\n24. COMPUTED PROPERTY NAMES");

let propertyName = "email";

let account = {
    name: "Uday",
    [propertyName]: "uday@gmail.com"
};

console.log(account);


// ========================================
// 25. PROPERTY SHORTHAND
// ========================================

console.log("\n25. PROPERTY SHORTHAND");

let productName = "Laptop";
let productPrice = 50000;

let product = {
    productName,
    productPrice
};

console.log(product);


// ========================================
// 26. OBJECT PROPERTY DESCRIPTORS
// ========================================

console.log("\n26. PROPERTY DESCRIPTORS");

let book = {
    title: "JavaScript Basics"
};

console.log(Object.getOwnPropertyDescriptor(book, "title"));


// ========================================
// 27. OBJECT.CREATE()
// ========================================

console.log("\n27. OBJECT.CREATE()");

let personPrototype = {
    greet() {
        console.log("Hello from prototype!");
    }
};

let newPerson = Object.create(personPrototype);

newPerson.name = "Uday";

console.log(newPerson.name);
newPerson.greet();


// ========================================
// 28. OBJECT.PROTOTYPE
// ========================================

console.log("\n28. OBJECT PROTOTYPE");

console.log(Object.getPrototypeOf(newPerson));


// ========================================
// 29. FACTORY FUNCTION
// ========================================

console.log("\n29. FACTORY FUNCTION");

function createStudent(name, age) {
    return {
        name,
        age,

        display() {
            console.log(this.name, this.age);
        }
    };
}

let student1 = createStudent("Uday", 22);
let student2 = createStudent("Rahul", 21);

student1.display();
student2.display();


// ========================================
// 30. OBJECT INSIDE ANOTHER OBJECT
// ========================================

console.log("\n30. COMPLETE NESTED OBJECT");

let company = {
    companyName: "ABC Technologies",

    employee: {
        name: "Uday",
        role: "Developer",

        skills: {
            frontend: "JavaScript",
            backend: "Node.js"
        }
    }
};

console.log(company.employee.name);
console.log(company.employee.skills.frontend);

console.log("\nALL OBJECT CONCEPTS COMPLETED!");
