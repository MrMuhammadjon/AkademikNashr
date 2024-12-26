let menu_icon = document.querySelector('.menu_icon')
let sidebar = document.querySelector('.sidebar')
let sidebar_icon = document.querySelector('.sidebar_icon')

menu_icon.addEventListener('click',()=>{
    sidebar.classList.add('open');
})

sidebar_icon.addEventListener('click',()=>{
    sidebar.classList.remove('open')
});

