//RenderList variables
const listEl = document.querySelector('.js-list-char');
const favListEl = document.querySelector('.js-list-fav-char');

//SearchForm variables
const searchInputEl = document.querySelector('.js-search-input');
const searchBtnEl = document.querySelector('.js-search-btn');


//Global variable for array of objects
let charactersList = [];

//Global variable for array of articles
let allCharacters = [];

//Global variable for array of favorite articles
let favCharacters = [];

//Global variable for array of favorite character objets
let favCharactersObjList = [];

//Global variable for delete icons
let delIcons = [];

//Global variable for filtered array with users search
let filteredCharList = [];

//Delete button variable
const delBtnEl = document.querySelector('.js-del-btn');