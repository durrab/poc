import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		height: '70vh',
		width: '100%',
		padding: '0'
	},
	appBar: {
		backgroundColor: '#ff7043',
		width:'100%'
	}
});

class ReferYesComponent extends React.Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.root}>
				<AppBar position="static" className={classes.appBar} variant="fullWidth">
					<Tabs style={{width:'100%'}} value={value} onChange={this.handleChange} >
						<Tab label="Account" />
						<Tab label="Messages" />
						<Tab label="Activity" />
					</Tabs>
				</AppBar>
				{value === 0 && <TabContainer>Account Screen</TabContainer>}
				{value === 1 && <TabContainer>Messages Screen</TabContainer>}
                {value === 2 && <TabContainer>Activity Screen</TabContainer>}
               
              
			</div>
		);
	}
}

ReferYesComponent.propTypes = {
	classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ReferYesComponent);