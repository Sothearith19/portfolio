// Change this to update the email copied by both email buttons.
const EMAIL_ADDRESS = "shorn3@paragoniu.edu.kh"

const email = document.querySelector(".email-link")
const copied = document.querySelector(".copy")
const contactEmailCopy = document.querySelector('.contact-email-copy')
const emailContact = document.querySelector('.email-contact')

email.addEventListener("click", (event) => {

    event.preventDefault();

    navigator.clipboard.writeText(EMAIL_ADDRESS);

    copied.style.display = "block";

    setTimeout(() => {
        copied.style.display = "none";
    }, 2000);

});

emailContact.addEventListener("click", (event) => {

    event.preventDefault();

    navigator.clipboard.writeText(EMAIL_ADDRESS);

    contactEmailCopy.style.display = "block";

    setTimeout(() => {
        contactEmailCopy.style.display = "none";
    }, 2000);

})

