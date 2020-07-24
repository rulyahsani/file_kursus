const user = document.getElementById('user');
const logout = document.getElementById('keluar');

user.addEventListener('mouseenter', openMenu);
document.addEventListener('click', closeMenu);
function openMenu() {
	logout.style.display = 'flex';
	logout.style.transition = '0.5s';
}

function closeMenu() {
	logout.style.display = 'none';
}