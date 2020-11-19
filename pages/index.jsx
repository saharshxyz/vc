import Head from 'next/head';
import Particles from 'react-particles-js';

export default function Home() {
	return (
		<div>
			<Head>
				<title>saharsh.vc</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					key="fonts-preconnect"
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Particles
				params={{
					particles: {
						number: {
							value: 48,
							density: {
								enable: true,
								value_area: 1102.9757735883716,
							},
						},
						color: {
							value: '#7a8c97',
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 0,
								color: '#7a8c97',
							},
							polygon: {
								nb_sides: 5,
							},
							image: {
								src: 'img/github.svg',
								width: 100,
								height: 100,
							},
						},
						opacity: {
							value: 0.5,
							random: false,
							anim: {
								enable: false,
								speed: 1,
								opacity_min: 0.1,
								sync: false,
							},
						},
						size: {
							value: 3,
							random: true,
							anim: {
								enable: false,
								speed: 40,
								size_min: 0.1,
								sync: false,
							},
						},
						line_linked: {
							enable: true,
							distance: 150,
							color: '#7a8c97',
							opacity: 0.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 1,
							direction: 'none',
							random: false,
							straight: false,
							out_mode: 'out',
							bounce: false,
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1200,
							},
						},
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onhover: {
								enable: false,
								mode: 'repulse',
							},
							onclick: {
								enable: false,
								mode: 'push',
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 1,
								},
							},
							bubble: {
								distance: 400,
								size: 40,
								duration: 2,
								opacity: 8,
								speed: 3,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
							push: {
								particles_nb: 4,
							},
							remove: {
								particles_nb: 2,
							},
						},
					},
					retina_detect: true,
				}}
			/>
			<div className="flex">
				<img
					src="https://assets.saharsh.tech/saharsh/pfp--2019__square.jpg"
					style={{ borderRadius: '100%', width: '10em' }}
				/>
				<div className="text">
					<h1>saharsh.vc</h1>
					<p>
						World's youngest vc. Early investor in Facebook and Uber. Current
						investor in Stripe + Snowflake. 60 million dollar fund. You wish I
						funded you.
					</p>
				</div>
			</div>
		</div>
	);
}
