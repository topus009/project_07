$(document).ready(function() {

  // Прокрутка вверх страницы
  $("#up").click(function(){
  $("body").animate({"scrollTop":0},"slow");
  });
  // Копирование 1-вых 7 новостей в конец последней новости
$("#next7").click(function(){
$("#a").find(".right-news-block").slice(0,7).clone().appendTo($(".right-news-block").last());
});
});
