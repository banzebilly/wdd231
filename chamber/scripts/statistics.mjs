//billy

let cityStatistics = [];

export async function cityStatisticsFunction() {
    try {
        const response = await fetch("data/city-statistics.json");

        if (!response.ok) {
            throw new Error("Could not load city statistics");
        }

        cityStatistics = await response.json();

        const statisticsContainer = document.querySelector("#statistics-grid");

        if (!statisticsContainer) return;

        statisticsContainer.innerHTML = "";

        cityStatistics.forEach(city => {
            const statisticsCard = document.createElement("article");

            statisticsCard.classList.add("stat-card");

            statisticsCard.innerHTML = `
                <h3>${city.value}</h3>
                <p>${city.label}</p>
            `;

            statisticsContainer.appendChild(statisticsCard);
        });

    } catch (error) {
        console.error("Error loading city statistics:", error);
    }
}

