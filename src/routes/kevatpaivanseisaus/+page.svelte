<script lang="js">
	import { onMount } from 'svelte';
	import nettisivu_k1 from '$lib/images/kevatpaivanseisaus/nettisivu_k1.png';
	import nettisivu_k2 from '$lib/images/kevatpaivanseisaus/nettisivu_k2.png';
	import nettisivu_k3 from '$lib/images/kevatpaivanseisaus/nettisivu_k3.png';
	import nettisivu_k4 from '$lib/images/kevatpaivanseisaus/nettisivu_k4.png';
	import tatu from '$lib/images/kevatpaivanseisaus/tatu.avif';
	import zombie from '$lib/images/kevatpaivanseisaus/zombie.png';
	import Video from '$lib/components/Video.svelte';
	import kasi from '$lib/images/kevatpaivanseisaus/kasi.avif';
	import kasvit from '$lib/images/kevatpaivanseisaus/kasvit.avif';
	import o_sydan from '$lib/images/kevatpaivanseisaus/o_sydan.webp';
	import v_sydan from '$lib/images/kevatpaivanseisaus/v_sydan.webp';
	import verho1 from '$lib/images/kevatpaivanseisaus/verho1.avif';
	import verho2 from '$lib/images/kevatpaivanseisaus/verho2.avif';
	import verho3 from '$lib/images/kevatpaivanseisaus/verho3.avif';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Quizz from './components/Quizz.svelte';

	export let data;

	let quizz_id = 4;

	let x = 0;
	let scrollY = x > 800 ? 0 : 20;
	let kapow;

	let handElement;
	let handIsInView = false;
	let handInitialScrollY;

	let curtainElement;
	let curtainIsInView = false;
	let curtainInitialScrollY;

	let tatuElement;
	let tatuIsInView = false;
	let tatuInitialScrollY;
	let tatuInitialRotation = 0;

	let heart1Element;
	let heart1IsInView = false;
	let heart1InitialScrollY;

	let heart2Element;
	let heart2IsInView = false;
	let heart2InitialScrollY;

	let zombieElement;
	let zombieIsInView = false;
	let zombieInitialScrollY;

	const handleElementScroll = (element, inInView, initialScrollY) => {
		const rect = element.getBoundingClientRect();
		inInView = rect.top < window.innerHeight && rect.bottom >= 0;
		if (inInView && initialScrollY === undefined) {
			initialScrollY = scrollY;
		}
		return [inInView, initialScrollY];
	};

	const handleScroll = () => {
		scrollY = (x < 768) | !x ? Math.max(window.scrollY, 20) : window.scrollY;

		[handIsInView, handInitialScrollY] = handleElementScroll(
			handElement,
			handIsInView,
			handInitialScrollY
		);

		[curtainIsInView, curtainInitialScrollY] = handleElementScroll(
			curtainElement,
			curtainIsInView,
			curtainInitialScrollY
		);

		[tatuIsInView, tatuInitialScrollY] = handleElementScroll(
			tatuElement,
			tatuIsInView,
			tatuInitialScrollY
		);

		[heart1IsInView, heart1InitialScrollY] = handleElementScroll(
			heart1Element,
			heart1IsInView,
			heart1InitialScrollY
		);

		[heart2IsInView, heart2InitialScrollY] = handleElementScroll(
			heart2Element,
			heart2IsInView,
			heart2InitialScrollY
		);

		[zombieIsInView, zombieInitialScrollY] = handleElementScroll(
			zombieElement,
			zombieIsInView,
			zombieInitialScrollY
		);
	};

	onMount(() => {
		window.scrollTo(0, 0);
		window.addEventListener('scroll', handleScroll);

		const kapow_observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					kapow.style.opacity = 1;
				} else {
					kapow.style.opacity = 0;
				}
			});
		});
		kapow_observer.observe(kapow);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	onMount(() => {
		if (window.innerWidth <= 1200) {
			tatuInitialRotation = 20;
		}
		if (window.innerWidth <= 800) {
			tatuInitialRotation = 60;
		}
	});
</script>

<svelte:window on:scroll={handleScroll} bind:innerWidth={x} />

