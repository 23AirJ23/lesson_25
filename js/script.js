"use strict"

// DOM

// 1 завдання

let sayHi = document.querySelector('[data-say-hi]');
if (sayHi.dataset.sayHi.length) {
   console.log(sayHi.dataset.sayHi);
}

// 2 завдання

let yonchi = document.querySelectorAll('li');
yonchi.forEach(li => {
   if (li.textContent.toLowerCase() === 'йончи') {
      console.log(li.textContent);
   }
})

// 3 завдання

let likeCollection = document.querySelectorAll('.like')
console.log(likeCollection);

// Прокрутка та координати

// 1 завдання

const windowWidth = window.innerWidth;
const clientWidth = document.documentElement.clientWidth;
console.log(windowWidth);
console.log(clientWidth);
const someWidth = windowWidth - clientWidth;
console.log(someWidth);

// 2 завдання

setTimeout(function scrollTime() {
   window.scrollTo({
      top: 100,
      left: 0,
      behavior: 'smooth'
   })
}, [1000]);

// 3 завдання

for (let likeCol of likeCollection) {
   console.log(likeCol.getBoundingClientRect().top);
   console.log(likeCol.getBoundingClientRect().left);
}
console.log(sayHi.getBoundingClientRect().top);
console.log(sayHi.getBoundingClientRect().left);

// Події

const formBody = document.querySelector(".form");

document.addEventListener('click', form);

function form(event) {
   if (event.target.closest('.button')) {
      formBody.classList.toggle('active');
   }
   if (!event.target.closest('form')) {
      formBody.classList.remove('active');
   }
   document.addEventListener('keyup', function (event) {
      if (event.code === 'Escape') {
         formBody.classList.remove('active');
      }
   })
}

let inputBody = document.querySelector('.input');
let inputLength = inputBody.getAttribute('maxlength');
let counter = document.querySelector('.counter span');
counter.innerHTML = inputLength;
console.log(inputLength);

inputBody.addEventListener('keyup', setCounter);

function setCounter() {
   const allCounter = inputLength - inputBody.value.length;
   counter.innerHTML = allCounter;
}
