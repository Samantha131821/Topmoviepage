var options = {
	method: 'GET',
	headers: {
		Type: 'get-movie-details',
		'X-RapidAPI-Key': '6d78b4ef32msh912d99dd3223ef6p1756a2jsn1271dc889fa8',
		'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
	}
};

fetch('https://movies-tv-shows-database.p.rapidapi.com/?movieid=tt1375666', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));