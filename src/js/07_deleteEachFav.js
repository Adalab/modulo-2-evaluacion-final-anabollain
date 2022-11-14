
//Function to delete selected class
function deleteSelClass(array, selItem) {
    for (const char of array) {
        if (parseInt(char.id) === parseInt(selItem)) {
            char.classList.remove('js-selected');
        }
    }
}


//Function to check object position related to X icon
function delObject(selItem){
    const selFavIndex = favCharactersObjList
        .findIndex((eachChar) => eachChar.char_id === parseInt(selItem));
    if(selFavIndex !== -1){
        favCharactersObjList.splice(selFavIndex, 1);
    }else{
        delBtnEl.classList.add('js-hidden');
    }
}


//Main function for click event in X delete icon
function handleDelClick(event) {
    //Variable to identify selected HTML element
    const selectedDel = event.currentTarget.id;
    //Check object position and delete it
    delObject(selectedDel);
    //Render array of objects for selected favorites
    fillFavSection(favCharactersObjList);
    //Local Storage
    saveFavLs();
    //Create array with favorites li elements
    createFavArr();
    //Delete class from general array
    deleteSelClass(allCharacters, selectedDel);
    //Delete class from filtered array
    deleteSelClass(filteredCharList, selectedDel);
    //Create array with favorites X icon elements
    delIcons = document.querySelectorAll('.js-fav-del');
    //Add event listener to delete icons in each element
    addDeleteListeners();
    //Add or remove general delete button
    addGenDelBtn();
}
