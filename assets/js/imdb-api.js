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

  .catch(error => console.log('error', error));


  var elements = [];

for(var i = 1; i <= 5; i++) {
  var id = "title" + i;
  elements.push(document.getElementById('title'));
}


elements.forEach(movie => {
  console.log(movie);
  var fetchUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movie + '&api-key=HEot1qFM7Q0uXHMz4GJN00KpM4PuyyKv'
  console.log(fetchUrl)
  var options = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(fetchUrl, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      for (var i = 0; i < 5; i++) {
        document.getElementById('review' + i).innerText = data.results[i].summary_short;
      }
    })
    .catch(error => console.log('error', error));
})

// var fetchUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=avatar&api-key=HEot1qFM7Q0uXHMz4GJN00KpM4PuyyKv'

//   var options = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch(fetchUrl, options)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       for (var i = 0; i < 1; i++) {
//         document.getElementById('review' + i).innerText = data.results[i].summary_short;
//       }
//     })
//     .catch(error => console.log('error', error));
