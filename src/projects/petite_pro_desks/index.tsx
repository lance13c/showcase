import * as React from 'react';
import 'bulma/bulma.sass';
import './styles/index.scss';

import {
	ReCaptcha,
	Input,
	Textarea,
	Button,
	Application,
	VisualPicker,
	VisualPickerOption
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faAngleDown, faChevronDown, faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import {
	faCabinetFiling,
	faSortCircle,
	faKeyboard,
	faPersonCarry,
	faAcorn,
	faTreasureChest,
	faOutlet
} from '@fortawesome/pro-light-svg-icons';
// import {} from '@fortawesome/pro-duotone-svg-icons';

import PageLogo from './components/page-logo';
import DownArrow from './components/down-arrow';
import CONFIGS from '../../config.json';

const optionsStyles: React.CSSProperties = { width: '100%', marginTop: '1.5rem' };
const textAreaStyles: React.CSSProperties = { width: '100%' };
const emailInputStyles: React.CSSProperties = { width: '100%' };
const inputIconStyles: React.CSSProperties = { color: '#01b6f5' };
const titleStyles: React.CSSProperties = { textAlign: 'center' };

const LIBRARY_RECAPTCHA_APIKEY = CONFIGS.sitekey;

const themeDark = {
	rainbow: {
		palette: {
			brand: '#4492d7',
			mainBackground: '#212121',
			success: '#ffb900'
		}
	}
};

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
	const [ isLoading, setIsLoading ] = React.useState(false);
	const [ options, setOptions ] = React.useState([]);
	const recaptchaRef = React.useRef<any>(null);

	function handleEmailChange(event: React.FormEvent<HTMLInputElement>) {
		const email = event.currentTarget.value;
		let error = '';
		if (email === undefined || email === '') {
			error = 'Email is required for submission';
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

	function handleOptionsChange(value: string[]) {
		console.info(value);
		// @ts-ignore
		return setOptions(value);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		let reload = false;
		if (userName === undefined || userName === '') {
			setUserNameError('the name is required');
			reload = true;
		}
		if (email === undefined || email === '') {
			setEmailError('Email is required for submission');
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
			if (recaptchaRef !== null) {
				//@ts-ignore
				recaptchaRef.current.reset();
			}
		}
	}

	return (
		<section id="ppd-app">
			<Application theme={themeDark}>
				<nav className="row nav">
					<PageLogo />
				</nav>
				<div className="main-background" />
				<main className="main">
					<div className="content-wrapper">
						<h1 className="title is-1">
							Desks for <span className="logo-first">Pe</span>tite <span className="logo-second">Pr</span>ofessionals.
						</h1>
						{/* <h2 className="subtitle is-3 flex justify-left items-center flex-wrap">
						<span>Small</span>
						<i className="fas fa-circle is-size-8 p-5" />
						<span>Ergonomic</span>
						<i className="fas fa-circle is-size-8 p-5" />
						<span>Hand Crafted</span>
					</h2>{' '} */}
						{/* <h2 className="subtitle is-3 pt-10">Stay Informed</h2> */}
					</div>
					<div className="main-footer">
						<FontAwesomeIcon className="down-arrow" icon={faChevronDown} size="3x" color="#cccccc" />;
					</div>
				</main>
				<section id="form-section" className="section">
					<div>
						{/* <GlobalHader src="images/user/user3.jpg" /> */}

						<form className="rainbow-p-around_xx-large" onSubmit={handleSubmit}>
							<h1 className="subtitle is-1 options-header">Stay In Touch</h1>
							<div className="rainbow-flex rainbow-justify_spread options-input-container">
								<Input
									label="Email"
									placeholder="Enter an email"
									value={email}
									error={emailError}
									onChange={handleEmailChange}
									icon={<FontAwesomeIcon icon={faEnvelope} style={inputIconStyles} />}
									style={emailInputStyles}
								/>
							</div>

							<VisualPicker
								id="options-visual-picker"
								label="Desired Features"
								value={options}
								//@ts-ignore
								onChange={handleOptionsChange}
								multiple
								size="small"
								style={optionsStyles}
							>
								<VisualPickerOption name="manual-adjustable-height">
									<FontAwesomeIcon
										icon={faPersonCarry}
										size="3x"
										color={themeDark.rainbow.palette.brand}
									/>
									<div className="option-label">Manual Adjustable Height</div>
								</VisualPickerOption>
								<VisualPickerOption name="auto-adjustable-height">
									<FontAwesomeIcon
										icon={faSortCircle}
										size="3x"
										color={themeDark.rainbow.palette.brand}
									/>
									<div className="option-label">Auto Adjustable Height</div>
								</VisualPickerOption>
								<VisualPickerOption name="optional-desk-material">
									<FontAwesomeIcon icon={faAcorn} size="3x" color={themeDark.rainbow.palette.brand} />
									<div className="option-label">Optional Desk Material</div>
								</VisualPickerOption>
								<VisualPickerOption name="curved">
									<img
										width="30px"
										style={{ color: 'white' }}
										src="/images/rectangle-insert-2.webp"
									/>
									<div className="option-label">Curved</div>
								</VisualPickerOption>
								<VisualPickerOption name="keyboard-tray">
									<FontAwesomeIcon
										icon={faKeyboard}
										size="3x"
										color={themeDark.rainbow.palette.brand}
									/>
									<div className="option-label">Keyboard Tray</div>
								</VisualPickerOption>
								<VisualPickerOption name="drawers">
									<FontAwesomeIcon
										icon={faCabinetFiling}
										size="3x"
										color={themeDark.rainbow.palette.brand}
									/>
									<div className="option-label">Drawers</div>
								</VisualPickerOption>
								<VisualPickerOption name="cable-management">
									<FontAwesomeIcon
										icon={faTreasureChest}
										size="3x"
										color={themeDark.rainbow.palette.brand}
									/>
									<div className="option-label">Cable Management</div>
								</VisualPickerOption>
								<VisualPickerOption name="power-outlets">
									<FontAwesomeIcon
										icon={faOutlet}
										size="3x"
										color={themeDark.rainbow.palette.brand}
									/>
									<div className="option-label">Power Outlets</div>
								</VisualPickerOption>
							</VisualPicker>
							<div className="rainbow-flex options-input-container">
								<Textarea
									label="Message"
									placeholder="Anything else you wish to mention"
									value={message}
									onChange={handleMessageChange}
									className="rainbow-m-vertical_large"
									style={textAreaStyles}
								/>
							</div>
							<div className="rainbow-flex rainbow-align-content_space-between options-input-container">
								<ReCaptcha
									siteKey={LIBRARY_RECAPTCHA_APIKEY}
									theme="dark"
									// @ts-ignore
									ref={recaptchaRef}
									error={recaptchaError}
									onChange={handleReCaptchaSuccess}
								/>
								<Button isLoading={isLoading} label="Send" variant="neutral" type="submit" />
							</div>
						</form>
					</div>
				</section>
			</Application>
		</section>
	);
}

export default PetiteProDesk;
