var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch('https://imdb-api.com/API/AdvancedSearch/k_kf6u348l?user_rating=6.0,&release_date=2022-08-01,&num_votes=3000,&groups=now-playing-us&countries=us&languages=en&sort=user_rating,desc', requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    for (var i = 0; i < 5; i++){
      
      console.log(result.results[i].title + ' ' + result.results[i].description + ' IMDB ' + result.results[i].imDbRating);
      document.getElementById('title'+i).innerText = result.results[i].title;
      }})
  .catch(error => console.log('error', error));