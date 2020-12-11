function Webtoon(pic, link){
    this.bannerpic=pic;
    this.link=link;
}

_empress= new Webtoon("images/banner/empress.png", "https://www.webtoons.com/en/fantasy/the-remarried-empress/list?title_no=2135");
_notshoujo= new Webtoon("images/banner/notshoujo.png", "https://www.webtoons.com/en/comedy/not-so-shoujo-love-story/list?title_no=2189");
_truebeauty= new Webtoon("images/banner/truebeauty.png", "https://www.webtoons.com/en/romance/truebeauty/list?title_no=1436");
_skye= new Webtoon("images/banner/skye.png", "https://www.webtoons.com/en/fantasy/skye/list?title_no=2234");

_webtoonBannerList = [_empress, _notshoujo, _truebeauty,_skye];

var innerText=" ";
var innerBanner=" "

function addPageIndex(){
    var num=0;
    
    _webtoonBannerList.forEach(webtoon => {
        var newid= "pic"+num;
        var miniball = "circle"+num;
        var newtext= "<a id='"+miniball+ "' class='page-circle' href='javascript:void(0)'></a>"
        num++;
        innerText+=newtext;
        newtext= '<img class="banner-pic" id="'+newid+'" src="'+webtoon.bannerpic+ '" style="display:none;" />'
        innerBanner+=newtext;
    });
}

function intervalBanner(){
    i++;
    var index = i%(_webtoonBannerList.length);
    
    
    showBanner(index);
}

function showBanner(index){
    var pic="#pic" + index;
    changeLink(index);
    if(index == 0) {
        hideBanner(_webtoonBannerList.length -1);
    }
    else{
        hideBanner(index - 1);
    }

    changeBallColorWhite(index);
    $(pic).fadeIn("slow");
}

function clickShowBanner(last, index){
    var pic="#pic" + index;
    changeLink(index);
    hideBanner(last);
    changeBallColorWhite(index);
    $(pic).fadeIn("slow");
}

function hideBanner(index){
    reverseBallColor(index);
    var pic="#pic" + index;
    $(pic).fadeOut("slow");
}

function changeLink(index)
{
    _linkBox.setAttribute("href", _webtoonBannerList[index].link);
}

function changeBallColorWhite(index){
    var pic="circle"+index;
    document.getElementById(pic).classList.add("open");
}

function reverseBallColor(index){
    var pic="circle"+index;
    document.getElementById(pic).classList.remove("open");
}

addPageIndex();
let _pagination = document.getElementById("pagination").innerHTML= innerText;
let _bannerPics = document.getElementById("poster-images").innerHTML=innerBanner;
let _linkBox = document.getElementsByClassName("link-box")[0];

var i=-1;
var _time = 3000;
intervalBanner();
circlesEvents();
intervalism();
var _interval;
console.log(i);
function intervalism(){
    _interval = setInterval(intervalBanner, _time);
}
function circlesEvents(){
    _webtoonBannerList.forEach(function(webtoon, index){
        var name = "circle" + index;
    
        document.getElementById(name).addEventListener("click", function(){
            clearInterval(_interval);
            last=i%_webtoonBannerList.length;
            console.log("last= " + last + " index= " + index + " i= " + i);
            i=index;
            
            clickShowBanner(last, index);
            intervalism();
        })
    });  
    
}

 