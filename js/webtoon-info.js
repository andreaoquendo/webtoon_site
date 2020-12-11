function Webtoon(pic, link){
    this.bannerpic=pic;
    this.link=link;
}

_empress= new Webtoon("images/banner/empress.png", "https://www.webtoons.com/en/fantasy/the-remarried-empress/list?title_no=2135");
_notshoujo= new Webtoon("images/banner/notshoujo.png", "https://www.webtoons.com/en/comedy/not-so-shoujo-love-story/list?title_no=2189");
_truebeauty= new Webtoon("images/banner/truebeauty.png", "https://www.webtoons.com/en/romance/truebeauty/list?title_no=1436");
_skye= new Webtoon("images/banner/skye.png", "https://www.webtoons.com/en/fantasy/skye/list?title_no=2234");

var _webtoonBannerList = [_empress, _notshoujo, _truebeauty,_skye];
var innerText=" ";
var innerBanner=" "
var i=-1;
var _time = 3000;
var _interval;
let _pagination = document.getElementById("pagination");
let _bannerPics = document.getElementById("poster-images");
let _linkBox = document.getElementsByClassName("link-box")[0];