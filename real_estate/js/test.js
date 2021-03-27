const openMenu = () => {
    // User classList here or whatever I just forgot how to use it
    document.querySelector('.menu').className = 'menu menu-opened';
};

const closeMenu = () => {
    document.querySelector('.menu').className = 'menu';
};

const showBackground = () => {
    document.querySelector('.menu-background').className = 'menu-background menu-background-shown';
};

const hideBackground = () => {
    document.querySelector('.menu-background').className = 'menu-background';
};

const handleOpenMenuClick = () => {
    openMenu();
    showBackground();
};

const handleCloseMenuClick = () => {
    closeMenu();
    hideBackground();
};

document.querySelector('#open-menu').addEventListener('click', handleOpenMenuClick);
document.querySelector('#close-menu').addEventListener('click', handleCloseMenuClick);
