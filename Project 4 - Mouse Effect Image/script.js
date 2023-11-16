var elem = document.querySelectorAll(".elem");

// childNodes[3] means it stores the Img property of each elem

elem.forEach(function (val) {
    val.addEventListener("mousemove", function (details) {
        val.childNodes[3].style.left = details.x + "px";
        val.childNodes[3].style.top = details.y + "px";
    })

    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1;
    })

    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0;
    })
})

