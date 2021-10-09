// kata kata atas menimbul
const teks = document.querySelector('.atas');
const huruf = [...teks.textContent].map(m => `<span>${m}</span>`).join('');
teks.innerHTML = huruf;



// untuk darkmode
function DarkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}


// untuk responsive navbar mobile
//mobile menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
	const elem = document.querySelector('.highlight');
	const homeMenu = document.querySelector('#home-page');
	const aboutMenu = document.querySelector('#about-page');
	const servicesMenu = document.querySelector('#services-page');
	let scrollPos = window.scrollY;
	// console.log(scrollPos);

	// adds 'highlight' class to my menu items
	if (window.innerWidth > 960 && scrollPos < 600) {
		homeMenu.classList.add('highlight');
		aboutMenu.classList.remove('highlight');
		return;
	} else if (window.innerWidth > 960 && scrollPos < 1400) {
		aboutMenu.classList.add('highlight');
		homeMenu.classList.remove('highlight');
		servicesMenu.classList.remove('highlight');
		return;
	} else if (window.innerWidth > 960 && scrollPos < 2345) {
		servicesMenu.classList.add('highlight');
		aboutMenu.classList.remove('highlight');
		return;
	}

	if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
		elem.classList.remove('highlight');
	}
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
	const menuBars = document.querySelector('.is-active');
	if (window.innerWidth <= 768 && menuBars) {
		menu.classList.toggle('is-active');
		menuLinks.classList.remove('active');
	}
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



// untuk waktu saat ini
var tw = new Date();
if (tw.getTimezoneOffset() == 0)(a = tw.getTime() + (7 * 60 * 60 * 1000))
else(a = tw.getTime());
tw.setTime(a);
var tahun = tw.getFullYear();
var hari = tw.getDay();
var bulan = tw.getMonth();
var tanggal = tw.getDate();
var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember");
document.getElementById("tanggalwaktu").innerHTML = hariarray[hari] + " " + tanggal + " " + bulanarray[bulan] + " " + tahun + " Jam " + ((tw.getHours() < 10) ? "0" : "") + tw.getHours() + ":" + ((tw.getMinutes() < 10) ? "0" : "") + tw.getMinutes() + (" W.I.B ");




// script validasi formkomen jika ada kolom yang tidak diisi atau kosong 
function validateFormkomen() {
	if (document.forms["formkomen"]["nama"].value == "") {
		alert("Nama Tidak Boleh Kosong");
		document.forms["formkomen"]["nama"].focus();
		return false;
	}

	if (document.forms["formkomen"]["email"].value == "") {
		alert("Email Tidak Boleh Kosong");
		document.forms["formkomen"]["email"].focus();
		return false;
	}

	if (document.forms["formkomen"]["komen"].value == "") {
		alert("Komentar Tidak Boleh Kosong");
		document.forms["formkomen"]["komen"].focus();
		return false;
	}
}



// fadeinTABdefalut
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// script validasi formlogin jika ada kolom yang tidak diisi atau kosong 
function validateFormlogin() {
	if (document.forms["formlogin"]["email"].value == "") {
		alert("Email Tidak Boleh Kosong");
		document.forms["formlogin"]["email"].focus();
		return false;
	}
	if (document.forms["formlogin"]["password"].value == "") {
		alert("Password Tidak Boleh Kosong");
		document.forms["formlogin"]["password"].focus();
		return false;
	}


}



// script validasi formsignup jika ada kolom yang tidak diisi atau kosong 
function validateFormsignup() {
	if (document.forms["formsignup"]["nama"].value == "") {
		alert("Nama Tidak Boleh Kosong");
		document.forms["formsignup"]["nama"].focus();
		return false;
	}
	if (document.forms["formsignup"]["email"].value == "") {
		alert("Email Tidak Boleh Kosong");
		document.forms["formsignup"]["email"].focus();
		return false;
	}
	if (document.forms["formsignup"]["telepon"].value != "") {
		var RegHp = /^((\+62 8\d{2}|08\d{2}([ -]?)|\+628\d{2})\d{4}(\3\4)\d{2,5})$/gim
		if (RegHp.test(document.forms["formsignup"]["telepon"].value) != true) {
			alert("Format No HP Salah");
			document.forms["formsignup"]["telepon"].focus();
			return false;
		}
	} else {
		alert("No HP tidak boleh kosong");
		document.forms["formsignup"]["telepon"].focus();
		return false;
	}
	if (document.forms["formsignup"]["password"].value == "") {
		alert("Password Tidak Boleh Kosong");
		document.forms["formsignup"]["password"].focus();
		return false;
	}
	if (document.forms["formsignup"]["KonfirmasiPassword"].value == "") {
		alert("Password Konfirmasi Tidak Boleh Kosong");
		document.forms["formsignup"]["KonfirmasiPassword"].focus();
		return false;
	}


}

// script validasi jika inputan password dan konfirmasi password tidak sesuai
window.onload = function () {
	document.getElementById("pass").onchange = validatePassword;
	document.getElementById("konpass").onchange = validatePassword;
}

function validatePassword() {
	var pass2 = document.getElementById("konpass").value;
	var pass1 = document.getElementById("pass").value;
	if (pass1 != pass2)
		document.getElementById("konpass").setCustomValidity("Passwords Tidak Sama, Coba Lagi");
	else
		document.getElementById("konpass").setCustomValidity('');
}

// kasir
function warung() {
	var catat = document.formkasir;
	var seblak = parseInt(catat.satu.value) * parseInt(catat.seblaka.value);
	var doritos = parseInt(catat.dua.value) * parseInt(catat.doritosa.value);
	var kopi = parseInt(catat.tiga.value) * parseInt(catat.kopia.value);
	var choco = parseInt(catat.empat.value) * parseInt(catat.chocoa.value);
	var bubble = parseInt(catat.lima.value) * parseInt(catat.bubblea.value);
	var hargasemua = seblak + doritos + kopi + choco + bubble;
	if (hargasemua > 100000) {
		catat.TotalBayar.value = hargasemua;
		catat.Diskon.value = 15000;
		catat.JumlahBayar.value = hargasemua - parseInt(catat.Diskon.value);
	} else {
		catat.TotalBayar.value = hargasemua;
		catat.Diskon.value = 0;
		catat.JumlahBayar.value = hargasemua;
	}
	var bayaran = parseInt(catat.bayar.value);
	catat.kmblian.value = bayaran - parseInt(catat.JumlahBayar.value);
}

function awal() {
	document.formkasir.reset();
}