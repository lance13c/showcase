import * as React from 'react';
import './styles/index.scss';

export interface PetiteProDeskProps {}

const PetiteProDesk: React.SFC<PetiteProDeskProps> = (props) => {
	return (
		<section id="ppd-app">
			<nav />
			<div className="main-placeholder" />
			<main className="main">
				<div className="content-wrapper">
					<h1 className="title is-1">Desks for Petite Professionals.</h1>
					<h2 className="subtitle is-3 flex justify-start items-center flex-wrap">
						<span>Small</span>
						<i className="fas fa-circle is-size-8 p-5" />
						<span>Ergonomic</span>
						<i className="fas fa-circle is-size-8 p-5" />
						<span>Hand Crafted</span>
					</h2>
				</div>
			</main>
			<section className="section bg-linear-alpha-gray-100">
				<h1 className="title is-2">Attributes</h1>
				<ul className="grid">
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
				</ul>
			</section>
			<section className="section bg-purple-100">
				<h1 className="title is-2">Our Mission</h1>
				<p className="special-text">
					Mission Statement Here adlkfjadlkfjalkdfjalkdfjlakdjflakdfjlakdjflakdjfl kdjfal dkfjal kdfjaldk
					jfdalk jdflk jadlfkjadlkfj
				</p>
			</section>
			<section className="section bg-pink-200">
				<h1 className="title is-2">Stay Informed</h1>
				<form action="">
					<div className="row">
						<input type="text" name="first-name" />
						<input type="text" name="last-name" />
					</div>
					<ul className="checkbox-grid">
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
						<li />
					</ul>
				</form>
			</section>
		</section>
	);
};

export default PetiteProDesk;
