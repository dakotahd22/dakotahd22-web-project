document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function() {
        const name = document.getElementById("nameInput").value;
        document.getElementById("message").textContent =
            "Hello " + name + "! Welcome to my webpage.";
    });
});