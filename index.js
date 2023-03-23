const openForm = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup_info');
const popupClose = document.querySelector('.popup__close');
const popupNameInput = document.querySelector('.popup__input_name');
const popupTextInput = document.querySelector('.popup__input_text');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

openForm.addEventListener('click', function () {
    popup.classList.add('popup_open');

    popupNameInput.value = profileName.innerHTML;
    popupTextInput.value = profileText.innerHTML;
});

popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_open');
});

popupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    profileName.innerHTML = popupNameInput.value;
    profileText.innerHTML = popupTextInput.value;
    popup.classList.remove('popup_open')
});