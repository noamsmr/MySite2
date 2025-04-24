var contactOpen = false;
const contactDeltaHeight = 160;

function onClickHeader(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

function onClickContact() {
    var element = document.getElementById('footer');
    if (contactOpen) {
        element.style.height = (element.offsetHeight - contactDeltaHeight) + "px";
    } else {
        element.style.height = (element.offsetHeight + contactDeltaHeight) + "px";
    }
    contactOpen = !contactOpen;
    var element = document.getElementById('contact');
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}