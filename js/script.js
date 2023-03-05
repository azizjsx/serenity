document.addEventListener('contextmenu', event => event.preventDefault());
//variables
const mainWrapper = document.getElementById('main-wrapper')
const loaderWrapper = document.getElementById('main-loader');;
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loader-text');
const toTop = document.getElementById('toTop');
const logo = document.getElementById('logo');
const study = document.getElementById('study');
const quiz = document.getElementById('quiz');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
//aos
//loader
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        mainWrapper.style.visibility = "hidden";
        loaderWrapper.style.visibility = "visible";
    } else {
        loader.style.display = 'none';
        loaderText.style.marginTop = '0';
        loaderText.innerText = 'LOADING COMPLETE';
        
        setTimeout(() => {
            loaderText.innerText = ' ';
            mainWrapper.style.visibility = "visible";
            loaderWrapper.classList.add('loader-fade');
            mainWrapper.classList.add('main-fade');
            setTimeout(() => {
                loaderWrapper.remove();
            }, 1000);
        }, 1000)
    }
};
//scroll
const ds = document.getElementById('ds');
mainWrapper.addEventListener('scroll', (event) => {
    ds.innerText = mainWrapper.scrollTop;
    if(mainWrapper.scrollTop >= 300) {
        toTop.classList.add('toTopVisible');
        toTop.classList.remove('toTopInvisible');
    } else {
        toTop.classList.add('toTopInvisible');
        toTop.classList.remove('toTopVisible');
    }
})
toTop.addEventListener('click', function() {
    scroll(0, 200)
})
function scroll(target, duration) {
    if (duration <= 0) {return};
    let difference = target - mainWrapper.scrollTop;
    let speed = difference / duration * 10;
    setTimeout(function() {
        mainWrapper.scrollTop += speed;
        if (mainWrapper.scrollTop == target) {return};
        scroll(target, duration - 10);
    }, 10);
}
//pages
logo.onclick = event => {
    window.location.href = '../index.html'
}
study.onclick = event => {
    window.location.href = '../pages/study.html'
}
quiz.onclick = event => {
    window.location.href = '../pages/quiz.html'
}
about.onclick = event => {
    window.location.href = '../pages/about.html'
}
contact.onclick = event => {
    window.location.href = '../pages/contact.html'
}