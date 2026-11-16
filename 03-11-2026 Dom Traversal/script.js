
let parent = document.getElementById("parent");
let child1 = document.getElementById("child1");
let child3 = document.getElementById("child3");
let result = document.getElementById("result");

// Find Parent
document.getElementById("parentBtn").addEventListener("click", function () {
    let element = child1.parentElement;
    result.textContent = "Parent Element: " + element.id;
});

// Find Children
document.getElementById("childrenBtn").addEventListener("click", function () {
    result.textContent = "Total Children: " + parent.children.length;
});

// First Child (first .child element)
document.getElementById("firstBtn").addEventListener("click", function () {
    let first = parent.querySelector(".child");
    result.textContent = "First Child: " + first.textContent;
});

// Last Child
document.getElementById("lastBtn").addEventListener("click", function () {
    let last = parent.lastElementChild;
    result.textContent = "Last Child: " + last.textContent;
});

// Next Sibling
document.getElementById("nextBtn").addEventListener("click", function () {
    let next = child1.nextElementSibling;
    result.textContent = "Next Sibling: " + next.textContent;
});

// Previous Sibling
document.getElementById("previousBtn").addEventListener("click", function () {
    let previous = child3.previousElementSibling;
    result.textContent = "Previous Sibling: " + previous.textContent;
});

// Reset
document.getElementById("resetBtn").addEventListener("click", function () {
    result.textContent = "Click a button to explore DOM traversal.";
});
