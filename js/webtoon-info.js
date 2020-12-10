function Webtoon(pic, link){
    this.bannerpic=pic;
    this.link=link;
}

_empress= new Webtoon("images/banner/empress.png", "https://www.webtoons.com/en/fantasy/the-remarried-empress/list?title_no=2135");
_notshoujo= new Webtoon("images/banner/notshoujo.png", "https://www.webtoons.com/en/comedy/not-so-shoujo-love-story/list?title_no=2189");
_truebeauty= new Webtoon("images/banner/truebeauty.png", "https://www.webtoons.com/en/romance/truebeauty/list?title_no=1436");
_skye= new Webtoon("images/banner/skye.png", "https://www.webtoons.com/en/fantasy/skye/list?title_no=2234");

_webtoonBannerList = [_empress, _notshoujo, _truebeauty,_skye];

function changeBanner(index){
    document.getElementsByClassName("page-circle")[index].classList.add("open");
    document.getElementById("banner-pic").setAttribute("src", _webtoonBannerList[index].bannerpic);
    $('#banner-pic').fadeIn("fast");
    setTimeout(function(){
        document.getElementsByClassName("page-circle")[index].classList.remove("open");
    }, _time-1)
}

function intervalChangingBanner(){
    console.log("na função");
    var index = i%(_webtoonBannerList.length);
    i=index;
    i++;
    changeBanner(index);
}

var innerText=" ";
var innerBanner=" "
function addPageIndex(){
    var num=0;
    
    _webtoonBannerList.forEach(webtoon => {
        var newid= "pic"+num;
        var newtext= "<a id='"+newid+ "' class='page-circle' href='"+webtoon.link+ "'></a>"
        num++;
        innerText+=newtext;
        newtext= '<img class="banner-pic '+newid+'" src="'+webtoon.bannerpic+ '" display="none"/>'
        innerBanner+=newtext;
    });
}

addPageIndex();
let _pagination = document.getElementById("pagination").innerHTML= innerText;
let _bannerPics = document.getElementById("poster-images").innerHTML=innerBanner;
var i=0;
var _time = 5000;
console.log("chegou aqui!");
intervalChangingBanner();
setInterval(intervalChangingBanner, _time);