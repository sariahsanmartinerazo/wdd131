const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = `${new Date().getFullYear()}`;
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const destinations = [
    {
        name: "New Zealand",
        continent: "Oceania",
        description: "A country famous for mountains, lakes, and outdoor adventures."
    },
    {
        name: "Japan",
        continent: "Asia",
        description: "A destination where ancient traditions meet modern cities."
    },
    {
        name: "Australia",
        continent: "Oceania",
        description: "A country known for beaches, wildlife, and unique landscapes."
    },
    {
        name: "Brazil",
        continent: "South America",
        description: "A country famous for its vibrant culture and natural beauty."
    }
];
