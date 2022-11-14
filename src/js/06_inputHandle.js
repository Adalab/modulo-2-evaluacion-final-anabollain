//Main function for input event, if users empties input, all original characters appear
function handleSearchInput(event){
    if(event.currentTarget.value === ''){
        listEl.innerHTML = "";
        renderAllChar(charactersList);
        //Fill global array with created article elements in previous function
        allCharacters = document.querySelectorAll('.js-char-item');
        //Fill favorites array
        createFavArr();
        //Add class to global array elements if they are already in favorites
        for (const char of allCharacters) {
            if(favCharacters !== null){
                for (const eachChar of favCharacters){
                    if (parseInt(eachChar.id) === parseInt(char.id)) {
                        char.classList.add('js-selected');
                    }
                }
            }
        }
        //Event listener in each article element in previous array
        for (const art of allCharacters) {
            art.addEventListener('click', handleListClick);
        }
    }
}

//Event listener search input
searchInputEl.addEventListener("input", handleSearchInput);