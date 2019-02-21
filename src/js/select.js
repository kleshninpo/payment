import $ from "jquery";

export default function select() {
  /*Заполняем селекты*/
  const year = new Date().getFullYear();
  for (let i = 1; i <= 12; i++) {
    $('.selectMenuBox.month').append(`<li class="option">${i}</li>`);
  }
  for (let i = year; i <= year + 10; i++) {
    $('.selectMenuBox.year').append(`<li class="option">${i}</li>`);
  }

  /*Задаём селектам разную ширину, которая не будет меняться при выборе значения*/
  const p = $('.valueTag');
  $(p).each(function() {
    const pWidth = $(this).width() + 'px';
    $(this).width(pWidth);
  });

  /*Прячем выпадающий список*/
  const select = $('.selectMenuBox');
  select.hide();

  /*По клику разворачиваем список*/
  $(p).on('click',
    function () {
      $(this).parent().toggleClass('active');
      $(this).parent().children('.selectMenuBox').slideToggle(100);
    });

  /*Пушим выбранное значение и сворачиваем список*/
  $('.option').on('click', function () {
    const ul = $(this).parent();
    const p = $(this).parent().parent().children('.valueTag');
    $(p).html($(this).text());
    $(ul).removeClass('active');
    $(ul).hide(100);
  });
}