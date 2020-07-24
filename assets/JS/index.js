const nav_kategori = document.getElementById('nav-kategori');
const menu_panel = document.getElementById('menu-panel');
const hamburger = document.getElementById('hamburger');
const hamburger_menus = document.getElementById('hamburger-menus');
const programming_tab = document.getElementById('programming-tab');
const design_tab = document.getElementById('design-tab');
const mengaji_tab = document.getElementById('mengaji-tab');
const memasak_tab = document.getElementById('memasak-tab');
const another_tab = document.getElementById('another-tab');
const tutor_programming = document.getElementById('tutor-programming');
const tutor_design = document.getElementById('tutor-design');
const tutor_cooking = document.getElementById('tutor-cooking');
const tutor_mengaji = document.getElementById('tutor-mengaji');
const tutor_another = document.getElementById('tutor-another');




function tampil() {
    menu_panel.style.display="block";
}
function close() {
    menu_panel.style.display="none";
}
nav_kategori.addEventListener('mouseenter', tampil);
document.addEventListener('click', close)

function hamburger_menu_open() {
    hamburger_menus.style.display = "block";
    hamburger_menus.style.transition = "1s";
}
function hamburger_menu_close() {
    hamburger_menus.style.display = "none";
    hamburger_menus.style.transition = "1s";
}

hamburger.addEventListener('mouseenter', hamburger_menu_open);
document.addEventListener('click', hamburger_menu_close);

programming_tab.addEventListener('click', function() {
    tutor_programming.style.display = 'flex';
    tutor_design.style.display = 'none';
    tutor_cooking.style.display = 'none';
    tutor_mengaji.style.display = 'none';
    tutor_another.style.display = 'none';
})
design_tab.addEventListener('click', function() {
    tutor_programming.style.display = 'none';
    tutor_design.style.display = 'flex';
    tutor_cooking.style.display = 'none';
    tutor_mengaji.style.display = 'none';
    tutor_another.style.display = 'none';
})

mengaji_tab.addEventListener('click', function() {
    tutor_programming.style.display = 'none';
    tutor_design.style.display = 'none';
    tutor_cooking.style.display = 'none';
    tutor_mengaji.style.display = 'flex';
    tutor_another.style.display = 'none';
})
memasak_tab.addEventListener('click', function() {
    tutor_programming.style.display = 'none';
    tutor_design.style.display = 'none';
    tutor_cooking.style.display = 'flex';
    tutor_mengaji.style.display = 'none';
    tutor_another.style.display = 'none';
})

another_tab.addEventListener('click', function() {
    tutor_programming.style.display = 'none';
    tutor_design.style.display = 'none';
    tutor_cooking.style.display = 'none';
    tutor_mengaji.style.display = 'none';
    tutor_another.style.display = 'flex';
})