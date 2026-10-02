const details = document.querySelector("#appointmentDetails");

if (details) {

    const appointment = JSON.parse(localStorage.getItem("appointment"));

    if (appointment) {

        details.innerHTML = `
            <h2 class="note">Your Appointment</h2>
            <p><strong>Name:</strong> ${appointment.firstName}</p>
            <p><strong>Email:</strong> ${appointment.email}</p>
            <p><strong>Phone:</strong> ${appointment.phone}</p>
            <p><strong>Service:</strong> ${appointment.service}</p>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
            <p><strong>Notes:</strong> ${appointment.notes || "None"}</p>
            <a href="index.html" class="btn">Return Home</a>
             <a href="contact.html" class="btn">Book Another Appointment</a>
        `;

    }

}