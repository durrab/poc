import React from 'react';
import Alert from 'react';
// core components
import GridContainer from '../../../../theme/components/Grid/GridContainer.jsx';
import GridItem from '../../../../theme/components/Grid/GridItem.jsx';
import Parallax from '../../../../theme/components/Parallax/Parallax.jsx';
import classNames from 'classnames';
import UserProfilePageStyle from './UserProfileStyle.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';
import Share from '@material-ui/icons/Share';
import Button from '../../../../theme/components/CustomButtons/Button.jsx';

import List from '@material-ui/icons/List';
import Schedule from '@material-ui/icons/Schedule';
import Dashboard from '@material-ui/icons/Dashboard';

import NavPills from '../../../../theme/components/NavPills/NavPills.jsx';
import CustomTabs from '../../../../theme/components/CustomTabs/CustomTabs.jsx';

class UserProfile extends React.Component {
	componentDidMount = () => {};

	render = () => {
		const { classes, ...rest } = this.props;
		const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

		return (
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div className={classes.container}>
						<GridContainer className={classes.profileContainer} alignItems="center">
							<GridItem xs={12} md={12} className={classes.profileTop}>
								
                                <GridContainer justify="flex-start">
                                    <GridItem xs={3}>
                                    <div className={classes.profile}>
									    <img src="/assets/images/christian.jpg" alt="..." className={imageClasses} />
								    </div>
                                    </GridItem>
                                    <GridItem xs={3}>
                                      <div>
                                        <Typography component="h6">
                                            Durrab Jami Khan
                                        </Typography>
                                      </div>
                                    </GridItem>
                                </GridContainer>
							</GridItem>
							<GridItem xs={12} md={12} className={classes.profileCenterBar}>
								<GridContainer spacin={0} padding={0} justify="flex-end">
									<GridItem xs={10} style={{ paddingRight: 0, paddingLeft: 0 }}>
										<Button
											color="transparent"
											simple
											onClick={(event) => {
												alert('called');
											}}
										>
											<Share className={classes.icons} /> Share Profile
										</Button>
									</GridItem>
								</GridContainer>
							</GridItem>
							<GridItem xs={12} className={classes.profileContent}  style={{margin: '0px auto',
    padding: '0px',
    width: '100%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '1%'}}>
								<div >
									<CustomTabs
                                        headerColor="info"
                                        plainTabs={true}
                                        style={{ marginTop: 40, width:'100%'}}
										tabs={[
											{
												tabName: 'About',
												tabIcon: List,
												tabContent: <p className={classes.textCenter}>Sourcer contents</p>
											},
											{
												tabName: 'Settings',
												tabIcon: Dashboard,
												tabContent: <p className={classes.textCenter}>Setting...</p>
											},
											{
												tabName: 'Personal Info',
												tabIcon: Schedule,
												tabContent: <p className={classes.textCenter}>Personal Info with more details...........................................</p>
                                            },
                                            {
												tabName: 'Other Details',
												tabIcon: Schedule,
												tabContent: <p className={classes.textCenter}>Personal Info with more details...........................................</p>
											}
										]}
									/>
								</div>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		);
	};
}
export default withStyles(UserProfilePageStyle)(UserProfile);
