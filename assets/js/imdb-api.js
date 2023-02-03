//https://imdb-api.com/API
//p.orest@gmail.com
//L(+c3/eS.Z



var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch('https://imdb-api.com/en/API/InTheaters/k_kf6u348l', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result.items))
    .catch(error => console.log('error', error));

