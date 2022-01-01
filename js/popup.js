const popup = document.querySelector('.popup-main');
const popupInner = document.querySelector('.popup-main__inner');
const popupForm = document.querySelector('.popup-form');
const closeButton = document.querySelector('.close-button--main');
const closeButtonForm = document.querySelector('.close-button--small');
const requestButton = document.querySelector('.form-request');

if (popup) {
    closeButton.addEventListener('click', () => {
        popupInner.classList.remove('popup-main__inner--active');
    });

    requestButton.addEventListener('click', () => {
        popupForm.classList.toggle('popup-form--active');
    });

    closeButtonForm.addEventListener('click', () => {
        popupForm.classList.remove('popup-form--active');
    });
}

$(document).ready(function () {

    //E-mail Ajax Send
    $(".popup-form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});