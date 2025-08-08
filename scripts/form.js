const products = [
    { id: "prod1", name: "Product A" },
    { id: "prod2", name: "Product B" },
    { id: "prod3", name: "Product C" },
    { id: "prod4", name: "Product D" },
    { id: "prod5", name: "Product E" },
    { id: "prod6", name: "Product F" },
    { id: "prod7", name: "Product G" },
    { id: "prod8", name: "Product H" },
];

// Populate the product select field
function populateProducts() {
    const select = document.getElementById("product");
    products.forEach((product) => {
        const option = document.createElement("option");
        // Using product id as the value
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

populateProducts();

// Intercept form submission for page flip animation
const reviewForm = document.getElementById("review-form");
if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Add the animation class to trigger page flip
        document.body.classList.add("page-flip");

        // Wait for the animation to finish, then navigate
        setTimeout(() => {
            // Build query string from form data
            const formData = new FormData(this);
            const params = new URLSearchParams(formData).toString();
            window.location.href = `${this.action}?${params}`;
        }, 600);
    });
}