import $ from 'jquery';
require('../index.html');
import '../scss/style.scss';
import '../scss/content.scss';
import '../scss/menu.scss';
import '../scss/adaptive.scss';
import formValidation from './formValidation';
import select from './select';
import showMenu from './showMenu';

$(function() {
  const form = $('form');
  const input = $('input');

  /*Обработчик для иконки меню*/
  $('.menu-button').on('click', showMenu);

  /*Заполняем селекты*/
  select();

  form.submit(function(e) {
    e.preventDefault();

    /*Проверяем форму*/
    formValidation();

    /*Разрешаем отправку формы, если все поля валидны*/
    if (!$(input).is('.error')) {
      form.unbind('submit').submit();
      alert('Форма успешно отправлена');
    }
  })
});