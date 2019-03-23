import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Card from '../../theme/components/Card/Card.jsx';
import CardBody from '../../theme/components/Card/CardBody.jsx';
import CardHeader from '../../theme/components/Card/CardHeader.jsx';
import CardFooter from '../../theme/components/Card/CardFooter.jsx';
import CustomInput from '../../theme/components/CustomInput/CustomInput.jsx';
import Button from '../../theme/components/CustomButtons/Button.jsx';
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import { TextField } from '@material-ui/core/TextField';
import Info  from '../../theme/components/Typography/Info.jsx';
import Danger  from '../../theme/components/Typography/Danger.jsx';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}





const renderField = ({ value, onChange, name, input, label, type, formControlProps, inputProps, meta: { asyncValidating, touched, error }, ...custom }) => {

	return  (
		<div>
			<div className={asyncValidating ? 'async-validating' : ''}>
				<CustomInput 
				name={name} 
				type={type} 
				hintText={label} 
				labelText={label} 
				errotText={touched && error} 
				{...input} 
				{...custom} 
				formControlProps={formControlProps} 
				inputProps={{...inputProps, ...input}}
				
				/>
				{touched && error && <span>{error}</span>}
			</div>
		</div>
	)
}

class LoginForm extends Component {
	render() {
		const {indicator, status, isError, classes, handleSubmit, pristine, submitting , ...rest } = this.props;
		return (
			<form className={classes.form} onSubmit={handleSubmit}>
				<CardHeader color="success" className={classes.cardHeader}>
					<h4>Login</h4>
				</CardHeader>
				<CardBody>
					{indicator && <Info>{status}</Info>}
				    {isError && <Danger>{status}</Danger>}
				</CardBody>
				
				<CardBody>
					<Field
						name="email"
					
						component={renderField}
						label="Email"
						formControlProps={{
							fullWidth: true
						}}
						inputProps={{
							type: 'email',
							name:"email",
							onChange: (event) => {
								console.log('onchange called')
							},
							endAdornment: (
								<InputAdornment position="end">
									<Email className={classes.inputIconsColor} />
								</InputAdornment>
							)
						}}
					/>

					<Field
						label="Password"
						name="password"
				
						component={renderField}
						formControlProps={{
							fullWidth: true
						}}
						inputProps={{
							type: 'password',
							name: 'password',
							onChange: (event) => {
								console.log('onchange called')
							},
							endAdornment: (
								<InputAdornment position="end">
									<Icon className={classes.inputIconsColor}>lock_outline</Icon>
								</InputAdornment>
							)
						}}
					/>

				</CardBody>
				<CardFooter className={classes.cardFooter}>
					<Button type="submit" color="warning" size="lg" disabled={pristine || submitting}>
						Sign in
					</Button>
				</CardFooter>
			</form>
		);
	}
}

// Decorate the form component
export default reduxForm({
	validate,
	form: 'authenticationForm',
	asyncBlurFields: ['email']

})(LoginForm);
