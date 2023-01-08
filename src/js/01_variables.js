////RenderList variables
//HTML ul element for general characters
const listEl = document.querySelector('.js-list-char');
//HTML ul element for favorite characters
const favListEl = document.querySelector('.js-list-fav-char');

////SearchForm variables
//Search input
const searchInputEl = document.querySelector('.js-search-input');
//Search button
const searchBtnEl = document.querySelector('.js-search-btn');
//Search alert
const searchAlertEl = document.querySelector('.js-alert-msg');



////Global variables
//Global variable for array of objects for general characters
let charactersList = [];

//Global variable for array of articles for general characters
let allCharacters = [];

//Global variable for array of objects for favorite characters
let favCharactersObjList = [];

//Global variable for array of articles for favorite characters
let favCharacters = [];

//Global variable for delete icons in favorite characters
let delIcons = [];

//Global variable for filtered array with users search
let filteredCharList = [];

//Delete button variable for favorite characters
const delBtnEl = document.querySelector('.js-del-btn');