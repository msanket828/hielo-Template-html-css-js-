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
		html=document.querySelector("html");

//initially we dont want tot show navBar
navBar.classList.add('active');

//click event on hamburger icon
hamburger.addEventListener('click',function() {	
	navBar.classList.toggle('active');
	if(!navBar.classList.contains('active')) {
		html.classList.add('overflow-hidden');
	}
});

//click event on close button to close click menu
close.addEventListener('click',function() {
	navBar.classList.add('active');	
	if(html.classList.contains('overflow-hidden')) {
		html.classList.remove('overflow-hidden');
	}
})






















