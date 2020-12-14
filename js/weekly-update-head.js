let _actualClicked = 0;
let _dummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et...";
let _dummyAuthor = "authorname";
let _polkaCatLink = "https://www.youtube.com/watch?v=NUYvbT6vTPs";
let _allWebtoons=[];

function WebtoonCard(name, author, synopsis, grade, genre, link, image){
    this.name = name;
    this.author = author;
    this.synopsis = synopsis;
    this.genre = genre;
    this.link = link;
    this.image = image;
    if(grade/100000>0){
        this.grade =(grade/100000).toFixed(1) +"M"; 
    }else if(grade/1000>0){
        this.grade = (grade/1000).toFixed(1)+"K";
    }else{
        this.grade=grade;
    }
    addGenre(this);
}

function GenreCard(name, description){
    this.name=name;
    this.description=description;
    this.list=[];
    this.showlist=[];
}

let _Romance = new GenreCard("Romance", _dummyText);
let _SciFi = new GenreCard("Sci-Fi", _dummyText)
let _Drama = new GenreCard("Drama", _dummyText);
let _Comedy = new GenreCard("Comedy", _dummyText);
let _Slice = new GenreCard("Slice of Life", _dummyText);
let _Fantasy = new GenreCard("Fantasy", _dummyText);
let _Supernatural = new GenreCard("Supernatural", _dummyText);

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



let genres = {
    romance:"romance",
    scifi:"sci-fi",
    drama:"drama",
    comedy:"comedy",
    slice:"slice of life",
    fantasy:"fantasy",
    supernatural:"supernatural"
}

function addGenre(webtoon){
    switch(webtoon.genre){
        case genres.romance:
            _Romance.list.push(webtoon);
            break;
        case genres.scifi:
            _SciFi.list.push(webtoon);
            break;
        case genres.drama:
            _Drama.list.push(webtoon);
            break;
        case genres.comedy:
            _Comedy.list.push(webtoon);
            break;
        case genres.slice:
            _Slice.list.push(webtoon);
            break;
        case genres.fantasy:
            _Fantasy.list.push(webtoon);
            break;
        case genres.supernatural:
            _Supernatural.list.push(webtoon);
            break;
    }
}



