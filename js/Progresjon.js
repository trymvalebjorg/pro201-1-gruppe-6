var btn= document.getElementById('btn');
var bar= document.getElementById('bar');
var txt= document.getElementById('text');

// Listen for an event on the button

// Increase the width of the bar by 10%

btn.addEventListener('click', ()=>{
    bar.style.width = count + '%';
    txt.innerHTML = count + '%';
    if (count ===100){
        count = 0;
    }
    else{
        count = count + 10;
    }
});