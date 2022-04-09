const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
  params: {
    top: 'Top Text',
    bottom: 'Bottom Text',
    meme: 'Condescending-Wonka',
    font_size: '50',
    font: 'Impact'
  },
  headers: {
    'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
    'X-RapidAPI-Key': 'ce38470b72mshc765cfff6a1d33dp1c5eddjsnd7e3b4127525'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});