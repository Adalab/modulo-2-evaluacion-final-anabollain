'use strict';

const savedFavChar = JSON.parse(localStorage.getItem('fs'));

//Render local storage with saved favorites when loading the site 
if(savedFavChar !== null){
    favCharactersObjList = savedFavChar;
    renderAllFavChar(savedFavChar); 
    //Create array with favorites li elements
    createFavArr();
    //Add class to each element of the array
    addFavClass();
    //Add event listener
    addDeleteListeners();
}

