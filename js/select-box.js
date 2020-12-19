let _buttonPopularGenre = document.getElementsByClassName('selected')[0];
let _buttonPopularAge = document.getElementsByClassName('selected')[1];
let _categoryBoxGenre = document.getElementsByClassName('category-box')[0];
let _categoryBoxAge = document.getElementsByClassName('category-box')[1];
var isGenreClicked = false;
var isAgeclicked=false;
let _genresButtons = Array.from(document.getElementsByClassName("genre-item"));
var genreSelected = document.getElementsByClassName('check')[0];

_buttonPopularGenre.addEventListener('click', function(){
    _categoryBoxGenre.style.display="block";
    isGenreClicked=true;

})

_buttonPopularAge.addEventListener('click', function(){
    _categoryBoxAge.style.display="block";
    isAgeclicked=true;
})

function GenresEvents(){
    _genresButtons.forEach(function(button){
        button.addEventListener("click", function(){
            console.log("ha");
        });
    })
}
/*
window.onclick = function(event) {
    if (event.target !== _categoryBoxGenre && event.target!==_buttonPopularAge) {
      _categoryBoxGenre.style.display = "none";
      console.log(isGenreClicked);
      isGenreClicked=false;
    }
    if(event.target !== _categoryBoxAge && isAgeclicked === true){
        _categoryBoxAge.style.display="none";
        isAgeclicked=false;
    }
  }

  if(isGenreClicked){
      console.log("ta dando erro meo");
  }*/