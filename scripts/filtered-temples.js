// Function to update footer
function updateFooter() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
}

//renderiza os templos
document.addEventListener("DOMContentLoaded", () => {
    renderTemples(); // Renderiza todos os templos ao carregar a página
    updateFooter();
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.classList.toggle('open');
});


//lista de templos
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-33711-main.jpg"
    },
    {
        templeName: "Manhattan New York",
        location: "New York City, New York, United States",
        dedicated: "2004, June, 13",
        area: 60850,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
    }
];

//chama a função para renderizar os templos
createTempleCard(temples);


const OldLink = document.querySelector("#old");

OldLink.addEventListener("click", () => {
    // Filtra os templos construídos antes de 1900
    createTempleCard(temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear(); // Extrai o ano da data de dedicação
        return dedicationYear < 1900; // Verifica se o ano é anterior a 1900
    }));
});

const NewLink = document.querySelector("#new");

NewLink.addEventListener("click", () => {
    // Filtra os templos construídos após 2000
    createTempleCard(temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear(); // Extrai o ano da data de dedicação
        return dedicationYear > 2000; // Verifica se o ano é posterior a 2000
    }));
});

const LargeLink = document.querySelector("#large");

LargeLink.addEventListener("click", () => {
    // Filtra os templos com área maior que 90.000 pés quadrados
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

const SmallLink = document.querySelector("#small");

SmallLink.addEventListener("click", () => {
    // Filtra os templos com área menor que 10.000 pés quadrados
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

const HomeLink = document.querySelector("#home");

HomeLink.addEventListener("click", () => {
    // Exibe todos os templos sem aplicar filtros
    createTempleCard(temples);
});

// Função para criar o cartão do templo
function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = ""; // Limpa os templos exibidos
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}


