"use strict";
const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.menu-list');
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-active');
})