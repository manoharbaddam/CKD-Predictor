const inputs = document.querySelectorAll("input , select");
const paramText = document.getElementById("paramText");
const inputParameter = document.getElementById("inputParameter");
inputs.forEach(input => {
    input.addEventListener("focus", () => {

        const paramName = input.getAttribute("aria-label") || input.getAttribute("name") || "Parameter";
        const info = input.getAttribute("data-info");

        inputParameter.textContent = paramName ;;
        paramText.textContent = info || "No info available for this field.";
    });
});