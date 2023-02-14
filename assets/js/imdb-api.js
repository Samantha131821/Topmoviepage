var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
// Getting the title to match with NYT review API
function getTitles(index, result) {
  // Delaying calling each title after a couple seconds
  setTimeout(() => {
    // printing informations of the movies on the page
    document.getElementById('title' + index).innerText = result.results[index].title + ' ' + result.results[index].description;
    document.getElementById('img' + index).setAttribute('src', result.results[index].image);
    document.getElementById('plot' + index).innerText = result.results[index].plot;
    document.getElementById('rating' + index).innerText = result.results[index].imDbRating;
    var a = document.getElementById('indexCard' + index);

    function storeId() {
      console.log('clck');
      localStorage.setItem('movieId', result.results[index].id);
      console.log(result.results[index].id);
    };

    a.addEventListener('click', storeId);

    // Getting reviews from NYT API
    var fetchUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + result.results[index].title + '&api-key=HEot1qFM7Q0uXHMz4GJN00KpM4PuyyKv'
    var options = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(fetchUrl, options)
      .then(response => response.json())
      .then(data => {

        document.getElementById('review' + index).innerText = data.results[0].summary_short;

      })
      .catch(error => console.log('error', error));
  }, (index + 1) * 200)

}

// Getting info from IMDB API
fetch('https://imdb-api.com/API/AdvancedSearch/k_kf6u348l?user_rating=6.0,&release_date=2022-08-01,&num_votes=3000,&groups=now-playing-us&countries=us&languages=en&sort=user_rating,desc', requestOptions)
  .then(response => response.json())
  .then(result => {
    for (var i = 0; i < 5; i++) {
      getTitles(i, result)
    }
  })
  .catch(error => console.log('error', error));