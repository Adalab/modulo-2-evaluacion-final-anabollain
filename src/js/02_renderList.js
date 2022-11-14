
//API request to obtain all characters 
fetch ('https://breakingbadapi.com/api/characters', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        })
    .then((response) => response.json())
    .then((data) => {
        //Fill global array with objects for general characters
        charactersList = data;
        //Render whole array with obtained objects
        renderAllChar(charactersList);
        //Fill global array with HTML articles for general characters
        allCharacters = document.querySelectorAll('.js-char-item');
        //Add event listener in each article element from previous array
        addEventListClick(allCharacters);
        //Add select class to original array if the element is in LS when loading site
        addSelectClass(allCharacters, favCharacters);
    });


//Function to add select class to original array if the element is in LS when loading site
function addSelectClass(originalarr, newarray){
    for (const char of originalarr){
        //If favorites array is not empty
        if(newarray !== null){
            for (const eachChar of newarray){
                //Check if id of two elements is equal
                if (parseInt(eachChar.id) === parseInt(char.id)) {
                    //Add class to original array elements
                    char.classList.add('js-selected');
                }
            }
        }
    }
}


//Function to add an event listener in each element of an array
function addEventListClick(array){
    for (const art of array) {
        art.addEventListener('click', handleListClick);
    }
}


//Function to create a DOM element for each object of the array of general characters
function renderChar(item){
    //Main li
    const newChar = document.createElement('li');
    newChar.setAttribute ('class','char__list--item js-char-item');
    newChar.setAttribute ('id', item.char_id);
    //Article
    const newCharArt = document.createElement('article');
    newCharArt.setAttribute ('class','char__article');
    //Article - image
    const newCharArtImg = document.createElement('img');
    newCharArtImg.setAttribute ('class', 'char__article--img');
    newCharArtImg.setAttribute ('src', item.img);
    newCharArtImg.setAttribute ('alt', item.name);
    newCharArt.appendChild(newCharArtImg);
    //Article-title
    const newCharArtTitle = document.createElement('h3');
    newCharArtTitle.setAttribute('class', 'char__article--title');
    const newCharArtText = document.createTextNode (item.name);
    newCharArtTitle.appendChild(newCharArtText);
    newCharArt.appendChild(newCharArtTitle);
    //Article-subtitle
    const newCharArtSubtitle = document.createElement('small');
    newCharArtSubtitle.setAttribute('class','char__article--subtitle');
    const newCharArtSmall = document.createTextNode (item.status);
    newCharArtSubtitle.appendChild(newCharArtSmall);
    newCharArt.appendChild(newCharArtSubtitle);
    //Add all to li element
    newChar.appendChild(newCharArt);
    return newChar;
}


//Function to render characters array, creating a DOM li element for each item and adding it to the main ul element from the site
function renderAllChar(array){
    for (const item of array){
        const newCharEl = renderChar(item);
        listEl.appendChild(newCharEl);
    }
}


//Function to create a DOM element for each object of the array of favorite characters
function renderFavChar(item){
    //Main li
    const newChar = document.createElement('li');
    newChar.setAttribute ('class','char__list--item js-favchar-item js-highlight');
    newChar.setAttribute ('id', item.char_id);
    //Article
    const newCharArt = document.createElement('article');
    newCharArt.setAttribute ('class','char__article');
    //Article - detele icon
    const delIcon = document.createElement('i');
    delIcon.setAttribute('class', 'fa-solid fa-xmark char__article--del js-fav-del');
    delIcon.setAttribute('id', item.char_id);
    newCharArt.appendChild(delIcon);
    //Article - image
    const newCharArtImg = document.createElement('img');
    newCharArtImg.setAttribute ('class', 'char__article--img');
    newCharArtImg.setAttribute ('src', item.img);
    newCharArtImg.setAttribute ('alt', item.name);
    newCharArt.appendChild(newCharArtImg);
    //Article-title
    const newCharArtTitle = document.createElement('h3');
    newCharArtTitle.setAttribute('class', 'char__article--title');
    const newCharArtText = document.createTextNode (item.name);
    newCharArtTitle.appendChild(newCharArtText);
    newCharArt.appendChild(newCharArtTitle);
    //Article-subtitle
    const newCharArtSubtitle = document.createElement('small');
    newCharArtSubtitle.setAttribute('class','char__article--subtitle');
    const newCharArtSmall = document.createTextNode (item.status);
    newCharArtSubtitle.appendChild(newCharArtSmall);
    newCharArt.appendChild(newCharArtSubtitle);
    //Add all to li element
    newChar.appendChild(newCharArt);
    return newChar;
}

//Function to render favorite characters array, creating a DOM li element for each item and adding it to the main ul element from the site
function renderAllFavChar(array){
    for (const item of array){
        const newFavCharEl = renderFavChar(item);
        favListEl.appendChild(newFavCharEl);
    }
}


