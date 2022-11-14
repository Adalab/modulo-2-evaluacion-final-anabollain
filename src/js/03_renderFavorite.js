'use strict';

//Function to check if selected items are already in favorite characters section
function checkFav(selectedItem) {
    //Find object matching the li element with id attribute (json object char_id has been used for html id attributes, if they match, we will know which object responds to the selected element)
    const selectedObj = charactersList
        .find((eachChar) => eachChar.char_id === parseInt(selectedItem.id));
    //Search for the index of the selected element in favourites array, if it does not exist, then it will return -1
    const charinFavIndex = favCharactersObjList
        .findIndex((eachChar) => eachChar.char_id === parseInt(selectedItem.id));
    if (charinFavIndex === -1) {
        //In this case, we add it to the array
        favCharactersObjList.push(selectedObj);
    } else {
        //Otherwise, we delete it using its index
        favCharactersObjList.splice(charinFavIndex, 1);
        selectedItem.classList.remove('js-selected');
    }
}

//Function to render favorite characters section
function fillFavSection(array) {
    //Empty HTML element to fill it with the latest array
    favListEl.innerHTML = '';
    //Render latest array after checking all conditions
    renderAllFavChar(array);
}

//Function to save in local storage
function saveFavLs(){
    //Update local storage
    localStorage.setItem('fs', JSON.stringify(favCharactersObjList));
}

//Function to create array of li elements responding to the added objects in favorites
function createFavArr(){
    //Array of li elements responding to the added objects
    favCharacters = document.querySelectorAll('.js-favchar-item');
}

//Function to add class to elements in favorites array

function addFavClass(){
    for (const eachChar of favCharacters){
        eachChar.classList.add('js-highlight');
    }
}

//Function to add event listener in delete icons
function addDeleteListeners(){
    //Fill global array with all delete icons
    delIcons = document.querySelectorAll('.js-fav-del');
    //Event listener in each X delete icon
    for (const icon of delIcons) {
        icon.addEventListener('click', handleDelClick)
    }
}

//Main function for click event in each article
function handleListClick(event) {
    //Variable to identify selected HTML element
    const selectedItem = event.currentTarget;
    //Add or remove class when clicking on HTML element
    selectedItem.classList.toggle('js-selected');
    //Check if it already exists in favorites
    checkFav(selectedItem);
    //Render selected favorites
    fillFavSection(favCharactersObjList);
    //Local Storage
    saveFavLs();
    //Create array with favorites li elements
    createFavArr();
    //Add class to each element of the array
    addFavClass();
    //Add event listener to delete icons in each element
    addDeleteListeners();
}

