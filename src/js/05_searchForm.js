"use strict";

//Main function for search button event listener
function handleSearchBtn(event) {
    event.preventDefault();
    const userSearch = searchInputEl.value.toLowerCase();
    if(charactersList.length === 0){
        listEl.innerHTML = 'Please wait a few seconds until the information has been loaded';
    }else{
        if (userSearch === "") {
            alert("You must write the name of a character");
        } else {
            //Filter original array with users input
            const filteredCharObjList = charactersList
                .filter((eachChar) => eachChar.name.toLowerCase().includes(userSearch));
            //If the array is not empty, then: 
            if (filteredCharObjList.length !== 0) {
                listEl.innerHTML = "";
                renderAllChar(filteredCharObjList);
                //Add class to HTML element, search for the elements responding to each object with id attribute
                //Array with filteredCharList
                filteredCharList = document.querySelectorAll('.js-char-item');
                //For each element of the array, if id equals to 
                for (const item of filteredCharList){
                    if(favCharacters !== null){
                        for (const eachChar of favCharacters){
                            if(parseInt(eachChar.id) === parseInt(item.id)){
                                item.classList.add('js-selected');
                            }
                        }       
                }
                }
            }else{
                listEl.innerHTML = "Sorry, no results were found for your search";
            }
        }
    } 
}

//Event listener search button
searchBtnEl.addEventListener("click", handleSearchBtn);

//Main function for input event, if users empties input, all original characters appear
function handleSearchInput(event){
    if(event.currentTarget.value === ''){
        listEl.innerHTML = "";
        renderAllChar(charactersList);
    }
}

//Event listener search input
searchInputEl.addEventListener("input", handleSearchInput);