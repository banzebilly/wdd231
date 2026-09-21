// Billy

// GET FORM DATA


const params = new URLSearchParams(window.location.search)

const firstName = params.get("first-name");

const lastName = params.get("last-name");

const email = params.get("email");

const phone = params.get("phone");

const business = params.get("business-name");

const timestamp = params.get("timestamp");

// to put the data into the page


document.querySelector("#display-first-name").textContent = firstName || "Not provided";


document.querySelector("#display-last-name").textContent = lastName || "Not provided";


document.querySelector("#display-email").textContent =  email || "Not provided";


document.querySelector("#display-phone").textContent =phone || "Not provided";

document.querySelector("#display-business").textContent = business || "Not provided";



// to format the time stamp


const timestampElement = document.querySelector("#display-timestamp");


if (timestamp) {

    const date =
        new Date(timestamp);

    timestampElement.textContent =
        date.toLocaleString();

} else {

    timestampElement.textContent =
        "Not available";

}

