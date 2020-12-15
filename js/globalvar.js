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

if(window.jQuery)
console.log("loaded");
else
console.log("not loaded");

let _todayDate = new Date();
let _todayDayWeek = _todayDate.getDay();

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}