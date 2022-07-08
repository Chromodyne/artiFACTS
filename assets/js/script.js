//Variables used for state.
let localNewsData = [];     //Stores the most recently fetched info from the API call to reduce redundant API calls.
let currentArticle = 0;
let numWords = 0;

//Call Google News API on page load.
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

//WordsAPI API Call
function callWordsApi(word) {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6ec6cf3aa6msh04ad88a208dda4ap1e0104jsn10035a179610',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, options)
        .then(response => response.json())
        .then(response => updateWordDef(response, word))
        //.catch(err => console.error(err));
};

//Takes in the response from the Google News API
function readyNewsData(newsData) {

    //Make a local array containing the api data.
    localNewsData = newsData;

    document.getElementById("news-title").textContent = localNewsData.articles[0].title;

    //document.getElementById("news-description").textContent = localNewsData.articles[0].description;

}

//This function changes the article based on which button is clicked. This is determined by the event parameter
//passed in by the event listener on said buttons.
function changeArticle(event) {

    numWords = 0;

    if (event.currentTarget.id == "next-article") {
        currentArticle++;
    }
    
    if (event.currentTarget.id == "previous-article" && currentArticle > 0) {
        currentArticle--;
    }

    //Remove previously appended children on article switch.
    if (currentArticle !== 0) {
        removeAllChildren();
        removeWordEventListeners();
    }


    document.getElementById("news-title").textContent = localNewsData.articles[currentArticle].title;

    divideDescription();
    addWordEventListeners();

}

//Sets date at the top of the page.
const date = document.getElementById('date');

date.innerText = moment().format("dddd, MMMM Do YYYY");

//Event Listeners for Buttons
document.getElementById("next-article").addEventListener("click", changeArticle);
document.getElementById("previous-article").addEventListener("click", changeArticle);

//Create p elements in HTML
function divideDescription() {

    let wordArray = [];

    //Gets the description of the current article.
    let newsDesc = localNewsData.articles[currentArticle].description;

    wordArray = newsDesc.split(" ");

    let newsDescLength = newsDesc.split(" ").length;

    console.log(wordArray);

    let theParent = document.getElementById("word-list");

    for (let i = 0; i < newsDescLength; i++) {
       
        numWords++;

        //Create a new p element with an id == i
        let newEl = document.createElement("p");
        newEl.setAttribute("id", i);

        newEl.textContent = wordArray[i];

        theParent.appendChild(newEl);

    }

    addWordEventListeners();

}

//Used to remove all children p tags of the parent div of the article description when the article is changed.
function removeAllChildren() {
    
    let parentElement = document.getElementById("word-list");

    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }

    console.log("All children removed.");

}

//This function adds event listeners to each word in the text so that a definition may be grabbed from the Words API.
function addWordEventListeners() {

    //Iterate through the number of words which determines the highest ID #. Add an event listener to each ID.
    for(let i = 0; i < numWords; i++) {
        document.getElementById(i).addEventListener("click", getWordDef);
    }

}

//When a new article is pulled we must remove all the current event listeners before we can add them to a new one.
//TODO: Might be able to get away without doing this every time for performance.
function removeWordEventListeners() {
    
    for(let i = 0; i < numWords; i++) {
        document.getElementById(i).removeEventListener("click", getWordDef);
    }

}

//TODO: This function will get the definition of a word from the WordsAPI.
function getWordDef(event) {

    let word = event.currentTarget.textContent;

    //Remove any symbols from the word.
    let modifiedWord = word.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

    callWordsApi(modifiedWord);

}

//Updates the word definitions based on the word clicked on.
function updateWordDef(defs, word) {

    console.log(defs);

    document.getElementById("word-name").textContent = word;
    
    let def1 = document.getElementById("def-1");
    let def2 = document.getElementById("def-2");
    let def3 = document.getElementById("def-3");


    if (defs.definitions[0] != null && defs.definitions[0] != undefined) {
        
        def1.textContent = defs.definitions[0].definition;
        def1.style.display = "list-item";

    } else {gi

        def1.style.display = "none";

    }
    
    if (defs.definitions[1] != null && defs.definitions[1] != undefined) {

        def2.textContent = defs.definitions[1].definition;
        def2.style.display = "list-item";

    } else {

        def2.style.display = "none";


    }

    if (defs.definitions[2] != null && defs.definitions[2] != undefined) {

        def3.textContent = defs.definitions[2].definition;
        def3.style.display = "list-item";

    } else {

        def3.style.display = "none";

    }
<<<<<<< HEAD
}


// 
=======

}

function saveLocalData() {

}
>>>>>>> 19e17aaf95cf131fd2ee47ab8f7370e3e9fdc147
