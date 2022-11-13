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
            const filteredCharList = charactersList.filter((eachChar) =>
                eachChar.name.toLowerCase().includes(userSearch)
            );
            if (filteredCharList.length !== 0) {
                listEl.innerHTML = "";
                renderAllChar(filteredCharList);
            } else {
                listEl.innerHTML = "Sorry, no results were found for your search";
            }
        }
    } 
}

//Event listener search button
searchBtnEl.addEventListener("click", handleSearchBtn);
