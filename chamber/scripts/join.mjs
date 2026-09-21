
//to display membership levels

export async function loadMembershipLevels() {
    try {
        const response = await fetch("data/membership.json");

        if (!response.ok) {
            throw new Error("Could not load membership.json");
        }

        const memberships = await response.json();

        displayMembershipLevels(memberships);
    } catch (error) {
        console.error("Error loading membership levels:", error);
    }
}


function displayMembershipLevels(memberships) {
    const container = document.querySelector("#membership-grid");

    if (!container) return;

    container.innerHTML = "";

    memberships.forEach((membership) => {

        const card = document.createElement("article");

        card.classList.add("membership-card");

        if (membership.featured) {
            card.classList.add("featured");
        }

        card.innerHTML = `
            ${
                membership.featured
                    ? `<span class="popular">Most popular</span>`
                    : ""
            }

            <h3>${membership.name}</h3>

            <p class="membership-description">
                ${membership.description}
            </p>

            <p class="membership-price">
                ${membership.price}
                <span>per year</span>
            </p>

            <ul class="benefits">
                ${membership.benefits
                    .map(
                        (benefit) => `
                            <li>
                                <i class="fa-solid fa-check" aria-hidden="true"></i>
                                ${benefit}
                            </li>
                        `
                    )
                    .join("")}
            </ul>

            <a
                href="#application"
                class="membership-button"
                data-membership="${membership.value}"
            >
                Apply for ${membership.name}
            </a>
        `;

        container.appendChild(card);
    });

    setupMembershipButtons();
}




function setupMembershipButtons() {
    const buttons = document.querySelectorAll(".membership-button");

    const membershipSelect = document.querySelector("#membership");

    if (!membershipSelect) return;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedMembership =
                button.dataset.membership;

            membershipSelect.value = selectedMembership;
        });
    });
}


loadMembershipLevels();

