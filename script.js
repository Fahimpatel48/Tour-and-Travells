
/* Welcome Message */
window.addEventListener("load", function () {
    alert("Welcome to Patel Travels!");
});

/* Search Destination */
function searchTrip() {
    const destination = document.getElementById("tripDestination").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const message = document.getElementById("searchMessage");

    if (destination === "") {
        message.textContent = "Please select a destination.";
        return;
    }

    if (!checkin || !checkout) {
        message.textContent = "Please select both dates.";
        return;
    }

    if (checkout <= checkin) {
        message.textContent = "Check-out must be after check-in.";
        return;
    }

    const cards = document.querySelectorAll("#destinations .col-md-4");
    let found = false;

    cards.forEach(function (card) {
        const title = card.querySelector(".card-title");

        if (title && title.textContent.trim().toLowerCase() === destination.toLowerCase()) {
            card.style.display = "";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    message.textContent = found
        ? "Showing trip for " + destination
        : "No trip found.";

    document.getElementById("showAllButton").hidden = false;

    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });
}

/* Show All Destinations */
function showAllTrips() {
    document.querySelectorAll("#destinations .col-md-4").forEach(function (card) {
        card.style.display = "";
    });

    document.getElementById("searchMessage").textContent = "";
    document.getElementById("showAllButton").hidden = true;
}

/* Inquiry Form Validation */
document.getElementById("inquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const destination = document.getElementById("destination");
    const message = document.getElementById("message");

    if (name.value.trim().length < 2) {
        alert("Please enter a valid name.");
        name.focus();
        return;
    }

    if (!/^[6-9][0-9]{9}$/.test(phone.value.trim())) {
        alert("Please enter a valid 10-digit mobile number.");
        phone.focus();
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }

    if (destination.value === "") {
        alert("Please select a destination.");
        destination.focus();
        return;
    }

    if (message.value.trim().length < 10) {
        alert("Message must contain at least 10 characters.");
        message.focus();
        return;
    }

    alert("Your inquiry has been submitted successfully!");
    document.getElementById("inquiryForm").reset();
});

/* Social Media and Contact Links */
const whatsappNumber = "919023214706";
const instagramUsername = "fahim._.48";
const phoneNumber = "919023214706";

document.querySelector('[aria-label="WhatsApp"]').href =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent("Hello Patel Travels! I want to know about your tour packages.");

document.querySelector('[aria-label="Instagram"]').href =
    "https://www.instagram.com/" + instagramUsername + "/";

document.querySelector('[aria-label="Call"]').href = "tel:+" + phoneNumber;
