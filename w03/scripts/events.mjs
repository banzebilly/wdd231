export async function loadEvents() {
    try {
        const response = await fetch("data/events.json");

        if (!response.ok) {
            throw new Error("Could not load events.json");
        }

        const events = await response.json();

        const eventContainer =
            document.querySelector(".event-container");

        if (!eventContainer) return;

        eventContainer.innerHTML = "";

        events.forEach(event => {
            const eventCard = document.createElement("div");

            eventCard.classList.add("event-card");

            eventCard.innerHTML = `
                <div class="date">
                    <p>${event.day}</p>
                    <p>${event.month}</p>
                </div>

                <div class="event-info">
                    <h5>${event.category}</h5>
                    <h4>${event.title}</h4>
                    <p>${event.date}</p>

                    <div class="event-location">
                        <i class="fa-solid fa-location-dot"
                           aria-hidden="true"></i>
                        ${event.location}
                    </div>

                    <p>${event.description}</p>
                </div>
            `;

            eventContainer.appendChild(eventCard);
        });

    } catch (error) {
        console.error("Error loading events:", error);
    }
}