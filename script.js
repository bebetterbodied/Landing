// JoinUs
const openPopupJoinUs = document.querySelector('.offer__item_joinus'); // находим кнопку редактирования профиля в DOM 
const popupJoinUs = document.querySelector('.popup_type_joinus'); //всплывающее окно popup р
const closePopupJoinUs = popupJoinUs.querySelector('.popup__close');// кнопка закрывающая popup 
// FreeResources
const popupFreeResources = document.querySelector('.popup_type_freeresources');
const openPopupFreeResources = document.querySelector('.offer__item_freeresources'); 
const closePopupFreeResources = popupFreeResources.querySelector('.popup__close');
// Shopping
const popupShopping = document.querySelector('.popup_type_shopping');
const openPopupShopping = document.querySelector('.offer__item_shopping'); 
const closePopupShopping = popupShopping.querySelector('.popup__close');
//books
const popupBooks = document.querySelector('.popup_type_books');
const openPopupBooks = document.querySelector('.offer__item_books'); 
const closePopupBooks = popupBooks.querySelector('.popup__close');

function togglePopup(type) { 
    type.classList.toggle('popup_opened');// добавляет или удаляет класс отвечающий за скрытие попапа 
     
} 
openPopupJoinUs.addEventListener('click', (evt) => {   // открытие popup
    togglePopup(popupJoinUs); 
    // document.addEventListener('keydown', closePopupWithEscape); 
});

closePopupJoinUs.addEventListener('click', () => {
    togglePopup(popupJoinUs); 
});
openPopupFreeResources.addEventListener('click', (evt) => {   // открытие popup
    togglePopup(popupFreeResources); 
});
closePopupFreeResources.addEventListener('click', () => {
    togglePopup(popupFreeResources); 
});
openPopupShopping.addEventListener('click', () => {   // открытие popup
    togglePopup(popupShopping); 
});
closePopupShopping.addEventListener('click', () => {
    togglePopup(popupShopping); 
});
openPopupBooks.addEventListener('click', (evt) => {   // открытие popup
    togglePopup(popupBooks); 
});
closePopupBooks.addEventListener('click', () => {
    togglePopup(popupBooks); 
});