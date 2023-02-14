var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
function getTitles (index, result) {
  setTimeout(() => {
    document.getElementById('title' + index).innerText = result.results[index].title + ' ' + result.results[index].description;
      document.getElementById('img'+index).setAttribute('src', result.results[index].image);
      document.getElementById('plot' + index).innerText = result.results[index].plot;
      document.getElementById('rating' + index).innerText = result.results[index].imDbRating;
      // elements.push(result.results[index].title);
      var fetchUrl = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + result.results[index].title + '&api-key=HEot1qFM7Q0uXHMz4GJN00KpM4PuyyKv'
      console.log(fetchUrl)
      var options = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(fetchUrl, options)
        .then(response => response.json())
        .then(data => {
          console.log(data);
         
          console.log(index)
            document.getElementById('review' + index).innerText = data.results[0].summary_short;
            
        })
        .catch(error => console.log('error', error));
  }, (index+1)*200)
  
}
fetch('https://imdb-api.com/API/AdvancedSearch/k_kf6u348l?user_rating=6.0,&release_date=2022-08-01,&num_votes=3000,&groups=now-playing-us&countries=us&languages=en&sort=user_rating,desc', requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    for (var i = 0; i < 5; i++) {
      getTitles(i, result)
    }  
 
  })
  .catch(error => console.log('error', error));