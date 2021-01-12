function test(){
    for (element of document.getElementsByClassName("part")){
        element.onmouseenter = function(event) {mouseenter(event)};
        element.onmouseleave = function(event) {mouseleave(event)};
    }
}

function mouseenter(event) {
         
    for (element of document.querySelectorAll("div.part")){
        element.classList.add("cursorOn")
    }
}

function mouseleave(event) {

    for (element of document.querySelectorAll("div.part")){
        element.classList.remove("cursorOn")
    }
}