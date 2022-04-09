document.getElementById('memeScroll')
function fetchMemes(){
  document.getElementById('loadingScreen').style.display='block';
  fetch('https://meme-api.herokuapp.com/gimme')
.then(response => response.json())
.then(data => {
    document.getElementById('memeScroll').src=data.url; // Prints result from `response.json()` in getRequest
    document.getElementById('loadingScreen').style.display='none';
})
.catch(error => console.error(error))  
}
fetch('https://meme-api.herokuapp.com/gimme')
.then(response => response.json())
.then(data => {
    document.getElementById('memeScroll').src=data.url; // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))  