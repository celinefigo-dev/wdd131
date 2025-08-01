document.addEventListener("DOMContentLoaded", () => {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const speed = parseFloat(document.getElementById("speed").textContent);
    const windChillElem = document.getElementById("windchill");

    const calculateWindChill = (t, s) => {
        return (
            13.12 +
            0.6215 * t -
            11.37 * Math.pow(s, 0.16) +
            0.3965 * t * Math.pow(s, 0.16)
        ).toFixed(2);
    };

    if (temp <= 40 && speed > 4.8) {
        windChillElem.textContent = `${calculateWindChill(temp, speed)} °C`;
    } else {
        windChillElem.textContent = "N/A";
    }
// Update the last modified date and current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});