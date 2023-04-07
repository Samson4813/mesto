const openForm = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupNameInput = document.querySelector('.popup__entry_text_name');
const popupTextInput = document.querySelector('.popup__entry_text_about');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

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

const templateCard = document.querySelector('.templateCard');
const elements = document.querySelector('.elements');

const createCard = (cardcontent) => {
  const card = templateCard.content
  .querySelector('.elements__item')
  .cloneNode(true);

  const elementName = card.querySelector('.elements__name');
  const elementsImage = card.querySelector('.elements__image');

  elementName.innerHTML = cardcontent.name;
  elementsImage.src = cardcontent.link;
  elementsImage.alt = cardcontent.name;

  return card;
};

const plusCard = (card) => {
  elements.prepend(card);
};

initialCards.forEach((cards) => {
  plusCard(createCard(cards));
});
