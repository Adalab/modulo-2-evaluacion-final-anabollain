
//Main function delete button event
function handleDelBtnClick(){
    //Empty favorites array
    if(favCharacters.length !== 0){
        favListEl.innerHTML = '';
        favCharactersObjList = [];
        saveFavLs();
    }
    //Delete selected class for elements in general array
    for(const eachChar of allCharacters){
        eachChar.classList.remove('js-selected');
    }
    //Delete selected class for elements in filtered array, user search input
    for(const eachChar of filteredCharList){
        eachChar.classList.remove('js-selected');
    }
    //Hide delete button
    delBtnEl.classList.add('js-hidden');
}

//Event listener delete button
delBtnEl.addEventListener('click', handleDelBtnClick);
