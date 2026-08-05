const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;

    deleteButton.textContent = "❌";
    deleteButton.setAttribute("aria-label", `Remove ${item}`);

    li.append(deleteButton);
    list.append(li);
}

button.addEventListener("click", () => { 
    if (input.ariaValueMax.trim() !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}