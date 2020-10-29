const eventIcon = Array.from(document.querySelectorAll('.event__icon'));


for(let i = 0; i < eventIcon.length; i++) {
    eventIcon[i].id = `icon-${i}`
}

document.querySelector('.section-event').addEventListener('click', e => {

    const id = e.target.parentNode.id.split('-');

    if(id[1]) {
        eventIcon[id[1]].classList.toggle('green');
    }
})