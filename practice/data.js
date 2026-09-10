
const members = [
    {
        name: "21st Century",
        category: "professional",
        membership: "gold",
        address: "12 Bolton Road, Rosebank, Johannesburg, 2132",
        phone: "011 447 0306",
        website: "https://www.21century.co.za/",
        description: "Professional property and investment services.",
        image: "21-century.webp"
    },

    {
        name: "Nedbank",
        category: "finance",
        membership: "gold",
        address: "135 Rivonia Road, Sandown, Sandton, 2196",
        phone: "011 294 4444",
        website: "https://www.nedbank.co.za/",
        description: "Financial services and banking solutions for individuals and businesses.",
        image: "nedbank.webp"
    },

    {
        name: "WBHO",
        category: "construction",
        membership: "gold",
        address: "53 Andries Street, Wynberg, Johannesburg, 2090",
        phone: "011 321 7200",
        website: "https://www.wbho.co.za/",
        description: "Construction and infrastructure development services.",
        image: "wbho.webp"
    },

    {
        name: "MTN South Africa",
        category: "technology",
        membership: "gold",
        address: "216 14th Avenue, Fairland, Johannesburg, 2195",
        phone: "011 912 3000",
        website: "https://www.mtn.co.za/",
        description: "Telecommunications and digital technology services.",
        image: "mtn-1.webp"
    },

    {
        name: "Woolworths",
        category: "retail",
        membership: "gold",
        address: "93 Main Street, Marshalltown, Johannesburg, 2107",
        phone: "0860 022 002",
        website: "https://www.woolworths.co.za/",
        description: "Retailer offering food, clothing, beauty and home products.",
        image: "woolw.webp"
    },

    {
        name: "Dis-Chem",
        category: "retail",
        membership: "silver",
        address: "Johannesburg, Gauteng, South Africa",
        phone: "0860 347 243",
        website: "https://www.dischem.co.za/",
        description: "Health, beauty and pharmaceutical retail services.",
        image: "discum.webp"
    },

    {
        name: "Blue Recruiting",
        category: "professional",
        membership: "gold",
        address: "Waverley Office Park, Forest Road, Johannesburg",
        phone: "010 110 1550",
        website: "https://bluerecruiting.co.za/",
        description: "Recruitment and talent solutions for businesses.",
        image: "blue.webp"
    },

    {
        name: "Joburg Tourism Company",
        category: "tourism",
        membership: "non-profit",
        address: "Nelson Mandela Square, Sandton, Johannesburg",
        phone: "011 779 0200",
        website: "https://visit.joburg/",
        description: "Destination marketing and tourism development for Johannesburg.",
        image: "tourism.webp"
    }
];


// ==========================================
// DOM ELEMENTS
// ==========================================

const cardContainer = document.querySelector(".card-member");

const gridButton = document.querySelector("#grid-view");

const listButton = document.querySelector("#list-view");

const searchInput = document.querySelector("#search");

const categorySelect = document.querySelector("#category");

const membershipSelect = document.querySelector("#membership");

const resultCount = document.querySelector(".count");


// ==========================================
// CURRENT VIEW
// ==========================================

let currentView = "grid";


// ==========================================
// GRID VIEW
// ==========================================

function displayGrid(data) {

    cardContainer.innerHTML = "";

    data.forEach(member => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name}"
                class="member-image"
                loading="lazy"
                width="500"
                height="250"
            >

            <div class="member-info">

                <div class="btn-m">
                    <span class="badge">
                        ${member.category}
                    </span>

                    <span class="badge">
                        ${member.membership}
                    </span>
                </div>

                <h4>${member.name}</h4>

                <p>
                    ${member.description}
                </p>

                <p>
                    <i
                        class="fa-solid fa-location-dot"
                        aria-hidden="true">
                    </i>

                    ${member.address}
                </p>

                <p>
                    <i
                        class="fa-solid fa-phone"
                        aria-hidden="true">
                    </i>

                    <a href="tel:${member.phone.replace(/\s/g, "")}">
                        ${member.phone}
                    </a>
                </p>

                <a
                    href="${member.website}"
                    class="btn-site"
                    target="_blank"
                    rel="noopener"
                >
                    <i
                        class="fa-solid fa-globe"
                        aria-hidden="true">
                    </i>

                    ${member.website
                        .replace("https://", "")
                        .replace("www.", "")
                        .replace("/", "")}
                </a>

            </div>
        `;

        cardContainer.appendChild(card);
    });
}


// ==========================================
// LIST VIEW
// ==========================================

function displayList(data) {

    cardContainer.innerHTML = "";

    data.forEach(member => {

        const listItem = document.createElement("article");

        listItem.classList.add("member-list");

        listItem.innerHTML = `
            <div class="member-name">

                <h4>${member.name}</h4>

                <strong>${member.category}</strong>

            </div>


            <div class="member-details">

                <span>${member.address}</span>

                <a
                    href="tel:${member.phone.replace(/\s/g, "")}">
                    ${member.phone}
                </a>

                <a
                    href="${member.website}"
                    target="_blank"
                    rel="noopener"
                >
                    ${member.website
                        .replace("https://", "")
                        .replace("www.", "")
                        .replace("/", "")}
                </a>

            </div>


            <div class="membership">

                <span>${member.membership}</span>

            </div>
        `;

        cardContainer.appendChild(listItem);
    });
}


// ==========================================
// FILTER MEMBERS
// ==========================================

function filterMembers() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const categoryValue =
        categorySelect.value.toLowerCase();

    const membershipValue =
        membershipSelect.value.toLowerCase();


    const filteredMembers = members.filter(member => {

        const searchableText = `
            ${member.name}
            ${member.category}
            ${member.address}
            ${member.description}
        `.toLowerCase();


        const matchesSearch =
            searchableText.includes(searchValue);


        const matchesCategory =
            categoryValue === "" ||
            member.category.toLowerCase() === categoryValue;


        const matchesMembership =
            membershipValue === "" ||
            member.membership.toLowerCase() === membershipValue;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesMembership
        );
    });


    // ======================================
    // RESULT COUNT
    // ======================================

    resultCount.textContent =
        `${filteredMembers.length} business${
            filteredMembers.length === 1 ? "" : "es"
        } found`;


    // ======================================
    // DISPLAY RESULTS
    // ======================================

    if (currentView === "grid") {

        displayGrid(filteredMembers);

    } else {

        displayList(filteredMembers);
    }
}


// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener("input", () => {

    filterMembers();

});


// ==========================================
// CATEGORY FILTER
// ==========================================

categorySelect.addEventListener("change", () => {

    filterMembers();

});


// ==========================================
// MEMBERSHIP FILTER
// ==========================================

membershipSelect.addEventListener("change", () => {

    filterMembers();

});


// ==========================================
// GRID BUTTON
// ==========================================

gridButton.addEventListener("click", () => {

    currentView = "grid";

    cardContainer.classList.remove("list-view");

    gridButton.classList.add("active");

    listButton.classList.remove("active");

    gridButton.setAttribute(
        "aria-pressed",
        "true"
    );

    listButton.setAttribute(
        "aria-pressed",
        "false"
    );

    filterMembers();

});


// ==========================================
// LIST BUTTON
// ==========================================

listButton.addEventListener("click", () => {

    currentView = "list";

    cardContainer.classList.add("list-view");

    listButton.classList.add("active");

    gridButton.classList.remove("active");

    listButton.setAttribute(
        "aria-pressed",
        "true"
    );

    gridButton.setAttribute(
        "aria-pressed",
        "false"
    );

    filterMembers();

});


// ==========================================
// INITIAL DISPLAY
// ==========================================

filterMembers();

