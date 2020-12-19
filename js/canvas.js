let _arrayCanvas=new Array();
function Canvas(title, author, cover, link){
    this.title=title;
    this.author=author;
    this.cover=cover;
    this.link=link;
    _arrayCanvas.push(this);
}

let _FrozenHeart= new Canvas("Frozen Heart", "firey_tika", "images/canvas/frozen.jpg", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _Raven= new Canvas("RAVEN", "MISSBUN", "images/canvas/raven.png", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _Maybe= new Canvas("Maybe, Prob...", "grracce", "images/canvas/two.png", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _BL= new Canvas("What was...", "gcafenoone", "images/canvas/bl.png", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _Tummy= new Canvas("Tummy and...", "rarastones", "images/canvas/tumy.jpg", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _Sheep= new Canvas("Sheep plus...", "zerofruits", "images/canvas/boys.png", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _EverWake= new Canvas("Everwake", "BiancaLoran", "images/canvas/blue.png", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _TheMiddle= new Canvas("The Middle...", "Steve Conley", "images/canvas/big.jpg", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _VibeCheck= new Canvas("Vibe Check!", "Ucheomaaa", "images/canvas/mmuscular.png", "https://www.youtube.com/watch?v=NUYvbT6vTPs");
let _Midnight= new Canvas("Midnight and...", "pandagjung", "images/canvas/midnight.jpg", "https://www.youtube.com/watch?v=NUYvbT6vTPs");


let _ulCanvas=document.getElementsByClassName("canvas")[1];

addCanvas();

function addCanvas(){
    var inner='';
    _arrayCanvas.forEach(function(webtoon){
        var img="<img src="+webtoon.cover+" width=162px height=162px/>";
        var div="<div class='canvas-info'><p class='title-webtoon'>"+webtoon.title+"</p><p class='author'>"+webtoon.author+"</p></div>";
        var all="<li class='canvas-webtoon'><a href="+webtoon.link+" target='_blank'>"+img+div+"</a></li>";
        inner+=all;
    })
    _ulCanvas.innerHTML=inner;
}

