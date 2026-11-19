let menuBtn = document.getElementById("menuBtn");
let navLinks = document.querySelector(".navbar ul");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});  
let arr=[];
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill all fields!";
        formMessage.style.color = "red";
    } else {
        let contacts={
            name:name,
            email:email,
            message:message
        }
        arr.push(contacts);
        console.log(contacts)
        formMessage.textContent = "Thank you! Form submitted successfully.";
        formMessage.style.color = "green";
        contactForm.reset();
    }
});
