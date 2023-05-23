'use strict';

const myRange = document.querySelector('.myRange');
const toggleBox = document.querySelector('.toggle-box');
const toggleCircle = document.querySelector('.toggle-circle');
const valPageView = document.querySelector('.val-page-view');
const price = document.querySelector('.price');
const perPrice = document.querySelector('.per-price');

price.textContent = `16.00`;
valPageView.textContent = '100k';

const togglePrice = (priceYr,val,val2) =>{
  if(myRange.value == val){
    if(toggleCircle.classList.contains('toggle-move')){
      price.textContent = `${(priceYr - (priceYr * .25)) * 12}`;
      perPrice.textContent = `/year`;
    }else{
      price.textContent = `${val2}.00`;
      perPrice.textContent = `/month`;
   }
  }
};

const RangePrice = (valpercent,valprice,val1,val2) => {
  myRange.style.background = `linear-gradient(to right,var(--Soft-Cyan)${valpercent}%, var(--Light-Grayish-Blue1)${valpercent}%)`;
  valPageView.textContent = `${val1}${val2}`;
  price.textContent = `${valprice}.00`;
  
  if(toggleCircle.classList.contains('toggle-move')){
    price.textContent = `${(valprice - (valprice * .25)) * 12}`;
 }
};

myRange.addEventListener('input',() =>{
    if(myRange.value == 1){
     RangePrice(0,8,10,'k');
    }
    else if(myRange.value == 2){
     RangePrice(25,12,50,'k');
    }
    else if(myRange.value == 3){
       RangePrice(50,16,100,'k');
    }
    else if(myRange.value == 4){
      RangePrice(75,24,500,'k');
    }
    else if(myRange.value == 5){
     RangePrice(100,36,1,'M')
    }
});
   

toggleBox.addEventListener('click',() =>{
    toggleCircle.classList.toggle('toggle-move');
    toggleBox.classList.toggle('active');
    
    let priceYear = parseInt(price.textContent);
    togglePrice(priceYear,1,8);
    togglePrice(priceYear,2,12);
    togglePrice(priceYear,3,16);
    togglePrice(priceYear,4,24);
    togglePrice(priceYear,5,36);   
  });

