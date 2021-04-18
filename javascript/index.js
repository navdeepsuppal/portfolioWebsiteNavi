function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "images\\pic_bulboff.gif";
    } else {
        image.src = "images\\pic_bulbon.gif";
    }
}




function change(x) {
    var image = document.getElementById('scroll');
    var a = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t";
    var b = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider";
    var elemsSelected = document.getElementsByClassName(a);
    var elemSelected = elemsSelected.item(0);
    if (x.match("about me")) {
        var elemClicked = document.getElementById('menu about me');
        elemClicked.className = elemClicked.className.replace(b, a);
        elemSelected.className = elemSelected.className.replace(a, b);
        elemClicked.id = elemClicked.id.replace("menu", "menu-selected");
        elemSelected.id = elemSelected.id.replace("menu-selected", "menu");
        image.src = "images\\pic_bulbon.gif";
    } else if (x.match("resume")) {
        var elemClicked = document.getElementById('menu resume');
        elemClicked.className = elemClicked.className.replace(b, a);
        elemSelected.className = elemSelected.className.replace(a, b);
        elemClicked.id = elemClicked.id.replace("menu", "menu-selected");
        elemSelected.id = elemSelected.id.replace("menu-selected", "menu");
        image.src = "images\\pic_bulboff.gif";
    } else if (x.match("contact")) {
        var elemClicked = document.getElementById('menu contact');
        elemClicked.className = elemClicked.className.replace(b, a);
        elemSelected.className = elemSelected.className.replace(a, b);
        elemClicked.id = elemClicked.id.replace("menu", "menu-selected");
        elemSelected.id = elemSelected.id.replace("menu-selected", "menu");
        image.src = "images\\pic_bulboff.gif";
    } else if (x.match("blog")) {
        var elemClicked = document.getElementById('menu blog');
        elemClicked.className = elemClicked.className.replace(b, a);
        elemSelected.className = elemSelected.className.replace(a, b);
        elemClicked.id = elemClicked.id.replace("menu", "menu-selected");
        elemSelected.id = elemSelected.id.replace("menu-selected", "menu");
        image.src = "images\\pic_bulboff.gif";
    } else if (x.match("projects")) {
        var elemClicked = document.getElementById('menu projects');
        elemClicked.className = elemClicked.className.replace(b, a);
        elemSelected.className = elemSelected.className.replace(a, b);
        elemClicked.id = elemClicked.id.replace("menu", "menu-selected");
        elemSelected.id = elemSelected.id.replace("menu-selected", "menu");
        image.src = "images\\pic_bulboff.gif";
    } else if (x.match("videos")) {
        var elemClicked = document.getElementById('menu videos');
        elemClicked.className = elemClicked.className.replace(b, a);
        elemSelected.className = elemSelected.className.replace(a, b);
        elemClicked.id = elemClicked.id.replace("menu", "menu-selected");
        elemSelected.id = elemSelected.id.replace("menu-selected", "menu");
        image.src = "images\\pic_bulboff.gif";
    }
}


/* 
about me
resume
contact
blog
projects
videos

"sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
"sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
*/


