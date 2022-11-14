
//Create variable to store LS
const savedFavChar = JSON.parse(localStorage.getItem('fs'));

//Render local storage with saved favorites when loading the site
if(savedFavChar !== null){
    favCharactersObjList = savedFavChar;
    renderAllFavChar(savedFavChar); 
    //Create array with favorites li elements
    createFavArr();
    //Create array with favorites X icon elements
    delIcons = document.querySelectorAll('.js-fav-del');
    //Add event listener in each X icon
    addDeleteListeners();
    //Add general delete button if there are saved favorites when loading site
    if(favCharacters.length !== 0){
        delBtnEl.classList.remove('js-hidden');
    }else{
        delBtnEl.classList.add('js-hidden');
    }
}

