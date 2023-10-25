
document.addEventListener("DOMContentLoaded", function() {
    // l'animation avec ça elle marche


inhale = 3;
inhaleHold = 1;
exhale = 3;
exhaleHold = 1;

circles = document.querySelectorAll('.circle');

rotation = 0; 
distance = 25;

timeline = gsap.timeline({
	repeat: -1
});

timeline
	.to('#bloom', { 
		rotation: -90,
		duration: inhale,
		ease: 'power1.inOut',
	  delay: exhaleHold,
	})
;

circles.forEach(function(circle) { 
	timeline.to(circle, {
		duration: inhale,
		ease: 'power1.inOut',
		xPercent: Math.cos(rotation * (Math.PI / 180)) * distance,
    yPercent: Math.sin(rotation * (Math.PI / 180)) * distance 
	}, '<');
	
	rotation = rotation + 45;
});

timeline
	.to('#bloom', { 
		rotation: 0,
		duration: exhale,
		ease: 'power1.inOut',
	  delay: inhaleHold,
	})
;

timeline.to(circles, {
	duration: exhale,
	ease: 'power1.inOut',
	xPercent: 0,
	yPercent: 0 
}, '<');
});