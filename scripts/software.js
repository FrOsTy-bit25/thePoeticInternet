document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("expandButton");
    const textBox = document.getElementById("textBox");

    button.addEventListener("click", function () {
        // Toggle visibility class on the text box
        if (textBox.classList.contains("hidden")) {
            textBox.classList.remove("hidden");
            textBox.classList.add("visible");
        } else {
            textBox.classList.remove("visible");
            textBox.classList.add("hidden");
        }
    });
});
