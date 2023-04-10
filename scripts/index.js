const openForm = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup__edit');
const popupClose = document.querySelector('.popup__close');
const popupNameInput = document.querySelector('.popup__entry_text_name');
const popupTextInput = document.querySelector('.popup__entry_text_about');
const popupForm = document.querySelector('.popup__edit_form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const popupCard = document.querySelector('.popup__card');
const popupCardForm = document.querySelector('.popup__card_form');
const openCardForm = document.querySelector('.profile__button');
const popupCardNameInput = document.querySelector('.popup__entry_text_name');
const popupCardTextInput = document.querySelector('.popup__entry_text_about');
const popupCloser = document.querySelector('.popup__closer');


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

function openPopup(popups) {
    popups.classList.add('popup_opened');
}

const valuePopup = () => {
    popupNameInput.value = profileName.textContent;
    popupTextInput.value = profileText.textContent;
    openPopup(popup);
}

openForm.addEventListener('click', valuePopup);

popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

popupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    profileName.textContent = popupNameInput.value;
    profileText.textContent = popupTextInput.value;
    popup.classList.remove('popup_opened');
});

openCardForm.addEventListener('click', function () {
  openPopup(popupCard) ;
});

popupCloser.addEventListener('click', function () {
  popupCard.classList.remove('popup_opened');
});

popupCardForm.addEventListener('submit', function (event) {
  event.preventDefault();

  popupCard.classList.remove('popup_opened');
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

  const deletebutton = card.querySelector('.elements__delete');
  const likebutton = card.querySelector('.elements__like');

  const handledelete = () => {
    card.remove();
  };

  const handlelike = () => {
    likebutton.classList.toggle('elements__like_active');
  };

  deletebutton.addEventListener("click", handledelete);

  likebutton.addEventListener("click", handlelike);

  return card;
};

const plusCard = (card) => {
  elements.prepend(card);
};

initialCards.forEach((cards) => {
  plusCard(createCard(cards));
});





const editCardSubmit = (event) => {
  event.preventDefault();

  const nameInput = popupCardForm.querySelector('.popup__entry_card_name');
  const textInput = popupCardForm.querySelector('.popup__entry_card_about');
  
  const name = nameInput.value;
  const link = textInput.value;

  const info = {
    name,
    link
  }

  plusCard(createCard(info));
  popupCardForm.reset();
}

popupCardForm.addEventListener('submit', editCardSubmit);



