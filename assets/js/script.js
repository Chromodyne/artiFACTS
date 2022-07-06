//WordsAPI Settings
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'PLACEHOLDER',
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
		'X-RapidAPI-Key': 'PLACEHOLDER',
		'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
	}
};

//Google News API Call
// fetch('https://google-news1.p.rapidapi.com/list-languages?country=%3CREQUIRED%3E', options2)
// 	.then(response => response.json())
// 	.then(response => readyNewsData(response))
// 	.catch(err => console.error(err));

//Takes in the response from the Google News API
function readyNewsData(newsData) {

    //Make a local array containing the api data.
    let localNewsData = newsData;

    //news-title
    document.getElementById("news-title").textContent = localNewsData.articles[0].title;

    //news-description
    document.getElementById("news-description").textContent = localNewsData.articles[0].description;


}