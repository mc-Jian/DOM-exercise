function showPic(whichpic){
    if (!document.getElementById("placeholder"))return false;
    let source = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG")return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        let text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        let description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return false;
}
function prepareGallery() {
    if (!document.getElementsByTagName)return false;
    if (!document.getElementById)return false;
    if (!document.getElementById("imageGallery"))return false;
    let gallery = document.getElementById("imageGallery");
    let links = gallery.getElementsByTagName("a");
    for (let i=0; i<links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}
function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    }else{
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);