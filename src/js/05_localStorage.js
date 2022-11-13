'use strict';

const savedFavChar = JSON.parse(localStorage.getItem('fs'));

//Render local storage with saved favorites when loading the site
renderFavChar(savedFavChar); 