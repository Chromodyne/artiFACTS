//WordsAPI Settings
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ec6cf3aa6msh04ad88a208dda4ap1e0104jsn10035a179610',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

//WordsAPI API Call
// fetch('https://wordsapiv1.p.rapidapi.com/words/.22-caliber/pertainsTo', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//Google News API Settings
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ec6cf3aa6msh04ad88a208dda4ap1e0104jsn10035a179610',
		'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
	}
};

//Google News API Call
// fetch('https://google-news1.p.rapidapi.com/list-languages?country=%3CREQUIRED%3E', options2)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

let date = document.getElementById('date');

date.innerText = moment().format("dddd, MMMM Do YYYY");