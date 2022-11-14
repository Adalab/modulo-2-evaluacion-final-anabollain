'use strict';

function handleDelBtnClick(){
    if(favCharacters.length !== 0){
        favListEl.innerHTML = '';
        favCharactersObjList = [];
        saveFavLs();
    }
    for(const eachChar of allCharacters){
        eachChar.classList.remove('js-selected');
    }
    delBtnEl.classList.add('js-hidden');
}

delBtnEl.addEventListener('click', handleDelBtnClick);
