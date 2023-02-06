console.log('JS file linked');

document.addEventListener('keydown', e => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) {
        return;
    }
    console.log(e.key, e.keyCode);
    audio.currentTime = 0;
    audio.play();
})

let buttons = Array.from(document.querySelectorAll(`div[data-key]`));
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', e => {
    if(e.target.dataset.key) {
        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
        if(!audio) {
            return;
        }
        console.log(e.target.dataset.key);
        audio.currentTime = 0;
        audio.play();
    }
}))