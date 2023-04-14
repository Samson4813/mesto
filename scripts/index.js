const openFormProfile = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_edit_form');
const popupCloseProfile = document.querySelector('.popup__close');
const popupNameInput = document.querySelector('.popup__entry_text_name');
const popupTextInput = document.querySelector('.popup__entry_text_about');
const popupFormProfile = document.querySelector('.popup_edit_form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const popupCard = document.querySelector('.popup_card');
const popupCardForm = document.querySelector('.popup__form_card');
const openCardForm = document.querySelector('.profile__button');
const popupCardNameInput = document.querySelector('.popup__entry_text_name');
const popupCardTextInput = document.querySelector('.popup__entry_text_about');
const popupCloseCard = document.querySelector('.popup__closer');
const popupClosePhoto = document.querySelector('.photoPopup__close');
const CardNameInput = popupCardForm.querySelector('.popup__entry_card_name');
const CardTextInput = popupCardForm.querySelector('.popup__entry_card_about');
const templateCard = document.querySelector('.templateCard');
const cardList = document.querySelector('.elements');
const photoPopup = document.querySelector('.photoPopup');
const photoPopupimage =  document.querySelector('.photoPopup__image');
const photoPopuptext =  document.querySelector('.photoPopup__text');


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
;

const openProfilePopup = () => {
  popupNameInput.value = profileName.textContent;
  popupTextInput.value = profileText.textContent;
  openPopup(popupProfile);
}

const createCard = (cardcontent) => {
  const card = templateCard.content
  .querySelector('.elements__item')
  .cloneNode(true);

  const elementName = card.querySelector('.elements__name');
  const elementsImage = card.querySelector('.elements__image');

  elementName.textContent = cardcontent.name;
  elementsImage.src = cardcontent.link;
  elementsImage.alt = cardcontent.name;

  const openPhotoPopup = () => {
    photoPopupimage.src = cardcontent.link;
    photoPopupimage.alt = cardcontent.name;
    photoPopuptext.textContent = cardcontent.name;

    openPopup(photoPopup);
  }
  
  elementsImage.addEventListener('click', openPhotoPopup);
  
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


const openPhotoPopup = () => {
  photoPopupimage.src = cardcontent.link;
  photoPopupimage.alt = cardcontent.name;
  photoPopuptext.textContent = cardcontent.name;

  openPopup(photoPopup);
}

const addCard = (card) => {
  cardList.prepend(card);
};

initialCards.forEach((cards) => {
  addCard(createCard(cards));
});


const editCardSubmit = (event) => {
  event.preventDefault();
  
  const name = CardNameInput.value;
  const link = CardTextInput.value;

  const info = {
    name,
    link
  }

  addCard(createCard(info));
  popupCardForm.reset();
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
popup.classList.remove('popup_opened');
}


popupFormProfile.addEventListener('submit', function (event) {
  event.preventDefault();

  profileName.textContent = popupNameInput.value;
  profileText.textContent = popupTextInput.value;
  closePopup(popupProfile);
});

openCardForm.addEventListener('click', function () {
openPopup(popupCard);
});

popupCloseCard.addEventListener('click', function () {
closePopup(popupCard);
});

popupCardForm.addEventListener('submit', function (event) {
event.preventDefault();
closePopup(popupCard);
});

openFormProfile.addEventListener('click', openProfilePopup);

popupCloseProfile.addEventListener('click', function () {
 closePopup(popupProfile);
});


popupCardForm.addEventListener('submit', editCardSubmit);


popupClosePhoto.addEventListener('click', function () {
  closePopup(photoPopup);
});
