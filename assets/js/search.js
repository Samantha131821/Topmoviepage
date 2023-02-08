var searchBar = document.getElementById('search-navbar');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  console.log('Im not searching yet ');
  
searchBar.addEventListener('keydown', function(event){
  if(event.code === 'Enter' || event.code === 'NumpadEnter'){
  var searchTitle = searchBar.value.trim();
    console.log(searchTitle)
  }
  })