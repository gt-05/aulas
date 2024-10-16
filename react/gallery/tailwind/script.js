let imgs = [
	{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-4.jpeg" },
	{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-5.jpeg" },
	{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-6.jpeg" },
	{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-7.jpeg" },
];

let slideBox = document.querySelector('.slides');

for(let img of imgs) {
	slideBox.innerHTML += `
		<div class="slide min-w-full">
			<img class="w-full h-full" src="${img.src}">
		</div>
	`;
}

let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');
let position = 0;

btnNext.addEventListener('click', function () {
	position += 100;

	if(position > (imgs.length-1)*100) {
		position = 0;
	}

	slideBox.style.transform = `translateX(-${position}%)`

})

btnPrev.addEventListener('click', function () {
	position -= 100;

	if(position < 0) {
		position = (imgs.length-1) * 100;
	}

	slideBox.style.transform = `translateX(-${position}%)`;
})