'use strict';
var navigation = document.querySelector('.main-navigation');
var navToggle = navigation.querySelector('.main-navigation__toggle');

navigation.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navigation.classList.contains('main-navigation--closed')) {
    navigation.classList.remove('main-navigation--closed');
    navigation.classList.add('main-navigation--opened');
  } else {
    navigation.classList.add('main-navigation--closed');
    navigation.classList.remove('main-navigation--opened');
  }
});
