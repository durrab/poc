import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ReferYesComponent from './referyes/ReferYesComponent';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ 'paddingTop': 1, width: '100%' }}>
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
		height: '80vh',
		width: '100%'
	},
	appBar: {
		backgroundColor: '#4caf50'
	},
	indicator: {
        backgroundColor: '#4caf50',
      },
      default_tabStyle:{
        color: 'white',
        fontSize:12,
        backgroundColor: '4caf50',
       }
});

class DashboardComponent extends React.Component {
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
				<AppBar position="static" variant="fullWidth" className={classes.appBar}>
					<Tabs
						
						value={value}
						onChange={this.handleChange}
						classes={{
							indicator: classes.indicator
                        }}
                    >
						<Tab label="Sourcer" className={classes.default_tabStyle} />
						<Tab label="Candidates" />
						<Tab label="Post Jobs" />
						<Tab label="Refer People" />
						<Tab label="My Refer Yes" />
					</Tabs>
				</AppBar>
				{value === 0 && <TabContainer>Sourcer Screen</TabContainer>}
				{value === 1 && <TabContainer>Candidates Screen</TabContainer>}
				{value === 2 && <TabContainer>Post Jobs Screen</TabContainer>}
				{value === 3 && <TabContainer>Refer People Screen</TabContainer>}
				{value === 4 && (
					<TabContainer>
						<ReferYesComponent />
					</TabContainer>
				)}
			</div>
		);
	}
}

DashboardComponent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardComponent);
