var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch('https://imdb-api.com/API/AdvancedSearch/k_kf6u348l?user_rating=6.2,&num_votes=15000,&countries=us&languages=en&count=250', requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        function randomize() {
            let randomNumber = Math.floor(Math.random() * 250);
            console.log(randomNumber);
            document.getElementById('title5').innerText = result.results[randomNumber].title + ' ' + result.results[randomNumber].description;
            document.getElementById('img5').setAttribute('src', result.results[randomNumber].image);
            document.getElementById('plot5').innerText = result.results[randomNumber].plot;
            document.getElementById('rating5').innerText = result.results[randomNumber].imDbRating;
        };
        randomize();
        document.getElementById('movieCard5').addEventListener('click', randomize);
    })
    .catch(error => console.log('error', error));