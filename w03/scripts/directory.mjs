
//Billy


// to this is   store the businesses loaded from members.json.
let members = [];






const cardContainer = document.querySelector(".card-member");

const gridButton = document.querySelector("#grid-view");

const listButton = document.querySelector("#list-view");

const searchInput = document.querySelector("#search");

const categorySelect = document.querySelector("#category");

const membershipSelect = document.querySelector("#membership");

const resultCount = document.querySelector(".count");



// CURRENT VIEW


let currentView = "grid";






export async function loadMembers() {

    try {

       
        const response = await fetch("data/members.json");


        
        if (!response.ok) {

            throw new Error("Could not load members.json");

        }


        
        members = await response.json();


        // to Check the data in the console
        // console.log("Members loaded:", members);


        // Display the members
        filterMembers();


    } catch (error) {

        console.error("Error loading members:", error);

    }
}



// my GRID VIEW


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

                    <a
                        href="tel:${member.phone.replace(/\s/g, "")}">
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



// my LIST VIEW


function displayList(data) {

    cardContainer.innerHTML = "";


    data.forEach(member => {

        const listItem = document.createElement("article");

        listItem.classList.add("member-list");


        listItem.innerHTML = `

            <div class="member-name">

                <h4>
                    ${member.name}
                </h4>

                <strong>
                    ${member.category}
                </strong>

            </div>


            <div class="member-details">

                <span>
                    ${member.address}
                </span>


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

                <span>
                    ${member.membership}
                </span>

            </div>

        `;


        cardContainer.appendChild(listItem);

    });
}



// FILTER MEMBERS


function filterMembers() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    const categoryValue =
        categorySelect.value.toLowerCase();


    const membershipValue =
        membershipSelect.value.toLowerCase();


    const filteredMembers = members.filter(member => {


        // Text that can be searched
        const searchableText = `

            ${member.name}

            ${member.category}

            ${member.address}

            ${member.description}

        `.toLowerCase();


        // Search filter
        const matchesSearch =
            searchableText.includes(searchValue);


        // the Category filter
        const matchesCategory =
            categoryValue === "" ||
            member.category.toLowerCase() === categoryValue;


        // the Membership filter
        const matchesMembership =
            membershipValue === "" ||
            member.membership.toLowerCase() === membershipValue;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesMembership
        );

    });


    
    // the RESULT COUNT
 

    resultCount.textContent =
        `${filteredMembers.length} business${
            filteredMembers.length === 1 ? "" : "es"
        } found`;


    
    //to DISPLAY RESULTS
   

    if (currentView === "grid") {

        displayGrid(filteredMembers);

    } else {

        displayList(filteredMembers);

    }

}



// the SEARCH


searchInput.addEventListener("input", () => {

    filterMembers();

});



//the  CATEGORY FILTER


categorySelect.addEventListener("change", () => {

    filterMembers();

});



//the  MEMBERSHIP FILTER


membershipSelect.addEventListener("change", () => {

    filterMembers();

});



//the  GRID BUTTON


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


// LIST BUTTON


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






loadMembers();