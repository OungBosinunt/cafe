let menu = document.querySelector('#menu-icon'); // Use '#' for ID selector
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Remove the dot '.' from class name
    navlist.classList.toggle('open');
};
