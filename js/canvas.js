function Canvas(title, author, cover, link){
    this.title=title;
    this.author=author;
    this.cover=cover;
    this.link=link;
}

let _FrozenHeart= new Canvas("Frozen Heart", "firey_tika", "images/canvas/frozen.jpg", "https://www.youtube.com/watch?v=NUYvbT6vTPs");

let _arrayCanvas=[];
for(var i=0; i<10; i++)
    _arrayCanvas.push(_FrozenHeart);


let _ulCanvas=document.getElementsByClassName("canvas")[1];

addCanvas();

function addCanvas(){
    var inner='';
    _arrayCanvas.forEach(function(webtoon){
        var img="<img src="+webtoon.cover+" width=162px />";
        var div="<div class='canvas-info'><p class='title-webtoon'>"+webtoon.title+"</p><p class='author'>"+webtoon.author+"</p></div>";
        var all="<li class='canvas-webtoon'><a href="+webtoon.link+" target='_blank'>"+img+div+"</a></li>";
        inner+=all;
    })
    _ulCanvas.innerHTML=inner;
}