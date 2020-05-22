import * as React from 'react';
import 'bulma/bulma.sass';
import './styles/index.scss';

import { ReCaptcha, Input, Textarea, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import PageLogo from './components/page-logo';

const inputStyles: React.CSSProperties = { width: '48%' };
const inputIconStyles: React.CSSProperties = { color: '#01b6f5' };
const titleStyles: React.CSSProperties = { textAlign: 'center' };

const LIBRARY_RECAPTCHA_APIKEY = 'TESTING';

export interface PetiteProDeskProps {}

function PetiteProDesk() {
	const [ userName, setUserName ] = React.useState('');
	const [ userNameError, setUserNameError ] = React.useState('');
	const [ email, setEmail ] = React.useState('');
	const [ emailError, setEmailError ] = React.useState('');
	const [ message, setMessage ] = React.useState('');
	const [ messageError, setMessageError ] = React.useState('');
	const [ recaptcha, setRecaptcha ] = React.useState('');
	const [ recaptchaError, setRecaptchaError ] = React.useState('');
	const recaptchaRef = React.useRef<any>(null);

	function handleUserNameChange(event: React.FormEvent<HTMLInputElement>) {
		const userName = event.currentTarget.value;
		let error = '';
		if (userName === undefined || userName === '') {
			error = 'the name is required';
		}
		setUserName(event.currentTarget.value);
		setUserNameError(error);
	}

	function handleEmailChange(event: React.FormEvent<HTMLInputElement>) {
		const email = event.currentTarget.value;
		let error = '';
		if (email === undefined || email === '') {
			error = 'the email is required';
		}

		setEmail(event.currentTarget.value);
		setEmailError(error);
	}

	function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		const message = event.currentTarget.value;
		let error = '';
		if (message === undefined || message === '') {
			error = 'the message is required';
		}
		setMessage(event.currentTarget.value);
		setMessageError(error);
	}

	function handleReCaptchaSuccess(token: string) {
		let error = '';
		if (token === undefined) {
			error = 'the recaptcha needs to be completed';
		}

		setRecaptcha(token);
		setRecaptchaError(error);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		let reload = false;
		if (userName === undefined || userName === '') {
			setUserNameError('the name is required');
			reload = true;
		}
		if (email === undefined || email === '') {
			setEmailError('the email is required');
			reload = true;
		}
		if (message === undefined || message === '') {
			setMessageError('the message is required');
			reload = true;
		}
		if (recaptcha === undefined) {
			setRecaptchaError('the recaptcha needs to be completed');
			reload = true;
		}
		if (!reload) {
			alert('Error');
			if (recaptchaRef !== null) {
				//@ts-ignore
				recaptchaRef.current.reset();
			}
		}
	}

	return (
		<section id="ppd-app">
			<nav className="row nav">
				<PageLogo />
			</nav>
			<main className="main">
				<div className="content-wrapper">
					<h1 className="title is-1">Desks for Petite Professionals.</h1>
					<h2 className="subtitle is-3 flex justify-left items-center flex-wrap">
						<span>Small</span>
						<i className="fas fa-circle is-size-8 p-5" />
						<span>Ergonomic</span>
						<i className="fas fa-circle is-size-8 p-5" />
						<span>Hand Crafted</span>
					</h2>{' '}
					*/}
					<h2 className="subtitle is-3 pt-10">Stay Informed</h2>
					<div>
						{/* <GlobalHader src="images/user/user3.jpg" /> */}
						<form className="rainbow-p-around_xx-large">
							onSubmit={handleSubmit}
							<h1
								className="rainbow-color_brand rainbow-font-size-heading_medium rainbow-p-bottom_large"
								style={titleStyles}
							>
								Contact us
							</h1>
							<div className="rainbow-flex rainbow-justify_spread">
								<Input
									label="Name"
									placeholder="Enter your name"
									value={userName}
									error={userNameError}
									onChange={handleUserNameChange}
									icon={<FontAwesomeIcon icon={faUser} style={inputIconStyles} />}
									style={inputStyles}
								/>
								<Input
									label="Email"
									placeholder="enter your email"
									value={email}
									error={emailError}
									onChange={handleEmailChange}
									icon={<FontAwesomeIcon icon={faEnvelope} style={inputIconStyles} />}
									style={inputStyles}
								/>
							</div>
							<Textarea
								label="Message"
								placeholder="Enter a message"
								value={message}
								error={messageError}
								onChange={handleMessageChange}
								className="rainbow-m-vertical_large"
							/>
							<div className="rainbow-flex rainbow-align-content_space-between">
								<ReCaptcha
									siteKey={LIBRARY_RECAPTCHA_APIKEY}
									// @ts-ignore
									ref={recaptchaRef}
									error={recaptchaError}
									onChange={handleReCaptchaSuccess}
								/>
								<Button label="Send" variant="brand" type="submit" />
							</div>
						</form>
					</div>
				</div>; */}
			</main>
		</section>
	);
}

export default PetiteProDesk;
