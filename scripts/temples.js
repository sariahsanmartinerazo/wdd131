const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("lastModified");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
/*current copyright year*/
currentYear.textContent = new Date().getFullYear();
/*Last modified date*/
lastModified.textContent = `Last Modification: ${document.lastModified}`;
/*Open and close the mobile navigation*/
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open"); 
});