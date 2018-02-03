window.onload = function () {
    let openPopUp = document.querySelector('.trade-button button');
    let closePopUp = document.querySelector('.popup-content .close-popup');
    let popUp = document.querySelector('.popup');
    let openAccount = document.querySelector('.open-account button');
    let subscribe = document.querySelector('.subscribe button');
    
    
    function openForm () {
        popUp.classList.remove('non-vis');
    }
    function closeForm() {
        popUp.classList.add('non-vis');
    }
    openPopUp.addEventListener('click', openForm);
    closePopUp.addEventListener('click', closeForm);
    openAccount.addEventListener('click', openForm);
    subscribe.addEventListener('click', openForm);
}