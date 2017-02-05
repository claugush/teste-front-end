/* Como a API da OMBD estava instável durante a semana e fora do ar durante o fim de semana, criei um array com os parâmetros necessários para simular a API */ 
//

var form = $('#search-film');
var search_field = $('#search-film-input');
var results = $('#results');

function APISearch(argument){
  argument.toLowerCase();
  if (argument = "shrek"){
    return '[{"title": "Shrek", "year": "2001", "poster":"images/shrek-poster.jpg", "imdb_id":"shrek01", "type": "Animação"}, { "title": "Shrek 2", "year": "2004", "poster":"images/shrek-2-poster.jpg", "imdb_id":"shrek02", "type": "Animação"}]';
  }
}


form.on('submit', function(e) {
  e.preventDefault();

  console.log(APISearch(search_field.val()));

  //var url_search = 'http://www.omdbapi.com/?s=' + search_field.val();
  var omdbAPI = jQuery.parseJSON(APISearch(search_field.val()));
  //$.get(url_search, function(response) {
  results.empty();

  console.log(omdbAPI);

  //$.each(response.Search, function(index, item) {
  $.each(omdbAPI, function(index, item) {
    $('<div />')
      .append($('<h4 />').html(item.title))
      .append($('<img />').attr({src: item.poster, class: 'poster', id: ('poster' + index)}))
      .append($('<div />').attr({class: 'additional', id: ('poster' + index)}))
      .append($('<hr />'))
      .appendTo(results);
  });
});
//});