<div class="page-wrapper">
	<div class="parallax-container">
		<img
			class="image"
			src={nettisivu_k1}
			alt="Taustakerros 1"
			style={x > 800 ? `transform: translateY(${scrollY * 0.8}px);` : ''} />
		<div id="top" class="production-logo" style="transform: translateY({scrollY * 1.5}px);">
			<h1 class="neon logo">
				<div>KE<span class="flicker-slow">V</span>ÄT</div>
				<div>P<span class="flicker-slow">Ä</span>IVÄN</div>
				<div>
					SEI<span class="flicker-slow">S</span>A<span class="flicker-fast u-turn">U</span
					>S
				</div>
			</h1>
		</div>
		<img
			class="image"
			src={nettisivu_k2}
			alt="taustakerros 2"
			style={x > 800 ? `transform: translateY(${scrollY * 0.6}px);` : ''} />
		<img
			class="image"
			src={nettisivu_k3}
			alt="taustakerros 3"
			style={x > 800 ? `transform: translateY(${scrollY * 0.4}px);` : ''} />
		<img
			class="image"
			src={nettisivu_k4}
			alt="taustakerros 4"
			style={x > 800 ? `transform: translateY(${scrollY * 0.1}px);` : ''} />
	</div>

	<div class="content">
		<div class="comic">
			<div class="first-panel panel">
				<div class="plants"><img src={kasvit} alt="kasvit" /></div>
				<div
					bind:this={handElement}
					class="hand"
					style={handIsInView
						? `transform: translateY(${(scrollY - handInitialScrollY) * 0.1}px) translateX(${(scrollY - handInitialScrollY) * -0.1}px);`
						: ''}>
					<img src={kasi} alt="käsi" />
				</div>
			</div>
			<div class="second-panel panel">
				<div
					bind:this={heart1Element}
					class="heart1"
					style={heart1IsInView
						? `transform: translateY(${(scrollY - heart1InitialScrollY) * -0.01}px) rotate(${Math.min(0, -90 + (scrollY - heart1InitialScrollY) * 0.1)}deg);`
						: ''}>
					<img src={v_sydan} alt="sydämen vasen puolikas" />
				</div>
				<div
					bind:this={heart2Element}
					class="heart2"
					style={heart2IsInView
						? `transform: translateY(${(scrollY - heart2InitialScrollY) * -0.01}px) rotate(${Math.max(0, 90 + (scrollY - heart2InitialScrollY) * -0.1)}deg);`
						: ''}>
					<img src={o_sydan} alt="sydämen oikea puolikas" />
				</div>
				<div class="background"><img src={nettisivu_k1} alt="tausta" /></div>
				<div
					bind:this={zombieElement}
					class="zombie"
					style={zombieIsInView
						? `transform: translateX(${(scrollY - zombieInitialScrollY) * 0.1}px);`
						: ''}>
					<img src={zombie} alt="zombie" />
				</div>
				<p>
					Matkalla vaaroja ja zomrizoja kuhiseva lihaviidakko koettelee luottamusta
					ystäviin, rakkauteen ja tuttuihin tapoihin. Onneksi mukana on yksi henkisen tuen
					humanisti. Eikä koskaan ole liian myöhäistä oppia rakastamaan oikein.
				</p>
			</div>
			<div class="third-panel panel">
				<div class="verho1"><img src={verho1} alt="verho1" /></div>
				<div
					bind:this={curtainElement}
					class="verho2"
					style={curtainIsInView
						? `transform: translateX(${(scrollY - curtainInitialScrollY) * 0.1}px);`
						: ''}>
					<img src={verho2} alt="verho2" />
				</div>
				<div class="verho3"><img src={verho3} alt="verho3" /></div>
			</div>
		</div>
	</div>

	<div class="content">
		<h2 class="neon global-center">HybridiSpeksi 2024 esittää: Kevätpäivänseisaus!</h2>
		<div class="times">
			<div class="kapow" bind:this={kapow}>
				<h2>Esitykset</h2>
				<p>
					Ke 20.3.2024 19:00<br />
					To 21.3.2024 19:00<br />
					Pe 22.3.2024 19:00<br />
					Su 24.3.2024 14:00<br />
					Ti 26.3.2024 19:00<br />
					Ke 27.3.2024 19:00<br />
					To 28.3.2024 19:00<br />
					Pe 29.3.2024 17:00<br />
					Kaikki esitykset
					<a
						class="link"
						href="https://www.karen.fi/"
						target="_blank"
						style="z-index = 1000;">Kårenilla</a
					><br />
				</p>
			</div>
			<div
				bind:this={tatuElement}
				class="tatu"
				style={tatuIsInView
					? `transform: translateX(${(scrollY - tatuInitialScrollY) * -0.1}px) rotate(${tatuInitialRotation + (scrollY - tatuInitialScrollY) * 0.008}deg)`
					: ''}>
				<img src={tatu} alt="tatu" />
			</div>
		</div>
		<div class="video-container">
			<Video
				videoURL="https://www.youtube.com/embed/mjmnFollhrw?si=IV8Sa0Th5kySAit3"
				code="mjmnFollhrw" />
		</div>
	</div>

	<Sponsors sponsors={data.sponsors} />
	<div class="global-wrap"><Quizz id={quizz_id} /></div>
