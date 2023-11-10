/***************************************************
==================== JS INDEX ======================
****************************************************



****************************************************/


// magnific popup for video
$(document).ready(function() {
	$('.video').magnificPopup({
		type:'iframe'
	
	});
  });





// faq area start

		const accordionItemHeaders = document.querySelectorAll(
			".accordion-item-header"
		  );
		  
		  accordionItemHeaders.forEach((accordionItemHeader) => {
			accordionItemHeader.addEventListener("click", (event) => {
			  // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
		  
			  const currentlyActiveAccordionItemHeader = document.querySelector(
				".accordion-item-header.active"
			  );
			  if (
				currentlyActiveAccordionItemHeader &&
				currentlyActiveAccordionItemHeader !== accordionItemHeader
			  ) {
				currentlyActiveAccordionItemHeader.classList.toggle("active");
				currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
			  }
			  accordionItemHeader.classList.toggle("active");
			  const accordionItemBody = accordionItemHeader.nextElementSibling;
			  if (accordionItemHeader.classList.contains("active")) {
				accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
			  } else {
				accordionItemBody.style.maxHeight = 0;
			  }
			});
		  });
		  
		  
		  
	// faq area end


	// project swiper


	/*=============== SWIPER JS ===============*/
		let swiperCards = new Swiper(".card__content", {
			loop: true,
			spaceBetween: 32,
			grabCursor: true,
		
			pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
			},
		
			navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			},
		
			breakpoints:{
			600: {
				slidesPerView: 2,
			},
			968: {
				slidesPerView: 4,
			},
			},
		});


		
   	// project-carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<i class="fa-solid fa-arrow-left"></i>' ,'<i class="fa-solid fa-arrow-right"></i>'  ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},			
				1200:{
					items:4
				}

			}
		});    		
	}


	// footer popup start
	$(document).ready(function() {
		$('.footer___gallery___image').magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
			type: 'image',  
			gallery:{
				enabled:true
			  }
			// other options
		  });
	
	});


	// footer popup end