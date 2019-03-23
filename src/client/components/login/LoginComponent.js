import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import red from '@material-ui/core/colors/red';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Link from '@material-ui/core/Link';
import FormGroup from '@material-ui/core/FormGroup';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const dudUrl = 'javascript:;';

const styles = (theme) => ({
	card: {
		maxWidth: 500,
		width: '70vh'
	},
	media: {
		height: 140
	},
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		height: '80vh'
	},
	avatar: {
		backgroundColor: red[500]
	},
	logo: {
		height: '50px'
	},
	link: {
		margin: theme.spacing.unit
	}
});


class LoginComponent extends React.Component {
	static defaultProps = {
		isLoading: false,
		status: 'Login ready to go'
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { classes, status } = this.props;

		return (
			
				<Grid container spacing={0} justify="space-around">
					<Card className={classes.card}>
						<CardContent>
							<Grid container spacing={0} justify="flex-start">
								<img src="/assets/images/logo.png" alt="logo" className={classes.logo} />
							</Grid>
						</CardContent>

						<Grid container spacing={0} justify="center">
							<CardHeader title="Welcome back" />
						</Grid>

						<CardContent>
							<Grid container spacing={0} justify="center">
								<TextField
									id="userNameInput"
									label="Email"
									style={{ margin: 8 }}
									placeholder="Enter your username"
									fullWidth
									margin="normal"
									InputLabelProps={{
										shrink: true
									}}
								/>

								<TextField
									id="passwordInput"
									label="Password"
									style={{ margin: 8 }}
									placeholder="Enter your password"
									fullWidth
									margin="normal"
									type="password"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
						</CardContent>
						<CardContent>
							<FormGroup row>
								<Grid
									container
									spacing={0}
									justify="flex-end"
									alignItems="center"
									alignContent="space-between"
								>
									<Grid container item xs={6} justify="flex-start">
										<FormControlLabel
											control={<Switch value="checkedB" color="primary" />}
											label="Remember me"
										/>
									</Grid>
									<Grid container item xs={6} justify="flex-end">
										<FormControlLabel
											control={
												<Link
													component="button"
													variant="body2"
													onClick={() => {
														alert("I'm a button.");
													}}
													value="test"
												>
													Forgot Password?
												</Link>
											}
										/>
									</Grid>
								</Grid>
							</FormGroup>
						</CardContent>

						<CardActions>
							<Grid container spacing={0} justify="center">
								<Button variant="raised" color="primary">
									Login
								</Button>
							</Grid>
						</CardActions>
						<CardContent>
							<Grid container spacing={0} justify="center">
								<Link
									component="button"
									variant="body2"
									onClick={() => {
										alert("I'm a button.");
									}}
								>
									Sign up
								</Link>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
		
		);
	}
}

LoginComponent.propTypes = {
	classes: PropTypes.object.isRequired,
	status: PropTypes.string
};

export default withStyles(styles)(LoginComponent);
