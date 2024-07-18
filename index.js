let bars = document.querySelector('.fa-bars');
let ul = document.querySelector('ul');
let icon = document.querySelector('.icon');

bars.onclick = function() {
    ul.classList.toggle('active');

    if (ul.classList.contains('active')) {
        icon.remove('fas fa-bars');
        icon.setAttribute('class', 'fas fa-users');

    } else {
        icon.setAttribute('class', 'fas fa-bars');
        icon.remove('fas fa-users');   
    }}
