function showPic (whichpic) {
    let source = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    let txt = whichpic.getAttribute("title");
    let description = document.getElementById("description");
    description.firstChild.nodeValue = txt;
}