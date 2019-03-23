import React from 'react';

import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import registrationStyle from '../../assets/jss/registrationPage.jsx'
import image from "../../theme/assets/img/bg7.jpg";
import RegistrationForm from './RegistrationForm.jsx'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as registrationActions from '../../actions/registration/registration-actions'
import * as commonActions from '../../actions/common/common-actions'
// core components
import InfoArea from "../../theme/components/InfoArea/InfoArea.jsx";
import Timeline from "@material-ui/icons/Timeline";
import { CardContent } from '@material-ui/core';

const mapStateToProps = (state) => {
	return {
	  register: state.registrationState,
		form: state.form,
		indicator: state.registrationState.indicator,
    isError: state.registrationState.isError,
    response: state.registrationState.response,
		status: state.registrationState.status,
		isRegistered: state.registrationState.registered,
		cardAnimation: state.common.cardAnimation
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(registrationActions,dispatch),
		commonActions: bindActionCreators(commonActions,dispatch)
	};
  }



class RegistrationComponent extends React.Component {
	static defaultProps = {
		isLoading: false,
		status: 'Login ready to go'
	};

	constructor(props) {
    super(props);
    this.props.commonActions.toggleCardAnimation(false);
	}
  componentDidMount() {
   
    setTimeout(
     () => {
      this.props.commonActions.toggleCardAnimation(true);
     },
      500
    );


  }

	render() {
		const {cardAnimation,isRegistered,indicator, status, isError, response, classes, ...rest } = this.props;
		return (

			<div>
       
			<div
			  className={classes.pageHeader}
			  style={{
				backgroundImage: "url(" + image + ")",
				backgroundSize: "cover",
				backgroundPosition: "top center"
			  }}
			>
			  <div className={classes.container}>

		
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				className={classes.grid}
			>
			{isRegistered === true ? ( 
					<Card className={classes[cardAnimation]}>
						<CardContent>
						<InfoArea
							title="Registration was successful"
							description="Please login to dashboard"
							icon={Timeline}
							iconColor="rose"
						/>
						</CardContent>
					</Card>
			) : (
				<Card className={classes[cardAnimation]}>
			<RegistrationForm indicator={indicator} isError={isError} status={status} classes={classes} onSubmit={this.handleSubmit}/>
			
			</Card>
		)}
		
			
				
			</Grid>

			</div>
        
        </div>
      </div>
		);
	}


	handleSubmit = () => {
		const { form } = this.props
		if(form.registrationForm != undefined){
			
			let data = form.registrationForm.values;
			data.company = ' ';
			data.street_address = ' ';
			data.city = ' ';
			data.state = ' ';
			data.zip_code = ' ';
			data.country = ' ';
			data.telephone = ' ';
			data.screen_name = ' ';
			data.show_name = ' ';
			data.img_url = ' ';
			data.disabled = ' ';

			this.props.actions.showStatusMessage('registering - please wait...');
      this.props.actions.indicator(true);
      this.props.actions.error(false);
			this.props.actions.registrationRequest(data);

		  console.log('Final values got here' + JSON.stringify(form.registrationForm.values));
		}
		console.log('On Submit called')
		}
		

		componentWillMount = () => {
			this.props.commonActions.toggleCardAnimation(false);
			this.props.actions.isRegistered(false)
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(registrationStyle)(RegistrationComponent));
