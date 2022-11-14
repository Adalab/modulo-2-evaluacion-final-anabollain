'use strict';

//Main function for X delete event
function handleDelClick(event) {
    //Current target
    const selDelIcon = event.currentTarget;
    //Delete select class from original array, matching element
    for (const char of allCharacters) {
        if (parseInt(char.id) === parseInt(selDelIcon.id)) {
            char.classList.remove('js-selected');
        }
    }
    //Delete select class from filtered array with users search, matching element
    for (const char of filteredCharList) {
        if (parseInt(char.id) === parseInt(selDelIcon.id)) {
            char.classList.remove('js-selected');
        }
    }
    //Find index position in array of selected element related to each X icon to delete it from array
    const selFavIndex = favCharactersObjList
        .findIndex((eachChar) => eachChar.char_id === parseInt(selDelIcon.id));
    //Delete element matching X icon when clicking on it
    favCharactersObjList.splice(selFavIndex, 1);
    //Empty HTML element to fill it with the latest array
    favListEl.innerHTML = '';
    //Render latest array after checking all conditions
    renderAllFavChar(favCharactersObjList);
    //Update local storage
    saveFavLs();
    //Fill global array with all delete icons
    delIcons = document.querySelectorAll('.js-fav-del');
    //If delIcons is empty, then hide general delete button
    if(delIcons.length === 0){
        delBtnEl.classList.add('js-hidden');
    }
    //Event listener in each X delete icon
    for (const icon of delIcons) {
        icon.addEventListener('click', handleDelClick);
    }
}