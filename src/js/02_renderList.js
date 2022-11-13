'use strict';

//Request to obtain all characters 
fetch ('https://breakingbadapi.com/api/characters', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        })
    .then((response) => response.json())
    .then((data) => {
        charactersList = data;
        //Function to render whole array with obtained objects
        renderAllChar(charactersList);
        //Fill global array with created article elements in previous function
        allCharacters = document.querySelectorAll('.js-char-item');
        //Event listener in each article
        for (const art of allCharacters) {
            art.addEventListener("click", handleListClick);
        }
    });

    
//Function to create a DOM element for each item of the array
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

//Function to render an array, creating a DOM li element for each item and adding it to the main ul element from the site
function renderAllChar(array){
    for (const item of array){
        const newCharEl = renderChar(item);
        listEl.appendChild(newCharEl);
    }
}

function renderFavChar(array){
    for (const item of array){
        const newCharEl = renderChar(item);
        favListEl.appendChild(newCharEl);
    }
}