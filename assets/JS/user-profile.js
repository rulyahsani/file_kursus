const tab_profileku = document.getElementById('tab-profileku');
const tab_photo = document.getElementById('tab-photo');
const tab_akun = document.getElementById('tab-akun');
const tab_notif = document.getElementById('tab-notif');

const list_profile = document.getElementById('list-profile');
const list_img = document.getElementById('list-img');
const list_akun = document.getElementById('list-akun');
const list_notif = document.getElementById('list-notif');

tab_profileku.addEventListener('click', function() {
	list_profile.style.display = 'block';
	list_img.style.display = 'none';
	list_akun.style.display = 'none';
	list_notif.style.display = 'none';
	// tab_profileku.classList.toggle = 'actived';
	tab_profileku.classList.add = 'actived';
})


tab_photo.addEventListener('click', function() {
	list_profile.style.display = 'none';
	list_img.style.display = 'block';
	list_akun.style.display = 'none';
	list_notif.style.display = 'none';
	tab_photo.classList.toggle = 'actived';
})


tab_akun.addEventListener('click', function() {
	list_profile.style.display = 'none';
	list_img.style.display = 'none';
	list_akun.style.display = 'block';
	list_notif.style.display = 'none';
	tab_akun.classList.toggle = 'actived';
})

tab_notif.addEventListener('click', function() {
	list_profile.style.display = 'none';
	list_img.style.display = 'none';
	list_akun.style.display = 'none';
	list_notif.style.display = 'block';
	tab_notif.classList.toggle = 'actived';
})