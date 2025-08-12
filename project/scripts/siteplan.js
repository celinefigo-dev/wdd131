document.addEventListener("DOMContentLoaded", () => {
    // Donation form handler
    const form = document.getElementById("donationForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const amount = form.amount.value.trim();

            if (!name || !email || !amount || isNaN(amount) || Number(amount) <= 0) {
                alert("Please fill out the form correctly.");
                return;
            }

            // Save donor info in localStorage
            localStorage.setItem("donorName", name);
            localStorage.setItem("donorEmail", email);
            localStorage.setItem("donationAmount", amount);

            // Show thank you message using template literals
            const thankYou = document.getElementById("thankYouMessage");
            thankYou.textContent = `Thank you, ${name}, for your generous donation of $${amount}!`;

            // Reset form
            form.reset();
        });

    }
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    function toggleMenu() {
        document.getElementById("nav-links").classList.toggle("show-menu");
    };


});
