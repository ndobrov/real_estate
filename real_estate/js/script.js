const sidebarMenu = document.getElementsByClassName('sidebar-menu__wrap'),
      sidebarMenubtn = document.querySelector('.sidebar-menu__btn'),
      sidebar = document.querySelector('.sidebar');

// Показываем меню на мобильных устройствах
sidebarMenubtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-mobile__active');
    sidebarMenubtn.classList.toggle('mobile__active');


    //    if (!sidebar.classList.contains("sidebar-mobile__active")) {
        // sidebar.classList.add("sidebar-mobile__active");

    //    }else {
        // sidebar.classList.remove("sidebar-mobile__active");

    //    }
}); 

// Скрываем widget пункты
sidebar.addEventListener('click', (event) => {

    if (event.target && event.target.classList.contains('widget__title')) {
     event.target.classList.toggle('hide-widget__body');   
    }
});

// Показываем дополнит. елементы
// 
const showMore = document.querySelector('.widget__show-more'),
      widgetHiden = document.querySelectorAll('.widget__hiden-elements');
      console.log(widgetHiden);
showMore.addEventListener('click', () => {
    widgetHiden.forEach ( elem => {
        elem.classList.toggle('widget__hiden-elements');
    })

    // widgetHiden[0].classList.toggle('widget__hiden-elements');

});
// 
// 
// 


// sidebar.addEventListener('click', (event) => {
// 
    // if (event.target && event.target.classList.contains('widget__show-more')) {
    //  event.target.classList.toggle('widget__hiden-elements');
    //    
    // }
// });

