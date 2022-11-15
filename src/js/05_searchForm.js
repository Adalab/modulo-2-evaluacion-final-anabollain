
//Main function for search button event listener
function handleSearchBtn(event){
    event.preventDefault();
    //Search input value
    const userSearch = searchInputEl.value.toLowerCase();
    if(charactersList.length === 0){
        //Empty ul 
        listEl.innerHTML='';
        //Create p element
        const loadMsg = document.createElement('p');
        loadMsg.setAttribute('class', 'char__result')
        const loadMsgText = document.createTextNode('Please wait a few seconds until the information has been loaded');
        loadMsg.appendChild(loadMsgText);
        //Add element to ul
        listEl.appendChild(loadMsg);
    }else{
        if (userSearch === ""){
            searchAlertEl.innerHTML = '*You must write the name of a character';
        }else{
            //Filter original array with users input
            const filteredCharObjList = charactersList
                .filter((eachChar) => eachChar.name.toLowerCase().includes(userSearch));
            //If the array is not empty, then: 
            if (filteredCharObjList.length !== 0) {
                //Empty alert message
                searchAlertEl.innerHTML = '';
                //Empty ul element and render filtered array
                listEl.innerHTML = "";
                renderAllChar(filteredCharObjList);
                //Create array of fav characters
                createFavArr();
                //Create array with filteredCharList
                filteredCharList = document.querySelectorAll('.js-char-item');
                //Add select class to filtered array if the element is in favorites
                addSelectClass(filteredCharList, favCharacters);
                //Event listener in each article element in filtered array
                addEventListClick(filteredCharList);
            }else{
                //Empty alert message
                searchAlertEl.innerHTML = '';
                //Empty ul 
                listEl.innerHTML='';
                //Create p element
                const noResults = document.createElement('p');
                noResults.setAttribute('class', 'char__result')
                const noResultsText = document.createTextNode('Sorry, no results were found for your search');
                noResults.appendChild(noResultsText);
                //Add element to ul
                listEl.appendChild(noResults);
            }
        } 
    }
}

//Event listener search button
searchBtnEl.addEventListener("click", handleSearchBtn);

