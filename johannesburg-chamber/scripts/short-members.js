













// SHORT MEMBERS ON THE HOME PAGE

let shortMembers = [];

const membersContainer = document.querySelector("#card-container");

async function loadShortMember() {
    try {
        // Get the JSON file
        const response = await fetch("data/short-members.json");

        // Check if the JSON file loaded correctly
        if (!response.ok) {
            throw new Error("Could not load short-members.json");
        }

        // Convert the JSON response into JavaScript data
        shortMembers = await response.json();

        // Loop through each member
        shortMembers.forEach(member => {

            // Create a new div for the card
            const card = document.createElement("div");

            // Add the card CSS class
            card.classList.add("card");

            // Create the card HTML
            card.innerHTML = `
                <img
                    src="images/${member.image}"
                    alt="${member.name}"
                    width="300"
                    height="150"
                    loading="lazy"
                >

                <div class="member-info">

                    <div class="btn-m">
                        <span class="badge">${member.category}</span>
                        <span class="badge">${member.membership}</span>
                    </div>

                    <h4>${member.name}</h4>

                    <p>${member.description}</p>

                    <a
                        href="${member.website}"
                        class="btn-site"
                        target="_blank"
                        rel="noopener"
                    >
                        <i class="fa-solid fa-globe" aria-hidden="true"></i>
                        ${member.website}
                    </a>

                </div>
            `;

            // Add the card to the page
            membersContainer.append(card);
        });

    } catch (error) {
        console.error("Error loading short members:", error);
    }
}

// Start loading the members
loadShortMember();








