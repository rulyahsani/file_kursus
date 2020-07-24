const modulname = document.getElementById('modulname');
const ket_modul = document.getElementById('ket-modul');
const modulname2 = document.getElementById('modulname2');
const ket_modul2 = document.getElementById('ket-modul2');

modulname.addEventListener('click', openmodul);
function openmodul() {
	ket_modul.style.display = 'block';
	ket_modul2.style.display = 'none';

	// alert('tes');
}
modulname2.addEventListener('click', openmodul2);
function openmodul2 (){
	ket_modul2.style.display = 'block';
	ket_modul.style.display = 'none';

}