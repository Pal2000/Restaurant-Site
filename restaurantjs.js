
// Javascript logic for hamburger and navbar for mobile devices
function opennav(){
	var navbar=document.getElementById("navbar");
	navbar.style.display="block";
	var nav_bar=document.getElementById("nav_bar");
	nav_bar.style.display="none";
}


function closenav(){
	var navbar=document.getElementById("navbar");
	navbar.style.display="none";
	var nav_bar=document.getElementById("nav_bar");
	nav_bar.style.display="block";
	
}

//For displaying map on home page

let map;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
	center: { lat: -34.397, lng: 150.644 },
	zoom: 8,
});
	}

