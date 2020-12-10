var btn = document.getElementById('playButtons__btnNext');
var bar = document.getElementById('bar');
// var txt = document.getElementById('text');
var count = 1;

// Increase the width of the bar by 10%

btn.addEventListener('click', () => {
    // txt.innerHTML = count + '%';
    if (count === 100) {
        count = 100;
    } else if (count < 100) {
        count = count + Math.floor((100 / (steps.length)));
        bar.style.width = count + '%';
    }
});