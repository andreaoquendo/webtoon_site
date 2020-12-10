let _searchButton = document.getElementById("search-bar");
let _closeButton = document.getElementById("close");
let _searchBar = document.getElementById("search-bar-open");
var _searchBarInput = document.getElementById("input-search");
var _icoSearch = document.getElementsByClassName("ico_search");
_icoSearch = _icoSearch[0];
var _icoClear = document.getElementsByClassName("ico_clear");
_icoClear = _icoClear[0];
var _recentSearchesBox = document.getElementById("recentie");
var _researchHistory = " ";
let _buttonClearResearch = document.getElementById("clear-recent");
let _openSearchBox = document.getElementById("open-search-box");

window.onload = function () {
    _searchBarInput.value = "";
  };

function openSearch() {
  _searchBar.style.display = "block";
  if(_researchHistory == " ") _openSearchBox.style.display = "none";
  _searchBarInput.addEventListener("input", function () {
    _icoSearch.style.display = "none";
    _icoClear.style.display = "inline-block";
  });
}

function closeSearch() {
  _searchBar.style.display = "none";
}

_searchButton.addEventListener("click", openSearch);
_closeButton.addEventListener("click", closeSearch);


_icoClear.addEventListener("click", function () {
  _searchBarInput.value = "";
  _icoSearch.style.display = "inline-block";
  _icoClear.style.display = "none";
});

_buttonClearResearch.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.clear();
    _researchHistory = " ";
    _openSearchBox.style.display = "none";
})

document.addEventListener("keyup", function(event){
    if(_searchBarInput.value && event.key == 'Enter'){
        var _textInput = _searchBarInput.value;
        console.log(_textInput);
        addRecentSearch(_textInput);
        _searchBarInput.value="";
         _openSearchBox.style.display = "block";
    }
        
})

function addRecentSearch(textInput){
    var _addhtml = '<li><a href="javascript:void(0)">'+ textInput+'</a></li>';
    var newtext = _researchHistory + _addhtml;
    localStorage.setItem("recentSearches", newtext);
    updateRecent();
}

function updateRecent(){
    _researchHistory = localStorage.getItem("recentSearches");
    _recentSearchesBox.innerHTML = _researchHistory;
}

function init(){
    if(localStorage.getItem("recentSearches")){
        _researchHistory = localStorage.getItem("recentSearches");
        updateRecent();
    }

    else{
        localStorage.setItem("recentSearches", " ");
    }
}

init();
if(_researchHistory != " "){
    document.getElementById("recentie").style.display = "block";
    _openSearchBox.style.display = "block";
}