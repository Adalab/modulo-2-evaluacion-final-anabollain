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
            const filteredCharObjList = charactersList.filter((eachChar) =>
                eachChar.name.toLowerCase().includes(userSearch)
            );
            if (filteredCharObjList.length !== 0) {
                listEl.innerHTML = "";
                renderAllChar(filteredCharObjList);
                //Add class to HTML element, search for the elements responding to each object with id attribute
                //Array with filteredCharList
                const filteredCharList = document.querySelectorAll('.js-char-item');
                //For each element of the array, if id equals to 
                for (const item of filteredCharList){
                    if(favCharacters !== null){
                        console.log(favCharacters)
                        console.log('id fav character')
                        console.log(favCharacters[0].id)
                        console.log('id filtered characters')
                        console.log(item)
                        console.log(item.id)
                        const searchinFavIndex = favCharacters
                            .find((eachChar) => parseInt(eachChar.id) === parseInt(item.id));
                        /*if(searchinFavIndex !== -1){
                            item.classList.add('js-selected');
                        }*/
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
