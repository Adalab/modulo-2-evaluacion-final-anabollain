'use strict';

const savedFavChar = JSON.parse(localStorage.getItem('fs'));

//Render local storage with saved favorites when loading the site 
if(savedFavChar !== null){
    favCharactersList = savedFavChar;
    renderAllFavChar(savedFavChar); 
    //Fill global array with all delete icons
    delIcons = document.querySelectorAll('.js-fav-del');
    //Event listener in each X delete icon
    for (const icon of delIcons){
        icon.addEventListener('click', handleDelClick);
    }
     //Array of li elements
    favCharacters = document.querySelectorAll('.js-favchar-item');
}

