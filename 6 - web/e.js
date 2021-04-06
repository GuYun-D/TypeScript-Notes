var btn1 = document.getElementById('btn1');
// console.dir(btn1)
btn1.addEventListener('click', function (e) {
    console.log(e.type);
    console.log(e.target);
    console.log(e);
    var target = e.target;
    target.style.fontSize = '30px';
});
