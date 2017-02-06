/* Como a API da OMBD estava instável durante a semana e fora do ar durante o fim de semana, criei um array com os parâmetros necessários para simular a API */ 
//

var form = $('#search-form');
var search_field = $('#search-film-input');
var results = $('#results');

function APISearch(argument){
  argument.toLowerCase();
  if (argument = "shrek"){
    return '[{"title": "Shrek", "year": "2001", "rated": "5 stars", "genre": "Adventure/Comedy", "director": "Andre Adamson and Vicky Jenson", "writer": "Ted Elliott, Terry Rossio, Joe Stillman and Roger Schulman", "actors":"Mike Meyers, Eddie Murphy, and others", "plot": "After his swamp is filled with magical creatures, Shrek agrees to rescue Princess Fiona for a villainous lord in order to get his land back.", "language": "english", "country": "USA", "awards": "Melhor Trilha Sonora: Oscar - 2002 / Globo de Ouro - 2002 / Cannes - 2001", "poster":"images/shrek-poster.jpg", "imdb_id":"imdb ID: shrek01", "type": "Animação"}, { "title": "Shrek 2", "year": "2004", "rated": "5 stars", "genre": "Adventure/Comedy", "director": "Andrew Adamson, Kelly Asbury and Conrad Vernon", "writer": "William Steig, Andrew Adamson and others", "actors":"Mike Meyers, Cameron Diaz, Julie Andrews, Eddie Murphy, and others", "plot": "Princess Fionas parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.", "language": "english", "country": "USA", "awards": "Melhor Trilha Sonora: Oscar - 2002 / Globo de Ouro - 2002 / Cannes - 2001", "poster":"images/shrek-2-poster.jpg", "imdb_id":"imdb ID: shrek02", "type": "Animação"}]';
  }
}


form.on('submit', function(e) {
  e.preventDefault();

  $('html, body').animate({
    height: "auto",
    minHeight: "auto"
  }, 1000, function() {
    // Animation complete.
  });

  $('#search-form').animate({
    margin: "0 auto",
    top: "0"
  }, 5000, function() {
    // Animation complete.
  });

  //console.log(APISearch(search_field.val()));

  //var url_search = 'http://www.omdbapi.com/?s=' + search_field.val();
  var omdbAPI = jQuery.parseJSON(APISearch(search_field.val()));
  //$.get(url_search, function(response) {
  results.empty();

  //console.log(omdbAPI);

  //$.each(response.Search, function(index, item) {
  $.each(omdbAPI, function(index, item) {
    $('<div />')
      .append($('<h4 class="title" />').html(item.title))
      .append($('<span class="year" />').html(item.year))
      .append($('<span class="type" />').html(item.type))
      .append($('<span class="imdbid" />').html(item.imdb_id))
      .append($('<img />').attr({src: item.poster, class: 'poster', id: ('poster' + index)}))
      .append($('<input class="btn_details" placeholder="Detalhes" />'))
      .append($('<div />').attr({class: 'additional', id: ('poster' + index)}))
      .appendTo(results);
  });
});

$('.btn_details').click(function(event) {
  console.log('clicou no botao');
  /* Act on the event */
  $('.title, .year, .type, .imdbid, .rated, .genre, .director, .writer, .actors, .plot, .language, .country, .awards').animate({
    display: 'block',
    paddingTop: '5px'},
    3000, function() {
    /* stuff to do after animation is complete */
  });
});
//});
