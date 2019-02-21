import $ from "jquery";

export default function formValidation() {
  const input = $('input');

  /*Регулярки для инпутов*/
  const regex = {
    cvc: /^[0-9]{3}$/,
    cardNum: /^[0-9]{4}$/,
    name: /^[A-Z]{2,}( [A-Z]{2,})$/,
  };

  $(input).each(function() {
    /*удаляем классы для перепроверки инпутов*/
    $(this).removeClass('error success');

    /*Проверяем номер карты*/
    if ($(this).parent().hasClass('content__card-number')) {
      if (!$(this).val().match(regex.cardNum)) {
        $(this).addClass('error');
        $('<span class="alert">В каждое поле введите четырехзначное число</span>').insertBefore($(this));
      } else {
        $(this).addClass('success');
        $(this).parent().children('.alert').remove();
      }
    }
    /*Конец проверки номера*/

    /*Проверяем имя держателя карты*/
    else if ($(this).parent().hasClass('content__card-holder-wrapper')) {
      if (!$(this).val().match(regex.name)) {
        $(this).addClass('error');
        if ($(this).val().length < 8) {
          $('<span class="alert">Минимальная длина  — 4 символа</span>').insertBefore($(this));
        } else {
          $('<span class="alert">Введите имя заглавными латинскими буквами</span>').insertBefore($(this));
        }
      } else {
        $(this).addClass('success');
        $(this).parent().children('.alert').remove();
      }
    }
    /*Конец проверки имени*/

    /*Проверяем cvc-код*/
    else if ($(this).parent().hasClass('content__cvc-container')) {
      if (!$(this).val().match(regex.cvc)) {
        $(this).addClass('error');
        $('<span class="alert">Введите трехзначное число с оборота карты</span>').insertBefore($(this));
      } else {
        $(this).addClass('success');
        $(this).parent().children('.alert').remove();
      }
    }
    /*Конец проверки cvc*/
  });
  /*Конец цикла по инпутам*/

  const p = $('p.valueTag');
  /*Проверяем селекты*/
  $(p).each(function() {
    $(this).removeClass('error success');

    if ($(this).text() === 'Месяц' || $(this).text() === 'Год') {
      $(this).addClass('error');

    } else {
      $(this).addClass('success');
      $(this).parent().children('.alert').remove();
    }
  });
  if ($(p).hasClass('error')) {
    $('<span class="alert">Выберите месяц и год</span>').appendTo($('.content__card-date'));
  } else {
    $('.content__card-date').children('.alert').remove();
  }
  /*Конец проверки селектов*/
}
