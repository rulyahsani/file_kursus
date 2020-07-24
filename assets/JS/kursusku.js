const tab_course = document.getElementById('tab-mycourse');
const tab_favorite = document.getElementById('tab-favorite');
const course_list = document.getElementById('course-list');
const favorite_list = document.getElementById('favorite-list');

tab_course.addEventListener('click', function() {
	course_list.style.display = 'flex';
	favorite_list.style.display = 'none';
})
tab_favorite.addEventListener('click', function() {
	course_list.style.display = 'none';
	favorite_list.style.display = 'flex';
})