import $ from "jquery";

export default function showMenu() {
  /*Показать меню при маленьком разрешении*/
  const menu = $('.menu');
  $('.menu-button').toggleClass('active');
  $('.menu-button').hasClass('active')
    ? $(menu).animate({left: '0'}, 200)
    : $(menu).animate({left: '-100%'}, 200)
}
