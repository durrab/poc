import { container } from '../../theme/assets/jss/material-kit-react.jsx';

const registrationStyle = {
	container: {
		...container,
		zIndex: '2',
		position: 'relative',
		paddingTop: '5vh',
		color: '#FFFFFF'
	},

	form: {
		margin: '0'
	},

	pageHeader: {
		minHeight: '100vh',
		height: 'auto',
		display: 'inherit',
		position: 'relative',
		margin: '0',
		padding: '0',
		border: '0',
		alignItems: 'center',
		'&:before': {
			background: 'rgba(0, 0, 0, 0.5)'
		},
		'&:before,&:after': {
			position: 'absolute',
			zIndex: '1',
			width: '100%',
			height: '100%',
			display: 'block',
			left: '0',
			top: '0',
			content: '""'
		},
		'& footer li a,& footer li a:hover,& footer li a:active': {
			color: '#FFFFFF'
		},
		'& footer': {
			position: 'absolute',
			bottom: '0',
			width: '100%'
		}
	},
	cardHeader: {
		width: 'auto',
		textAlign: 'center',
		marginLeft: '20px',
		marginRight: '20px',
		marginTop: '0px',
		padding: '10px 0',
		marginBottom: '15px',
		height: '100px'
	},
	card: {
		maxWidth: 500,
		width: '100%'
	},
	cardHidden: {
		opacity: '0',
		transform: 'translate3d(0, -60px, 0)'
	},
	media: {
		height: 140
	},
	logo: {
		height: '50px'
	},
	grid: {
		width: '100%'
	}
};

export default registrationStyle;
