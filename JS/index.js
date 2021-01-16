
function test(){
    for (element of document.getElementsByClassName("part")){
        element.onmouseenter = function(event) {mouseenter(event)};
        element.onmouseleave = function(event) {mouseleave(event)};
    }
}

function mouseenter(event) {
         
    event.target.classList.add("slidemajor")

    for (element of document.querySelectorAll("div.part")){
        element.classList.add("slideminus")
    }
    event.target.classList.remove("slideminus")
}

function mouseleave(event) {
        event.target.classList.remove("slidemajor")

    for (element of document.querySelectorAll("div.part")){
        element.classList.remove("slideminus")
    }
}