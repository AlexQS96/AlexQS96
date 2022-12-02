export const openMenu = () => {
    document.querySelector('.nav').classList.toggle('navOpen');
    document.getElementsByTagName('html')[0].classList.toggle('noScroll')
}