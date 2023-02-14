
var searchingTitle = new URL(document.location).searchParams.get('name');
console.log('Seraching for: ' + searchingTitle);

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch('https://imdb-api.com/en/API/SearchTitle/k_kf6u348l/' + searchingTitle, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        document.getElementById('resultLength').innerHTML = result.results.length + ' results found for "' + searchingTitle + '"';

        for (let i = 0; i < result.results.length; i++) {

            var a = document.createElement('a');
            a.setAttribute('href', './info.html');
            a.setAttribute('class', 'mt-10 mb-10 ml-auto mr-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700');

            var img = document.createElement('img');
            img.setAttribute('class', 'object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg');
            img.setAttribute('src', result.results[i].image);

            var div = document.createElement('div');
            div.setAttribute('class', 'flex flex-col justify-between p-4 leading-normal');

            var h5 = document.createElement('h5');
            h5.setAttribute('class', 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white');
            h5.innerText = result.results[i].title;

            var p = document.createElement('p');
            p.setAttribute('class', 'mb-3 font-normal text-gray-700 dark:text-gray-400');
            p.innerText = result.results[i].description;

            div.append(h5, p);

            a.append(img, div);
            function storeId(){
                console.log('clck');
                localStorage.setItem('movieId', result.results[i].id);
                console.log(result.results[i].id);
            };
            document.getElementById('search-result-container').append(a);
            
            a.addEventListener('click', storeId);
        }
    })
    .catch(error => console.log('error', error));


 