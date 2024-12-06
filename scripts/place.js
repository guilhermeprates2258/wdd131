// Function to calculate the windchill factor
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return Math.round(
            13.12 + 
            0.6215 * temperature - 
            11.37 * Math.pow(windSpeed, 0.16) + 
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        );
    } else {
        return "N/A";
    }
}

// Update current year and last modified date in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static values for demonstration
const temperature = 8; // Celsius
const windSpeed = 4.9; // km/h

// Calculate and display wind chill
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill").textContent = windChill;
