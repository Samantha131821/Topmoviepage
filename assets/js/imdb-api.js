var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch('https://imdb-api.com/API/AdvancedSearch/k_kf6u348l?user_rating=6.0,&release_date=2022-08-01,&num_votes=3000,&groups=now-playing-us&countries=us&languages=en&sort=user_rating,desc', requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    for (var i = 0; i < 5; i++) {
      document.getElementById('title' + i).innerText = result.results[i].title + ' ' + result.results[i].description;
      document.getElementById('img' + i).setAttribute('src', result.results[i].image);
      document.getElementById('plot' + i).innerText = result.results[i].plot;
      document.getElementById('rating' + i).innerText = 'IMDb '+result.results[i].imDbRating+' "'+result.results[i].contentRating+'"';
    }
  })
  .then(result => {
    const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=avatar&api-key=HEot1qFM7Q0uXHMz4GJN00KpM4PuyyKv";
    const options = {
      method: "GET",
      headers: { "Accept": "application/json" },
    };
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById('review0').innerText = 'NY Times: '+data.results[0].summary_short;       
      })







      .catch(err => {console.error(err) });

  })

  .catch(error => console.log('error', error));
