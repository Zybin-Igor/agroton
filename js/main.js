"use strict";
const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.menu-list');
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-active');
})

document.addEventListener('DOMContentLoaded', function () {
	const contactBtn = document.querySelector('.header-contact');
	const modal = document.getElementById('contactModal');
	const closeBtn = document.querySelector('.modal-close');
	const form = document.getElementById('messageForm');

	// Открытие модального окна
	contactBtn.addEventListener('click', function (e) {
		e.preventDefault();
		modal.classList.add('active');
		document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
	});

	// Закрытие модального окна
	closeBtn.addEventListener('click', function () {
		modal.classList.remove('active');
		document.body.style.overflow = '';
	});

	// Закрытие при клике вне окна
	modal.addEventListener('click', function (e) {
		if (e.target === modal) {
			modal.classList.remove('active');
			document.body.style.overflow = '';
		}
	});

	// Обработка формы
	form.addEventListener('submit', function (e) {
		e.preventDefault();

		// Здесь можно добавить AJAX отправку формы
		const formData = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value
		};

		console.log('Form submitted:', formData);
		alert('Thank you for your message! We will contact you soon.');
		form.reset();
		modal.classList.remove('active');
		document.body.style.overflow = '';
	});
});