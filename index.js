const openForm = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupNameInput = document.querySelector('.popup__entry_name');
const popupTextInput = document.querySelector('.popup__entry_text');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

function openPopup() {
    popup.classList.add('popup_opened');
    popupNameInput.value = profileName.textContent;
    popupTextInput.value = profileText.textContent;
}

openForm.addEventListener('click', openPopup);

popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

popupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    profileName.textContent = popupNameInput.value;
    profileText.textContent = popupTextInput.value;
    popup.classList.remove('popup_opened')
});