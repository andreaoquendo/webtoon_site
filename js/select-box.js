let _buttonPopularGenre = document.getElementsByClassName('selected')[0];
let _buttonPopularAge = document.getElementsByClassName('selected')[1];
let _categoryBoxGenre = document.getElementsByClassName('category-box')[0];
let _categoryBoxAge = document.getElementsByClassName('category-box')[1];
_buttonPopularGenre.addEventListener('click', function(){
    _categoryBoxGenre.style.display="block";
})