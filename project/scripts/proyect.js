const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = `${new Date().getFullYear()}`;
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const destinations = [
    {
        name: "New Zealand",
        description: "Explore mountains, lakes, and outdoor adventures."
    },
    {
        name: "Japan",
        description: "Discover ancient traditions and modern cities."
    },
    {
        name: "Australia",
        description: "Experience beaches, wildlife, and natural landscapes."
    },
    {
        name: "Brazil",
        description: "Discover vibrant culture and natural beauty."
    }
];
