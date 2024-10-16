import {useState} from 'react';


export default function Gallery() {

	const [current, setCurrent] = useState(0);

	let css = {
		transform: `translateX(-${current}%)`
	}

	let imgs = [
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-4.jpeg" },
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-5.jpeg" },
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-6.jpeg" },
		{ src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-7.jpeg" },
	];

	function handlerSlide(direction) {
		
		if (direction === 'next') {
			let position = current + 100;
			setCurrent(position > (imgs.length-1)*100 ? 0 : position);
		}

		if (direction === 'prev') {
			let position = current - 100;
			setCurrent(position < 0 ? (imgs.length - 1) * 100 : position);
		}
	}

	let tagsImg = imgs.map(function (img) {
		return (
			<div class="slide min-w-full">
				<img class="w-full h-full" src={img.src} />
			</div>
		)
	});


	return (
		<div className="gallery max-w-[1440px] max-h-[681px] m-auto">
			<div className="slider relative overflow-hidden">
				<div 
					className="slides flex ease-in-out duration-500"
					style={css}>
					{tagsImg}
				</div>
				<span 
					className="absolute top-1/2 cursor-pointer" 
					id="prev" 
					onClick={event => handlerSlide('prev')}>
					<img src="/src/assets/icons/prev.svg" />
				</span>
				<span 
					className="absolute top-1/2 cursor-pointer right-0" 
					id="next"
					onClick={event => handlerSlide('next')}>
					<img src="/src/assets/icons/next.svg" />
				</span>
			</div>
		</div>
	);
}