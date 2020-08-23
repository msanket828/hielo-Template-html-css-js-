/* Author: sanket mane*/

//this code for the slick slider
$('.banner-slider').slick({
	arrows: false,
	dots: false,
	slideToShow: 1,
	slideToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite:true
});


//functionality for hamburger

var hamburger=document.querySelector(".hamburger"),
		close=document.querySelector(".close"),
		navBar=document.querySelector(".nav-links"),
		nabLink=document.querySelectorAll(".nav-link");	


nabLink.forEach(function(link) {
	link.addEventListener('click',function() {
		if(navBar.classList.contains('active')) {
			navBar.classList.remove('active');
		}
	})
})
//click event on hamburger icon
hamburger.addEventListener('click',function() {
	
	if(!navBar.classList.contains('active')) {
		navBar.classList.add('active');
	}
});

//click event on close button to close click menu
close.addEventListener('click',function() {
	// navBar.classList.add('active');	
	if(navBar.classList.contains('active')) {
		navBar.classList.remove('active');
	}	
})






















