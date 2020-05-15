import * as React from 'react';

export interface PetiteProDeskProps {}

const PetiteProDesk: React.SFC<PetiteProDeskProps> = (props) => {
	return (
		<section>
			<nav />
			<main>
				<h1>
					A Petite Professional Personalizable
					<span>Desk</span>
					<h2>The desk made smaller indivisuals.</h2>
				</h1>
			</main>
			<section>
				<h1>Attributes</h1>
				<ul className="grid">
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
				</ul>
			</section>
			<section>
				<h1>Our Mission</h1>
				<p className="special-text">
					Mission Statement Here adlkfjadlkfjalkdfjalkdfjlakdjflakdfjlakdjflakdjfl kdjfal dkfjal kdfjaldk
					jfdalk jdflk jadlfkjadlkfj
				</p>
			</section>
			<section>
				<h1>Stay Informed</h1>
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
