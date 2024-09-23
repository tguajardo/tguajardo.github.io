document.addEventListener("DOMContentLoaded", function() {
    const encodedEmail = "dGd1YWphcmRvQGdtYWlsLmNvbQ=="; // Base64 encoded email
    const decodedEmail = atob(encodedEmail);
    const contactLink = document.getElementById("contact-link");
    contactLink.href = "mailto:" + decodedEmail;
});
