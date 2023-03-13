let numberContainer = document.querySelector('.raiting-state__number-conteiner');
let rateNumber = document.querySelector('.thankyou-state__result--newnumber');
let submitBtn = document.querySelector('.raiting-state__button');
let ratingSatate = document.querySelector('.raiting-state');
let thankyouState = document.querySelector('.thankyou-state')

numberContainer.addEventListener('click', event=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected > 0 || numberSelected <= 5){
    submitBtn.addEventListener('click', ()=>{
    ratingSatate.style.display = 'none';
    thankyouState.style.display = 'flex';
})
    }
});

