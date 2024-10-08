var thumbnails = document.querySelectorAll('.thumbnail-img img');
var box = document.getElementById('image-desc-container');
var boximg = document.getElementById("img-background");
var boxtxt = document.getElementById("img-desc");
thumbnails.forEach(e => {
    e.addEventListener('mouseover', function() {
        var position = e.getBoundingClientRect();
        boximg.src = e.src;
        boximg.setAttribute('alt', e.getAttribute("alt"));
        boxtxt.innerHTML = e.getAttribute("alt");
        box.style.top = position.top + "px";
        box.style.left = position.left + "px";
        box.style.display = "flex";
    });
    e.addEventListener('mouseleave', function() {
        box.style.display = "none";
    });
});

var bgSelectBox = document.querySelector("#background-color");
var textSelectBox = document.querySelector("#text-color");
bgSelectBox.addEventListener('change', function(e) {
    box.style.backgroundColor = e.target.value;
})
textSelectBox.addEventListener('change', function(e) {
    boxtxt.style.color = e.target.value;
})