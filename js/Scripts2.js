
		// CAROUSEL
		$('.owl-carousel').owlCarousel({
			// center: true,
			loop: true,
			margin: 25,
			items: 1,
			autoplay:true,
  	  autoplayTimeout:4000,
   	  autoplayHoverPause:true
		})

		// MOBILE NAV

		$(document).ready(function(){
			$('#hamburger__icon').click(function(){
			$(this).toggleClass('open');
		});
});
		// SMOOTH SCROLL
		$("nav").find("a").click(function(e) {

		e.preventDefault();
		var section = $(this).attr("href");
		$("html, body").animate({
				scrollTop: $(section).offset().top - 55
		}, 850);
		});

		$(".header__scroll-button").click(function() {

		$([document.documentElement, document.body]).animate({
				scrollTop: $(".about-us").offset().top - 49
		}, 850);

		});
const gallery = document.getElementById('gallery__photos');
const sectionTitle = document.getElementById('photos__title');
const list = document.getElementById('listJS');
const chooseWorkBtn = document.getElementById('dropdown__trigger');

// VV This here makes mobile works list appear on click/hover
chooseWorkBtn.addEventListener('click', function(){list.style="";});
chooseWorkBtn.addEventListener('mouseover', function(){list.style="";});

function changeImgSet(imgSet, itemAmount, title) {

	// This here makes the list dissaper on mobile after choosing set
	if ($(window).width() < 1080){
		list.style="display:none;";
	}

	clearGallery();
	sectionTitle.innerHTML = title;
	loadNewSet(imgSet, itemAmount);
}

function loadNewSet(imgSet, itemAmount) {
	var imgExists = true;
	for(let i = 1; imgExists && i <= itemAmount; i++){
		addBox(imgSet, i);
	}
	$(document).ready(function() {

$("#refresh").click(function() {
	 $("#gallery").load("index.html");

return false;
});
});

}

function addBox(imgSet, imgNumber) {
	let newBox = document.createElement('a');
	const imgUrl = "Images/Gallery/" + imgSet + "/" + imgNumber + ".jpg";
	newBox.href = imgUrl;
	newBox.className = "gallery__photo lozad";
	newBox.setAttribute('data-lightbox', 'prace');
	newBox.setAttribute('alt', 'Praca pokazowa Madry Dach');
	newBox.setAttribute('title', 'Praca pokazowa Madry Dach');
	
	

	let newBoxImg = document.createElement('img');
	newBoxImg.src = imgUrl; 

	newBox.appendChild(newBoxImg);
	gallery.appendChild(newBox);
	observer.observe();
	// Cant do anything to actually change anything outside this function or stop it,
	// newBoxImg.onerror = function(){
	// imgExists = false;
	// }
}

function clearGallery() {
	
	while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild);
}
}