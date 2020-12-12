function transformDayWeek(day){
    return day==0 ? 6 : day-1;
}

function reverseTransformDayWeek(day){
    return day==6 ? 0 : day+1;
}

function changeDay(newday){
    _daysList[_actualClicked].classList.remove("open");
    _daysList[_actualClicked].classList.add("closed");
    _daysList[newday].classList.remove("closed");
    _daysList[newday].classList.add("open");
    _actualClicked=newday;
}

function init(){
    _actualClicked = transformDayWeek(_todayDayWeek);
    _daysList[_actualClicked].classList.remove("closed");
    _daysList[_actualClicked].classList.add("open");
    _dayArray.forEach(function(num, index){
        _daysList[index].addEventListener("click", function(){
            changeDay(index);
        })
    });
}

function createDayPage(){
    var _textInsert =
    '<ul class="page" style="display:none"></ul>';
    return _textInsert;
}

function createCard(webtoonCard){
    var _textInsert;
    var _link = "<a href="+ webtoonCard.link+" class='page-flip' target='_blank'>";
    var image = "<img src="+ webtoonCard.image+ " />";
    var info = "<div class='info'><p class='title'>"+webtoonCard.name +"</p><span class='grade-area'><img src='images/icons/heart.svg' width=12px />"+webtoonCard.grade+"</p></div>"
    var genre = "<span class='genre "+ webtoonCard.genre +"'>"+webtoonCard.genre+"</span>";
    var cardFront = "<div class='card-front'>" + image + info + genre + "</div>";
    var infoback ="<div class='info'><p class='title'>"+ webtoonCard.name+"</p><p class='author'>"+ webtoonCard.author +"</p><p class='horizontal-line'></p><p class='synopsis'>"+ webtoonCard.synopsis+"</p></div>";
    var cardBack='<div class="card-back">' + infoback +'</div>';
    _textInsert = '<li>' + _link +cardFront + cardBack + '</a></li>';
    /*
    <li>
                <a href="https://www.webtoons.com/en/romance/nice-to-meet-you/list?title_no=2066&page=1" class="page-flip" target="_blank">
                <div class="card-front">
                  <img src="images/stories/nicetomeetyou.jpg" />
                  <div class="info">
                    <p class="title">Nice to Meet You</p>
                    <span class="grade-area"><img src="images/icons/heart.svg" width=12px /> 14.1K</p>
                  </div>
                  <span class="genre romance">Romance</span>
                </div>
                <div class="card-back">
                  <div class="info">
                    <p class="title">Nice to Meet You</p>
                    <p class="author">Wishroomness</p>
                    <p class="horizontal-line"></p>
                    <p class="synopsis">A ditsy university student Mew finds a lost student card. Instead of doing the sensible thing, Mew decides to let fate take the wheel and try something silly. Little did she know, she would be...</p>
                  </div>
                </div>
              </a>
              </li>
    */
   return _textInsert;
}

function addPages(){
    var inner="";
    _dayArray.forEach(function(){
        inner+=createDayPage();
    })
    _pagesBar.innerHTML = inner;
}

function addCards(){
    var day=document.getElementsByClassName("page");
    _cardsOfDay.forEach(function(list, index){
        var inner ="";
        list.forEach(function(webtoon){
            inner+=createCard(webtoon);
        })
        day[index].innerHTML=inner;
    });
}

function activatePage(){}

addPages();
addCards();
init();