</div>

<style lang="scss">
	.comic {
		width: 100vw;
		max-width: 1000px;
		overflow: hidden;

		.panel {
			width: 100%;
			position: relative;
			padding-bottom: 48%;
			overflow: hidden;
			div {
				position: absolute;
				width: 100%;
				height: 100%;
			}
			.hand {
				width: 30%;
				top: -100;
				right: -100;
			}
			img {
				width: 100%;
				object-fit: contain;
			}
			&.second-panel {
				padding-bottom: 55%;
				.background {
					img {
						object-fit: contain;
					}
				}
				.zombie {
					width: 10%;
					position: absolute;
					right: 100;
					img {
						position: absolute;
						bottom: 120;
					}
				}

				p {
					position: absolute;
					background-color: white;
					color: black;
					padding: 10px;
					font-family: 'Comic Neue';
					font-weight: 600;
					font-size: 20px;
					border: solid black 5px;
					bottom: 0;
					margin: 0;
					@media (max-width: 750px) {
						font-size: 16px;
					}
					@media (max-width: 500px) {
						font-size: 12px;
					}
				}
			}
			.heart1 {
				transform: rotate(-90deg);
			}
			.heart2 {
				transform: rotate(90deg);
			}
		}
	}
	.video-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px 0;
	}
	.times {
		display: flex;
		flex-direction: row;
		width: 100%;
		position: relative;
		padding: 50px 0;
		align-items: center;
		justify-content: center;
		.kapow {
			opacity: 0;
			transition: opacity 0.2s;
			transition-delay: 0.5s;
			background-image: url('$lib/images/kevatpaivanseisaus/kapow.avif');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			background-position: center;
			color: var(--black);
			font-weight: 600;
			font-size: 20px;
			padding: 150px;
			text-align: center;
			width: fit-content;
			@media (max-width: 800px) {
				padding: 100px;
			}
			.link,
			p,
			h2 {
				position: relative;
				z-index: 11;
			}
		}
		.tatu {
			height: 100%;
			display: flex;
			width: 50%;
			z-index: 10;
			img {
				min-width: 1000px;
			}
			@media (max-width: 1400px) {
				margin-left: -40%;
			}
			@media (max-width: 800px) {
				margin-top: -40%;
				img {
					min-width: 800px;
				}
			}
			@media (max-width: 600px) {
				margin-left: -50%;
				img {
					min-width: 600px;
				}
			}

			@media (max-width: 450px) {
				margin-left: -60%;
			}
		}
	}
	.content {
		width: 100%;
		z-index: 10;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url('$lib/images/kevatpaivanseisaus/nettisivu_tausta.webp');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.parallax-container {
		position: relative;
		padding-top: 70px;
		height: 100vh;
		overflow: hidden;
		background-image: url('$lib/images/kevatpaivanseisaus/nettisivu_tausta.webp');
		z-index: 1;
	}
	.image {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		top: 0;
		left: 0;
	}

	.logo {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		font-size: 85px;

		@media (max-width: 750px) {
			font-size: 70px;
		}
	}

	.production-logo {
		text-align: center;
	}

	@font-face {
		font-family: 'Beon';
		src: url('/fonts/BeonMedium-6d51-webfont.woff2') format('woff2');
		font-display: swap;
	}

	.u-turn {
		display: inline-block;
		transform: translateY(50%) rotate(45deg);
		transform-origin: center center;
	}

	.neon {
		font-family: 'Beon', sans-serif;
		color: #ffffff;
		font-weight: 400;
		letter-spacing: 1vw;
		text-shadow:
			1px 0px 4px #fdcefd,
			2px 0px 4px rgb(253, 198, 253),
			3px 0px 4px rgb(255, 154, 255),
			2px 0px 3px #c92cbe,
			2px 3px 15px #c415b8,
			2px 0px 15px,
			5px 0px 125px,
			20px 0vw 200px #d42cca,
			40px 0vw 200px #b826ae;
	}

	.flicker-slow {
		animation: flicker 3s linear infinite;
	}

	.flicker-fast {
		animation: flicker 1s linear infinite;
	}

	@keyframes flicker {
		0%,
		19.999%,
		22%,
		62.999%,
		64%,
		64.999%,
		70%,
		100% {
			//text-shadow: none;
			opacity: 0.99;
		}
		20%,
		21.999%,
		63%,
		63.999%,
		65%,
		69.999% {
			opacity: 0.4;
		}
	}

	.page-wrapper {
		background-image: url('$lib/images/kevatpaivanseisaus/nettisivu_tausta.webp');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: top center;
		max-width: 100%;
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	a {
		z-index: 10000;
	}
</style>
