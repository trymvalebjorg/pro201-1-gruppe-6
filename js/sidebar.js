const parts = document.querySelectorAll('.sidebar__parts');

function dropdown(id) {
    let i = document.getElementById(id + '__dropdown');
    i.classList.toggle('show');
}

for (const part of parts) {
    part.addEventListener('click', () => {
        const arrow = part.querySelector('.sidebar__parts--arrow');
        arrow.classList.toggle('flip');
        dropdown(part.id);
    });
}