let searchButton = document.getElementById("search-bar")
let _closeButton = document.getElementById("close");
let _searchBar = document.getElementById("search-bar-open");
var _searchBarInput = document.getElementById("input-search");
var _icoSearch = document.getElementsByClassName("ico_search");
_icoSearch = _icoSearch[0];
var _icoClear = document.getElementsByClassName("ico_clear");
_icoClear = _icoClear[0];

var _isOpen = false;
function openSearch(){
    _searchBar.style.display ="block";
    _isOpen=true;
    _searchBarInput.addEventListener("input", function(){
        _icoSearch.style.display="none";
        _icoClear.style.display="inline-block";
        console.log("oi");
    })
}

function closeSearch(){
    _searchBar.style.display="none";
    _isOpen=false;
}


window.onload = function(){
    _searchBarInput.value = '';
}
searchButton.addEventListener("click", openSearch);
_closeButton.addEventListener("click", closeSearch);
_icoClear.addEventListener("click", function(){
    _searchBarInput.value='';
    _icoSearch.style.display="inline-block";
    _icoClear.style.display="none";
})

    
