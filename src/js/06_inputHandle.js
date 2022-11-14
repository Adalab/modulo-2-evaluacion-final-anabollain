//Main function for input event, if users empties input, all original characters appear
function handleSearchInput(event){
    //If input is empty
    if(event.currentTarget.value === ''){
        //Empty ul element
        listEl.innerHTML = "";
        //Render all characters
        renderAllChar(charactersList);
        //Fill global array with created article elements in previous function
        allCharacters = document.querySelectorAll('.js-char-item');
        //Fill favorites array
        createFavArr();
        //Add class to global array elements if they are already in favorites
        addSelectClass(allCharacters, favCharacters);
        //Event listener in each article element in previous array
        addEventListClick(allCharacters);
    }
}

//Event listener search input
searchInputEl.addEventListener("input", handleSearchInput);