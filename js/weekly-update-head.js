let _daysList = document.getElementsByClassName("days");
let _dayArray = [0,1,2,3,4,5,6];
let _daysInWeek = {
    0:"sunday",
    1:"monday",
    2:"tuesday",
    3:"wednesday",
    4:"thursday",
    5:"friday",
    6:"saturday"
}

let _actualClicked = 0;
let _dummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et...";
let _dummyAuthor = "authorname";
let _polkaCatLink = "https://www.youtube.com/watch?v=NUYvbT6vTPs";

let genres = {
    romance:"romance",
    scifi:"sci-fi",
    drama:"drama",
    comedy:"comedy",
    slice:"slice of life"
}

function WebtoonCard(name, author, synopsis, grade, genre, link, image){
    this.name = name;
    this.author = author;
    this.synopsis = synopsis;
    this.grade = grade;
    this.genre = genre;
    this.link = link;
    this.image = image;
}

let _cardAcception = new WebtoonCard("Acception", _dummyAuthor, _dummyText,15, genres.romance, _polkaCatLink, "images/stories/acception.jpg");
let _cardAntiStalker = new WebtoonCard("Anti Stalker", _dummyAuthor, _dummyText,15, genres.romance, _polkaCatLink, "images/stories/antistalker.jpg");
let _cardDuke = new WebtoonCard("Love Advice from the Great Duke of Hell", _dummyAuthor,15, _dummyText, genres.comedy, _polkaCatLink, "images/stories/duke.jpg");

let _cardsOfDay = [[_cardAcception], [_cardAcception,_cardAntiStalker],[],[],[],[],[]];

let _pagesBar = document.getElementsByClassName("page-box")[0];

