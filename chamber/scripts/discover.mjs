
let districts = [];

export async function loadDistricts() {

    try {
        const response = await fetch("data/discover.json");

        if (!response.ok) return;

        districts = await response.json();

        displayDistricts(districts);

    } catch (error) {
        console.error("Something happened:", error);
    }
}


const displayDistricts = (districts) => {

    const districtContainer = document.querySelector("#district-grid");

    if (!districtContainer) return;

    districtContainer.innerHTML = "";

    districts.forEach(district => {

        const districtCard = document.createElement("article");

        districtCard.classList.add("district-card");

        districtCard.innerHTML = `
            <img
                src="${district.image}"
                alt="${district.location}"
                width="400"
                height="270"
                                    

                loading="lazy"
            >

            <div class="district-card-content">

                <p class="district-category">
                    ${district.category}
                </p>

                <h3>
                    ${district.name}
                </h3>

                <p>
                    ${district.description}
                </p>

                <a href="index.html">
                    Explore
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>
        `;

        districtContainer.appendChild(districtCard);
    });
};
