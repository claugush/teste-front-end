var randomMovieArray = ['Star Wars', 'Game of Thrones', 'Lord of the Rings', 'Harry Potter'];

//var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);

//console.log(randomNumber);

//var randomMovie = randomMovieArray[randomNumber];

//console.log(randomMovie);

function apiCall() {
	var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
	//console.log(randomNumber);
	var randomMovie = randomMovieArray[randomNumber];
	//console.log(randomMovie);
	$.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie)).then(function(response){
		//console.log(response.Poster);
		var image = response.Poster;

		if(image !== "N/A"){
			$('img').attr('src', image);
		}
	});
}

//apiCall();
$('button').click(function(){
	apiCall();
});

