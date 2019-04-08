import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import NavPills from "../../../theme/components/NavPills/NavPills.jsx";
import CssBaseline from '@material-ui/core/CssBaseline';



import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Face from "@material-ui/icons/Face";
import EditProfile from "@material-ui/icons/Edit"
import MyFriends from "@material-ui/icons/ChildFriendlyRounded"
import FriendRequest from "@material-ui/icons/Contacts"
import InviteFriends from "@material-ui/icons/InsertInvitationRounded"
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import referyesStyles from "./styles/referyesStyles.jsx"

import UserProfile from "./profile/UserProfile.jsx"





const drawerWidth = 100;





class ReferYesComponent extends React.Component {
	

	state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div style={{width:'50px'}}>
        <div />
        <Divider />
        <List>
          <ListItem button key={1}>
            <ListItemIcon>{<Face/>}</ListItemIcon>
            <ListItemText primary={''} />
          </ListItem>
          <ListItem button key={2}>
            <ListItemIcon>{<EditProfile/>}</ListItemIcon>
            <ListItemText primary={''} />
          </ListItem>
        </List>
        <Divider />
        <List>
        
           <ListItem button key={1}>
            <ListItemIcon>{<MyFriends/>}</ListItemIcon>
            <ListItemText primary={''} />
          </ListItem>
          <ListItem button key={2}>
            <ListItemIcon>{<FriendRequest/>}</ListItemIcon>
            <ListItemText primary={''} />
          </ListItem>
          <ListItem button key={3}>
            <ListItemIcon>{<InviteFriends/>}</ListItemIcon>
            <ListItemText primary={''} />
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button key={4}>
            <ListItemIcon>{<InboxIcon/>}</ListItemIcon>
          </ListItem>
          <ListItem button key={5}>
            <ListItemIcon>{<MailIcon/>}</ListItemIcon>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root} >
        <CssBaseline />

        <Hidden smUp implementation="css">
        {drawer}
        </Hidden>
        <Hidden xsDown implementation="css" className={classes.navPillsContainer}>
          
            

             <div style={{width:'100%'}}>
              <NavPills
                  color="success"
                  direction="rtl"
                  horizontal={{
                    tabsGrid: { xs: 1 },
                    contentGrid: { xs: 11},
                  }}
                  tabs={[
                    {
                      tabButton: "My Profile",
                      tabIcon: EditProfile,
                      tabContent: (
                        <main className={classes.content} style={{width:'100%',height:'auto', zIndex:0}}>
                         <UserProfile/>
                        </main>
                      )
                    },
                    {
                      tabButton: "My Friends",
                      tabIcon: MyFriends,
                      tabContent: (
                        <main className={classes.content} style={{height:'80vh'}}>
                        <Typography paragraph>
                           My Friends Screen
                        </Typography>
                      </main>
                      )
                    },
                    {
                      tabButton: "Friend Requests",
                      tabIcon: FriendRequest,
                      tabContent: (
                        <main className={classes.content} style={{height:'80vh'}}>
                        <Typography paragraph>
                          Friend Request Screen
                        </Typography>
                      </main>
                      )
                    },
                    {
                      tabButton: "Invite Friends",
                      tabIcon: InviteFriends,
                      tabContent: (
                        <main className={classes.content} style={{height:'80vh'}}>
                        <Typography paragraph>
                          Invite Friends Request
                        </Typography>
                      </main>
                      )
                    },
                    {
                      tabButton: "Financial Summary",
                      tabIcon: InboxIcon,
                      tabContent: (
                        <main className={classes.content} style={{height:'80vh'}}>
                        <Typography paragraph>
                           Financial Summary Screen
                        </Typography>
                      </main>
                      )
                    },
                    {
                      tabButton: "Manage Account Plan",
                      tabIcon: MailIcon,
                      tabContent: (
                        <main className={classes.content} style={{height:'80vh'}}>
                        <Typography paragraph>
                           Manage Account Plan
                        </Typography>
                      </main>
                      )
                    }
                  ]}
                />
             </div>
      
          </Hidden>
      </div>
    );
  }
}




export default withStyles(referyesStyles, { withTheme: true })(ReferYesComponent);