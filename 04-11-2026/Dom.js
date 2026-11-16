
let parent = document.getElementById("parent");

// Create parent heading
parent.innerHTML = "<h2>Parent</h2>";

// Create and append
let a = document.createElement("p");
a.textContent = "Child Append";
parent.append(a);

// Create and prepend
let b = document.createElement("p");
b.textContent = "Child Prepend";
parent.prepend(b);

// Create before parent
let c = document.createElement("p");
c.textContent = "Child Before";
parent.before(c);

// Create after parent
let d = document.createElement("p");
d.textContent = "Child After";
parent.after(d);

// Insert before a specific child
let e = document.createElement("p");
e.textContent = "Insert Before";
parent.insertBefore(e, a);

// Remove using remove()
function remover() {
    e.remove();
}

// Remove using removeChild()
function removeChildElement() {
    if (b.parentElement === parent) {
        parent.removeChild(b);
    }
}

// Reload the original project
function resetPage() {
    location.reload();
}
