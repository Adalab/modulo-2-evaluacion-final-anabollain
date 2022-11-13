'use strict';

//Function to check if selected items are already in favorite characters section
function checkFav(selectedItem) {
    //Find object matching the li element with id attribute (json object char_id has been used for html id attributes, if they match, we will know which object responds to the selected element)
    const selectedObj = charactersList
        .find((eachChar) => eachChar.char_id === parseInt(selectedItem.id));
    //Search for the index of the selected element in favourites array, if it does not exist, then it will return -1
    const charinFavIndex = favCharactersList
        .findIndex((eachChar) => eachChar.char_id === parseInt(selectedItem.id));
    if (charinFavIndex === -1) {
        //In this case, we add it to the array
        favCharactersList.push(selectedObj);
    } else {
        //Otherwise, we delete it using its index
        favCharactersList.splice(charinFavIndex, 1);
        selectedItem.classList.remove('js-selected');
    }
}

//Function to render favorite characters section
function fillFavSection() {
    //Empty HTML element to fill it with the latest array
    favListEl.innerHTML = '';
    //Render latest array after checking all conditions
    renderAllFavChar(favCharactersList);
    //Update local storage
    localStorage.setItem('fs', JSON.stringify(favCharactersList));
    //Fill global array with all delete icons
    delIcons = document.querySelectorAll('.js-fav-del');
    //Event listener in each X delete icon
    for (const icon of delIcons) {
        icon.addEventListener('click', handleDelClick)
    }
    //Array of li elements
    favCharacters = document.querySelectorAll('.js-favchar-item');
}

//Main function for click event in each article
function handleListClick(event) {
    //Variable to identify selected HTML element
    const selectedItem = event.currentTarget;
    //Add or remove class when clicking on HTML element
    selectedItem.classList.toggle('js-selected');
    checkFav(selectedItem);
    fillFavSection();
}

