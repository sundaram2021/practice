document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const keys = document.querySelectorAll(".keys button");

    keys.forEach(key => {
        key.addEventListener("click", () => {
            if (key.textContent === "=") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else if (key.textContent === "C") {
                display.value = "";
            } else if (key.textContent === "Del") {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += key.textContent;
            }
        });
    });
});
