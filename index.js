let myNav = document.querySelector('.drop2');


window.addEventListener('scroll', ()=>{
    myNav.classList.toggle('stick', this.window.scrollY>190);
})