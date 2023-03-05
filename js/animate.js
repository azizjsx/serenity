const qone = document.getElementById('qone');
const anone = document.getElementById('anone');
const imgone = document.getElementById('imgone');
const mainWrapper2 = document.getElementById('main-wrapper');

mainWrapper2.addEventListener('scroll', (event) => {
    if(mainWrapper2.scrollTop >= 225) {
        qone.classList.remove('qone-anim');
        qone.classList.add('qone-anim');
    } else {
        qone.classList.remove('qone-anim');
    }
    if(mainWrapper2.scrollTop >= 300) {
        anone.classList.remove('anone-anim');
        anone.classList.add('anone-anim');
    } else {
        anone.classList.remove('anone-anim');
    }
    if(mainWrapper2.scrollTop >= 150) {
        imgone.classList.remove('img-anim');
        imgone.classList.add('img-anim');
    } else {
        imgone.classList.remove('img-anim');
    }
})