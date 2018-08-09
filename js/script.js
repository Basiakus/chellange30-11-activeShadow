const text_zone = document.querySelector('#text_zone');
const text = text_zone.querySelector('h1');

function activeShadow(e) {
	let x = e.offsetX;
	let y = e.offsetY;
	if(this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}
	const width = this.offsetWidth;
	const height = this.offsetHeight;
	const maxRange = 20;
	const widthRange = Math.round((x / width * maxRange) - maxRange / 2) * -1;
	const heightRange = Math.round((y / height * maxRange) - maxRange / 2) * -1;
	console.log(widthRange, heightRange);
	text.style.textShadow = `${widthRange}px ${heightRange}px 3px rgba(255,255,255,0.5)`;

}

text_zone.addEventListener('mousemove', activeShadow);
text_zone.addEventListener('touchstart', activeShadow);
text_zone.addEventListener('touchmove', activeShadow);

