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
							value: 60,
							density: {
								enable: true,
								value_area: 1500,
							},
						},
						line_linked: {
							enable: true,
							opacity: 0.02,
						},
						move: {
							direction: 'right',
							speed: 0.05,
						},
						size: {
							value: 1,
						},
						opacity: {
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.05,
							},
						},
					},
					interactivity: {
						events: {
							onclick: {
								enable: true,
								mode: 'push',
							},
						},
						modes: {
							push: {
								particles_nb: 1,
							},
						},
					},
					retina_detect: true,
				}}
			/>
			<div className="flex">
				<img
					src="https://raw.githubusercontent.com/saharsh/assets/master/saharsh/youngSaharsh.png?token=AG6TZTK7EL57OHX56KZRIY27M3FDA"
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
