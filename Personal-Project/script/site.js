// Atualiza o ano e a data da última modificação
const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `Ferrera 3D Studio © ${currentYear}`;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;

document.addEventListener('DOMContentLoaded', () => {
    // Function 2: Track user interaction and store their favorite project
    const projects = document.querySelectorAll('.second-grid img');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectName = project.alt;
            localStorage.setItem('favoriteProject', projectName);
            alert(`Your favorite project is saved as: ${projectName}`);
        });
    });

    // Conditionally display a message based on localStorage value
    const favoriteProject = localStorage.getItem('favoriteProject');
    if (favoriteProject) {
        const message = document.createElement('p');
        message.textContent = `Your favorite project: ${favoriteProject}`;

        // Ensure there's an element where the message can be appended
        const messageContainer = document.querySelector('#message-container');
        if (messageContainer) {
            messageContainer.appendChild(message);
        } else {
            document.body.appendChild(message); // Default to appending to body if container is missing
        }
    }
});

// Check localStorage availability
if (typeof(Storage) !== "undefined") {
    console.log('localStorage is available');
} else {
    console.log('localStorage is not available');
}