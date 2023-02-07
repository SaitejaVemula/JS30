console.log('JS file linked');

document.addEventListener('keydown', e => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) {
        return;
    }
    let button = document.querySelector(`div[data-key="${e.keyCode}"]`);
    button.classList.add('zoom');
    audio.currentTime = 0;
    audio.play();
})

let buttons = Array.from(document.querySelectorAll(`div[data-key]`));

buttons.forEach(button => button.addEventListener('click', e => {
    if(e.target.dataset.key) {
        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
        if(!audio) {
            return;
        }
        let tag = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);
        tag.classList.remove('zoom');
        tag.classList.add('zoom');
        console.log(e.target.dataset.key, 'is pressed');
        audio.currentTime = 0;
        audio.play();
    }
}))

buttons.forEach(button => button.addEventListener('transitionend', e => {
    e.target.classList.remove('zoom');
}))