const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const destinations = [
    {
        id: "new-zealand",
        name: "New Zealand",
        continent: "Oceania",
        description: "A country famous for mountains, lakes, and outdoor adventures.",
        transportation: "Renting a car is a great option for exploring the countryside. Buses and domestic flights are also available.",
        budget: "$80–$150 USD per day for accommodation, food, and transportation.",
        safety: "New Zealand is generally very safe. Follow hiking guidelines and check the weather before outdoor activities.",
        culturalTip: "Respect Māori culture and learn a few basic words such as 'Kia ora', which means hello."
    },
    {
        id: "japan",
        name: "Japan",
        continent: "Asia",
        description: "A destination where ancient traditions meet modern cities.",
        transportation: "Trains are one of the best ways to travel around Japan. The Shinkansen is useful for traveling between major cities.",
        budget: "$80–$150 USD per day depending on accommodation and activities.",
        safety: "Japan is generally very safe. Keep your belongings secure and follow local rules, especially on public transportation.",
        culturalTip: "Be respectful in temples and shrines. In some places, you should remove your shoes before entering."
    },
    {
        id: "australia",
        name: "Australia",
        continent: "Oceania",
        description: "A country known for beaches, wildlife, and unique landscapes.",
        transportation: "Public transportation works well in major cities. Renting a car is useful for longer road trips.",
        budget: "$100–$180 USD per day depending on the city and activities.",
        safety: "Pay attention to beach warnings, sun protection, and wildlife safety guidelines.",
        culturalTip: "Respect Aboriginal and Torres Strait Islander cultures and follow local environmental rules."
    },
    {
        id: "brazil",
        name: "Brazil",
        continent: "South America",
        description: "A country famous for its vibrant culture and natural beauty.",
        transportation: "Buses and domestic flights are common ways to travel between cities. Public transportation is available in major cities.",
        budget: "$40–$100 USD per day depending on the destination and activities.",
        safety: "Stay aware of your surroundings, especially in crowded tourist areas, and keep valuables secure.",
        culturalTip: "Brazilian culture is very social and welcoming. Learning a few Portuguese phrases can make your trip more enjoyable."
    }
];

const favoriteDestination = document.querySelector("#favoriteDestination");
const saveFavorite = document.querySelector("#saveFavorite");
const favoriteMessage = document.querySelector("#favoriteMessage");
const travelTips = document.querySelector("#travelTips");

favoriteDestination.addEventListener("change", displayTravelTips);

function displayTravelTips() {
    const selectedValue = favoriteDestination.value;

    if (selectedValue === "") {
        travelTips.innerHTML = `
            <h3>Travel Tips</h3>
            <p>Select a destination to see helpful travel tips.</p>
        `;
        return;
    }

    const destination = destinations.find(
        item => item.id === selectedValue
    );

    if (destination) {
        travelTips.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>

            <div class="tip">
                <h4>🚆 Transportation</h4>
                <p>${destination.transportation}</p>
            </div>

            <div class="tip">
                <h4>💰 Budget</h4>
                <p>${destination.budget}</p>
            </div>

            <div class="tip">
                <h4>🛡️ Safety</h4>
                <p>${destination.safety}</p>
            </div>

            <div class="tip">
                <h4>🎎 Cultural Tip</h4>
                <p>${destination.culturalTip}</p>
            </div>
        `;
    }
}

saveFavorite.addEventListener("click", () => {
    const selectedValue = favoriteDestination.value;

    if (selectedValue === "") {
        favoriteMessage.textContent = "Please select a destination first.";
        return;
    }

    localStorage.setItem("favoriteDestination", selectedValue);

    const selectedDestination = destinations.find(
        item => item.id === selectedValue
    );

    favoriteMessage.textContent =
        `${selectedDestination.name} has been saved as your favorite destination!`;
});

