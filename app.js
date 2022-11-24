const menu = document.querySelector('#mobilni-meni');
const menuLinks = document.querySelector('header_meni');
const navlogo = document.querySelector('#header_logo');

menu.addEventListener('click',mobileMenu);

const highlightMenu = () =>{
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#pocetna-strana');
    const aboutMenu = document.querySelector('#onama-strana');
    const servicesMenu = document.querySelector('#servis-strana');
    let scrolingPosition = window.scrollY;
}
