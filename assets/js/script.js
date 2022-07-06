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

callNewsApi();

//Google News API Call
function callNewsApi() {

    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6ec6cf3aa6msh04ad88a208dda4ap1e0104jsn10035a179610',
            'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
        }
    };
    
    fetch('https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=25&media=true', options2).then(
        (resp) => {return resp.json();}).then (
        (data) => {  readyNewsData(data);
            console.log(data);
    });

}

//Takes in the response from the Google News API
function readyNewsData(newsData) {

    //Make a local array containing the api data.
    let localNewsData = newsData;

    //news-title
    document.getElementById("news-title").textContent = localNewsData.articles[0].title;

    //news-description
    document.getElementById("news-description").textContent = localNewsData.articles[0].description;

}

function nextArticles() {

}

const date = document.getElementById('date');

date.innerText = moment().format("dddd, MMMM Do YYYY");
