
// 1. READING DOM PROPERTIES


console.log("1. READING DOM PROPERTIES");

let heading = document.getElementById("heading");
let para = document.getElementById("para");
let username = document.getElementById("username");

console.log(heading.innerHTML);
console.log(para.innerText);
console.log(para.textContent);
console.log(para.id);
console.log(para.className);
console.log(username.value);



// 2. SELECTING DOM ELEMENTS

console.log("2. SELECTING DOM ELEMENTS");

// By ID
let element1 = document.getElementById("heading");

// By Class
let element2 = document.getElementsByClassName("item");

// By Tag
let element3 = document.getElementsByTagName("p");

// querySelector
let element4 = document.querySelector(".item");

// querySelectorAll
let element5 = document.querySelectorAll(".item");

console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);
console.log(element5);

// 3. DOM TRAVERSING

    
console.log("3. DOM TRAVERSING");

let middle = document.getElementById("middle");

console.log(middle.parentElement);

console.log(middle.parentElement.children);

console.log(middle.previousElementSibling);

console.log(middle.nextElementSibling);

console.log(middle.parentElement.firstElementChild);

console.log(middle.parentElement.lastElementChild);

// 4. ADDING DOM ELEMENTS


console.log("4. ADDING DOM ELEMENTS");

let container = document.getElementById("container");
let newPara = document.createElement("p");
newPara.textContent = "New Paragraph Added!";
container.appendChild(newPara);


// append()
container.append(" Extra text");

// prepend()
let firstPara = document.createElement("p");
firstPara.textContent = "Prepended Paragraph";

container.prepend(firstPara);


// before()
let beforePara = document.createElement("p");
beforePara.textContent = "Before Original Paragraph";

container.before(beforePara);


// after()
let afterPara = document.createElement("p");
afterPara.textContent = "After Container";

container.after(afterPara);



// 5. REMOVING DOM ELEMENTS


console.log("5. REMOVING DOM ELEMENTS");

// Remove a specific element
let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function() {

    let lastPara = container.querySelector("p");

    if (lastPara) {
        lastPara.remove();
    }

});


// 6. REPLACING DOM ELEMENTS


console.log("6. REPLACING DOM ELEMENTS");

let replaceBtn = document.getElementById("replaceBtn");

replaceBtn.addEventListener("click", function() {

    let oldPara = document.getElementById("oldPara");

    if (oldPara) {
        let newElement = document.createElement("h3");

        newElement.textContent = "Paragraph Replaced!";

        oldPara.replaceWith(newElement);
    }

});


// 7. DOM EVENTS - CLICK EVENT


console.log("7. DOM EVENTS");

let clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function() {

    alert("Button Clicked Successfully!");

});

// 8. INPUT EVENT

let eventInput = document.getElementById("eventInput");

let output = document.getElementById("output");

eventInput.addEventListener("input", function(event) {

    output.textContent = "You typed: " + event.target.value;

});
let button = document.getElementById("bttn");

button.addEventListener("click", function() {

    document.getElementById("hs").innerText =
        "Welcome to JavaScript";

});
let btn = document.getElementById("bttn");

btn.addEventListener("click", function() {
    console.log("Button Clicked");
});
btn.addEventListener("dblclick", function() {
    console.log("Button Double Clicked");
});
let box = document.getElementById("box");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "yellow";
});
document.addEventListener("keydown", function() {
    console.log("Key Pressed");
});
// 9. CSS MANIPULATION


console.log("9. CSS MANIPULATION");

let stylePara = document.getElementById("stylePara");

let styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", function() {

    stylePara.style.color = "red";

    stylePara.style.fontSize = "25px";

    stylePara.style.backgroundColor = "yellow";

});


// 10. CLASSLIST MANIPULATION


let classBtn = document.getElementById("classBtn");

classBtn.addEventListener("click", function() {

    stylePara.classList.toggle("highlight");

});



// 11. ATTRIBUTE MANIPULATION


console.log("11. ATTRIBUTE MANIPULATION");

let input = document.getElementById("username");

console.log(input.getAttribute("value"));

input.setAttribute("placeholder", "Enter username");

console.log(input.hasAttribute("placeholder"));


// 12. DOM EVENT OBJECT


clickBtn.addEventListener("dblclick", function(event) {

    console.log("Double Clicked!");

    console.log(event.target);

});



// 13. DOM CONTENT LOADED


document.addEventListener("DOMContentLoaded", function() {

    console.log("HTML document has been loaded!");

});

console.log("DOM Practice Completed!");
