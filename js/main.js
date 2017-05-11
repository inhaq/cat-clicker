
var img = document.getElementsByClassName('cat');
var num = document.getElementsByClassName('num');

img.addEventListener('click', function (e) {
    num.innerHTML++;
});