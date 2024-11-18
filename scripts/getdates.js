const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} Guilherme Prates Batista`;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;