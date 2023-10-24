var con = document.querySelector("#container");
var heart = document.querySelector("i");


// dblclick event mean double click
con.addEventListener("dblclick",function(){
    heart.style.transform ='translate(-50%,-50%) scale(1)';
    heart.style.opacity=0.7;
    // this func will execute after 1 sec , whic will diassaper the heart
    setTimeout(function () {
        heart.style.opacity=0.1;
        heart.style.transform='translate(-50%,-50%) scale(0)'
    },700)
})


// custom cursor

var space = document.querySelector("body");
var cursor = document.querySelector("#cursor");

space.addEventListener("mousemove",function(details){
    cursor.style.left=details.x+"px";
    cursor.style.top=details.y+"px";
})

