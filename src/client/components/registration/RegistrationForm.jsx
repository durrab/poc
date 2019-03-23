import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../../theme/components/CustomButtons/Button.jsx';
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

import { TextField } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import red from '@material-ui/core/colors/red';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

import Info  from '../../theme/components/Typography/Info.jsx';
import Danger  from '../../theme/components/Typography/Danger.jsx';

import asyncValidate from './validators/asyncValidate';

const validate = (values) => {
	const errors = {};
	const requiredFields = [ 'firstName', 'lastName', 'email', 'password', 'confirmPassword' ];
	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = 'Required';
		}
	});
	if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
    }
  if(values.password && values.confirmPassword){
      if(values.password.trim() !== values.confirmPassword.trim()){
          errors['confirmPassword'] = "Password does not match";
      }
  }
	return errors;
};

const renderTextField = ({ label, input, meta: { asyncValidating, touched, invalid, error }, ...custom }) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
        {...custom}
        className={asyncValidating ? 'async-validating' : ''}
	/>
);

class RegistrationForm extends Component {
	render() {
		const {indicator, isError, status, classes, handleSubmit, pristine, submitting, ...rest } = this.props;
		return (
			<form className={classes.form} onSubmit={handleSubmit}>
				<CardHeader
					title="Ready to sign up now! It's free and simple"
					className={classes.cardHeader}
					style={{ background: 'green' }}
				/>
				<Grid container spacing={0} justify="center" style={{ width: '100%' }} />
				<CardContent>
			
					{indicator && <Info>{status}</Info>}
				    {isError && <Danger>{status}</Danger>}
				
				</CardContent>

				<CardContent>
					<Grid container spacing={0} justify="center" style={{ width: '100%' }}>
						<Grid item xs={6} style={{ width: '100%' }}>
							<Field
								name="firstName"
								component={renderTextField}
								label="First Name"
								style={{ width: '100%' }}
							/>
							<Field
								name="lastName"
								component={renderTextField}
								label="Last Name"
								style={{ width: '100%' }}
							/>
                            
                             <Field name="email" component={renderTextField} label="Email" style={{ width: '100%' }} />
                           
							
						</Grid>
					</Grid>
				</CardContent>

				<Grid container spacing={0} justify="center" style={{ width: '100%' }}>
					<Divider component="div" style={{ width: '90%' }} />
				</Grid>

				<CardContent>
					<Grid container spacing={0} justify="center" style={{ width: '100%' }}>
						<Field
							name="password"
							component={renderTextField}
							label="Password"
							style={{ width: '70%', margin: 8 }}
							type="password"
						/>
						<Field
							name="confirmPassword"
							component={renderTextField}
							label="Confirm Password"
							style={{ width: '70%', margin: 8 }}
							type="password"
						/>
					</Grid>
				</CardContent>

				<CardContent>
					<FormGroup row>
						<Grid
							container
							spacing={0}
							justify="flex-start"
							alignItems="center"
							alignContent="space-between"
						>
							<Grid container item xs={6} justify="flex-start">
								<FormControlLabel control={<Switch value="checkedB" color="primary" />} label="" />
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
											User Agreement
										</Link>
									}
								/>
							</Grid>
						</Grid>
					</FormGroup>
				</CardContent>

				<CardActions>
					<Grid container spacing={0} justify="flex-start" />
					<Grid container spacing={0} justify="flex-end">
						<Button type="submit" variant="contained" color="primary" disabled={pristine || submitting}>
							Register
						</Button>
					</Grid>
				</CardActions>
			</form>
		);
	}
}

// Decorate the form component
export default reduxForm({
    validate,
    asyncValidate,
	form: 'registrationForm',
	asyncBlurFields: [ 'email' ]
})(RegistrationForm);

/*

<TextField
									id="firstNameInput"
									label="First Name:"
									style={{ margin: 8 }}
									placeholder="Enter your first name"
									style={{ width: '100%' }}
									margin="normal"
									InputLabelProps={{
										shrink: true
									}}
								/>
								<TextField
									id="lastNameInput"
									label="Last Name:"
									style={{ margin: 8 }}
									placeholder="Enter your last name"
									
									margin="normal"
									InputLabelProps={{
										shrink: true
									}}
								/>

								<TextField
									id="emailInput"
									label="Email:"
									style={{ margin: 8 }}
									placeholder="Enter your email as user name"
									style={{ width: '100%' }}
									margin="normal"
									type="email"
									InputLabelProps={{
										shrink: true
									}}
                                />
                                




<TextField
								id="passwordInput"
								label="Password:"
								placeholder="Enter your password"
								style={{ width: '70%' }}
								margin="normal"
								type="password"
								InputLabelProps={{
									shrink: true
								}}
							/>

							<TextField
								id="confirmPasswordInput"
								label="Confirm Password:"
								style={{ margin: 8 }}
								placeholder="Confirm password"
								style={{ width: '70%' }}
								margin="normal"
								type="password"
								InputLabelProps={{
									shrink: true
								}}
							/>


*/
