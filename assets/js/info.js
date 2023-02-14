var movieId = localStorage.getItem('movieId');
console.log(movieId);

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch('https://imdb-api.com/en/API/Title/k_kf6u348l/' + movieId, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);

    document.getElementById('infoTitle').innerText = result.fullTitle;
    document.getElementById('infoPlot').innerText = result.plot;
    document.getElementById('infoImg').setAttribute('src', result.image);
    document.getElementById('infoRating').innerText = result.imDbRatingVotes + ' votes';
    document.getElementById('infoIMDbRating').innerHTML = result.imDbRating;
    document.getElementById('infoStars').innerHTML = 'Staring: ' + result.stars;
    document.getElementById('infoRating').setAttribute('href', 'https://www.imdb.com/title/' + movieId + '/ratings/?ref_=tt_ov_rt');


    var fetchUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + result.title + '&api-key=HEot1qFM7Q0uXHMz4GJN00KpM4PuyyKv'
    var options = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(fetchUrl, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById('infoNYtimes').innerHTML = data.results[0].summary_short;
        console.log(data.results[0].link.url);
        document.getElementById('infoLink').setAttribute('href', data.results[0].link.url);
      })
      .catch(error => console.log('error', error));

  })
  .catch(error => console.log('error', error));