let _cardAcception = new WebtoonCard("Acception", "Colourbee", _dummyText,562600, genres.romance, _polkaCatLink, "images/stories/acception.jpg");
let _cardAntiStalker = new WebtoonCard("AntiSTALKER", "VOKIVOKI", _dummyText,427200, genres.romance, _polkaCatLink, "images/stories/antistalker.jpg");
let _cardDuke = new WebtoonCard("Love Advice from the Great Duke of Hell", "unfins", _dummyText,598423,genres.comedy, _polkaCatLink, "images/stories/duke.jpg");
let _cardEdith = new WebtoonCard("Edith", "Swansgarden", _dummyText, 8469726, genres.romance, _polkaCatLink, "images/stories/edith.jpg");
let _cardEmpress = new WebtoonCard("The Remarried Empress", "Alphatart/Sumpul", _dummyText, 975205, genres.fantasy, _polkaCatLink, "images/stories/empress.jpg");
let _cardFour = new WebtoonCard("The Four Of Us", "Mai Hirschfield_", _dummyText, 877700, genres.drama, _polkaCatLink, "images/stories/four.jpg");
let _cardGiantNerd = new WebtoonCard("My Giant Nerd Boyfriend", "fishball", _dummyText, 879200, genres.slice, _polkaCatLink, "images/stories/giantnerd.jpg");
let _cardLoveEnemy = new WebtoonCard("To Love Your Enemy", "Jungyoon/Taegeon", _dummyText, 3647920, genres.romance, _polkaCatLink, "images/stories/loveenemy.jpg");
let _cardLoveMeKnot = new WebtoonCard("Love Me Knot", "Sophia", _dummyText, 7942063, genres.romance, _polkaCatLink, "images/stories/lovemeknot.jpg");
let _cardNiceToMeetYou = new WebtoonCard("Nice To Meet You", "Wishroomness", _dummyText, 9842231, genres.romance, _polkaCatLink, "images/stories/nicetomeetyou.jpg");
let _cardOmniscientReader = new WebtoonCard("Omniscient Reader", "sing N song / Sleepy-C", _dummyText, 781943, genres.fantasy, _polkaCatLink, "images/stories/omniscient.jpg");
let _cardPhase = new WebtoonCard("Phase", "Jouki", _dummyText, 78166905, genres.romance, _polkaCatLink, "images/stories/phase.jpg");
let _cardSwimmingLessons = new WebtoonCard("Swimming Lessons for a Mermaid", "YONGCHAN", _dummyText, 1038298, genres.romance, _polkaCatLink, "images/stories/swimming.jpg");
let _cardTrueBeauty = new WebtoonCard("True Beauty", "Yaoingi", _dummyText, 18498742, genres.romance, _polkaCatLink, "images/stories/truebeauty.jpg");
let _cardUnholy = new WebtoonCard("Unholy Blood", "fiLina Im/JeonghyeonKim", _dummyText, 782036, genres.supernatural, _polkaCatLink, "images/stories/unholy.jpg");
let _cardYumiCells = new WebtoonCard("Yumi Cells", "Donggeon Lee", _dummyText, 782036, genres.slice, _polkaCatLink, "images/stories/yummicells.jpg");
let _cardBlueChair = new WebtoonCard("Bluechair", "Shen", _dummyText, 782036, genres.slice, _polkaCatLink, "images/stories/yummicells.jpg");




let _cardsOfDay = [
    [_cardAcception, _cardNiceToMeetYou, _cardDuke, _cardFour, _cardTrueBeauty, _cardOmniscientReader, _cardSwimmingLessons, _cardLoveEnemy, _cardUnholy, _cardEmpress], 
    [_cardAntiStalker, _cardDuke, _cardEmpress, _cardFour, _cardLoveEnemy, _cardLoveMeKnot, _cardNiceToMeetYou, _cardPhase, _cardSwimmingLessons, _cardUnholy],
    [_cardAcception, _cardEdith, _cardEmpress, _cardFour, _cardGiantNerd, _cardLoveEnemy, _cardOmniscientReader, _cardPhase, _cardTrueBeauty, _cardUnholy],
    [_cardAcception,_cardAntiStalker, _cardDuke, _cardEdith, _cardFour, _cardLoveMeKnot, _cardNiceToMeetYou, _cardOmniscientReader, _cardSwimmingLessons, _cardTrueBeauty],
    [_cardFour, _cardGiantNerd, _cardLoveEnemy, _cardLoveMeKnot, _cardNiceToMeetYou, _cardOmniscientReader, _cardPhase, _cardSwimmingLessons, _cardTrueBeauty, _cardUnholy],
    [_cardAcception,_cardAntiStalker, _cardDuke, _cardEdith, _cardEmpress, _cardFour, _cardGiantNerd, _cardLoveEnemy, _cardLoveMeKnot, _cardNiceToMeetYou],
    [_cardAcception,_cardAntiStalker, _cardDuke, _cardEdith, _cardLoveEnemy, _cardLoveMeKnot, _cardNiceToMeetYou, _cardSwimmingLessons, _cardTrueBeauty, _cardUnholy]
];

let _cardsNews = [_cardFour, _cardLoveEnemy, _cardNiceToMeetYou, _cardUnholy, _cardSwimmingLessons];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

_cardsOfDay.forEach(function(element, index){
    shuffle(_cardsOfDay[index]);
})

let _pagesBar = document.getElementsByClassName("page-box")[0];
let _arrayDaysPage = document.getElementsByClassName("page");
let _newsBar = document.getElementById("new");
