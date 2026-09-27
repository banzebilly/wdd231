//Babze Billy


let cultures = [];

export async function loadPlaceAndCultures() {

    try {

        const response = await fetch("data/culture.json");

        if (!response.ok) return;

        cultures = await response.json();

        displayPlacesAndCultures(cultures);

    } catch (error) {

        console.error("File cannot be found:", error);

    }
}


const displayPlacesAndCultures = (places) => {

    const culturesContainer = document.querySelector("#culture-grid");

    if (!culturesContainer) return;

    culturesContainer.innerHTML = "";

    places.forEach(place => {

        const cultureCard = document.createElement("article");

        cultureCard.classList.add("culture-card");

        cultureCard.innerHTML = `
            <img
                src="${place.image}"
                alt="${place.alt}"
                width="500"
                height="400"
                loading="lazy"
            >

            <div class="culture-card-content">

                <p class="culture-category">
                    ${place.category}
                </p>

                <h3>
                    ${place.title}
                </h3>

                <p>
                    ${place.description}
                </p>

            </div>
        `;

        culturesContainer.appendChild(cultureCard);

    });
};