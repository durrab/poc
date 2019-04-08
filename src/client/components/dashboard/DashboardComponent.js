import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ReferYesComponent from './referyes/ReferYesComponent';
import image from "../../theme/assets/img/bg7.jpg";
import dashboardPageStyle from '../../theme/assets/jss/material-kit-react/views/dashboard.jsx'
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import Computer from "@material-ui/icons/Computer"
import Home from "@material-ui/icons/HomeRounded"

import CustomTabs from "../../theme/components/CustomTabs/CustomTabs.jsx";
import Group from "@material-ui/icons/Group"
import Info from "@material-ui/icons/Info"

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
        backgroundColor: '#FFFFFF',
      },
  default_tabStyle:{
    color: 'white',
    fontSize:12,
    backgroundColor: '$FFFFFF',
  }
});

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
   // this.props.commonActions.toggleCardAnimation(false);
  }

  componentDidMount() {
   
  /*  setTimeout(
     () => {
      this.props.commonActions.toggleCardAnimation(true);
     },
      500
    ); */


  }
	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
	

		return (
      <div>
         <div className={classes.container} style={{marginTop:124, maxWidth:'90vw'}}>
					<CustomTabs
          plainTabs={true}
          headerColor="success"
          tabs={[
            {
              tabName: "Sourcer",
              tabIcon: Computer,
              tabContent: (
                <p className={classes.textCenter} style={{height:'90vh'}}>
                 Sourcer contents
                </p>
              )
            },
            {
              tabName: "My Candidates",
              tabIcon: Chat,
              tabContent: (
                <p className={classes.textCenter}>
                 my candidate contents
                </p>
              )
            },
            {
              tabName: "Post Jobs",
              tabIcon: Info,
              tabContent: (
                <p className={classes.textCenter}>
                 post a job contents
                </p>
              )
						},
						{
              tabName: "Refer People",
              tabIcon: Group,
              tabContent: (
                <p className={classes.textCenter}>
                 refer people contents
                </p>
              )
						},
						{
              tabName: "My Refer Yes",
              tabIcon: Home,
              tabContent: (
								<ReferYesComponent/>
              )
            }
          ]}
        />
          </div>
      </div>
    );
	}
}

DashboardComponent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(dashboardPageStyle)(DashboardComponent);
