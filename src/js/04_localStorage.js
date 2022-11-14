'use strict';

const savedFavChar = JSON.parse(localStorage.getItem('fs'));

//Render local storage with saved favorites when loading the site 
if(savedFavChar !== null){
    favCharactersList = savedFavChar;
    renderAllFavChar(savedFavChar); 
    //Array of li elements
    favCharacters = document.querySelectorAll('.js-favchar-item');
    //Create array with favorites li elements
    createFavArr();
    //Add event listener
    addDeleteListeners();
    console.log(favCharacters)
}

