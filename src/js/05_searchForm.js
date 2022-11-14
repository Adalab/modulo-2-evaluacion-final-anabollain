"use strict";

//Main function for search button event listener
function handleSearchBtn(event) {
    event.preventDefault();
    const userSearch = searchInputEl.value.toLowerCase();
    if(charactersList.length === 0){
        listEl.innerHTML = 'Please wait a few seconds until the information has been loaded';
    }else{
        if (userSearch === ""){
            alert("You must write the name of a character");
        }else{
            //Filter original array with users input
            const filteredCharObjList = charactersList
                .filter((eachChar) => eachChar.name.toLowerCase().includes(userSearch));
            //If the array is not empty, then: 
            if (filteredCharObjList.length !== 0) {
                listEl.innerHTML = "";
                renderAllChar(filteredCharObjList);
                //Array of fav characters
                createFavArr();
                //Add class to HTML element, search for the elements responding to each object with id attribute
                //Array with filteredCharList
                filteredCharList = document.querySelectorAll('.js-char-item');
                //For each element of the filtered array, if id equals to id of favorite characters array
                for (const item of filteredCharList){
                    if(favCharacters !== null){
                        for (const eachChar of favCharacters){
                            if(parseInt(eachChar.id) === parseInt(item.id)){
                                item.classList.add('js-selected');
                            }
                        }       
                    }
                }
                //Event listener in each article element in filtered array
                for (const art of filteredCharList) {
                    art.addEventListener('click', handleListClick);
                }
            }else{
                listEl.innerHTML = "Sorry, no results were found for your search";
            }
        } 
    }
}

//Event listener search button
searchBtnEl.addEventListener("click", handleSearchBtn);

