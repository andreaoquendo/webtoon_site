var _list = document.getElementsByClassName("option");
verifyHeight(document.documentElement.clientHeight);

window.onresize = function(){
    var height = document.documentElement.clientHeight;
    
    for(var i=0; i < 5; i++){
        _list[i].style.display="block";
    }

    verifyHeight(height);
    
}

function verifyHeight(height){
    if(height <= 750){
        _list[4].style.display="none";
        if(height <= 700){
            _list[3].style.display="none";
            if(height <=650){
                _list[2].style.display="none";
                if (height <=600){
                    _list[1].style.display="none";
                }
            }
        }
    }
}

let _buttonOpenBar = document.getElementById('abs');
var isOpen=false;
let _bar = document.getElementById("bar");

_buttonOpenBar.addEventListener("click", function(e){
    e.preventDefault();
    if(!isOpen){
        _buttonOpenBar.classList.remove("hided");
        _buttonOpenBar.classList.add("opened");
        _bar.style.width="114px";
        isOpen = true;
    }
    else{
        _buttonOpenBar.classList.remove("opened");
        _buttonOpenBar.classList.add("hided");
        _bar.style.width="0px";
        isOpen=false;
    }
})

function translate(){
    _buttonOpenBar.style.transform="translate(144px, 0)";
}
