var btn1 = document.getElementById('btn1') as HTMLDivElement;
// console.dir(btn1)
btn1.addEventListener('click', function (e) {
    console.log(e.type);
    console.log(e.target);
    console.log(e);
    
    const target = e.target as HTMLDivElement
    target.style.fontSize = '30px'
});
