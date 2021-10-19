'use strict';
var navigationMenu = document.querySelector('.main-navigation');
var navToggle = navigationMenu.querySelector('.main-navigation__toggle');
var callbackForm = document.querySelector('.form');
var telInput = callbackForm.querySelector('input[type="tel"]');
var inputErrorColor = '#ff0001';

// Меню-бургер
navigationMenu.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navigationMenu.classList.contains('main-navigation--closed')) {
    navigationMenu.classList.remove('main-navigation--closed');
    navigationMenu.classList.add('main-navigation--opened');
  } else {
    navigationMenu.classList.add('main-navigation--closed');
    navigationMenu.classList.remove('main-navigation--opened');
  }
});

// Функция визульного отображения ошибки валидации
var setError = function (input) {
  input.style.borderColor = inputErrorColor;
};

var removeError = function (input) {
  input.setCustomValidity('');
  input.style.borderColor = '';
};

// Валидация формы
var onTelInput = function () {
  var inputValue = telInput.value;
  var re = /[0-9]/;
  if (re.test(inputValue) === false) {
    telInput.setCustomValidity('Номер телефона должен содержать цифры');
    setError(telInput);
  } else {
    removeError(telInput);
  }
  if (telInput.value === '') {
    removeError(telInput);
  }
  telInput.reportValidity();
};

telInput.addEventListener('input', onTelInput);
