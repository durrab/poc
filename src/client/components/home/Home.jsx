import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import homePageStyle from '../../assets/jss/homePage.jsx'
import classNames from "classnames";

import GridContainer from '../../theme/components/Grid/GridContainer.jsx'
import GridItem from '../../theme/components/Grid/GridItem.jsx'
import Button from '../../theme/components/CustomButtons/Button.jsx'
import Parallax from '../../theme/components/Parallax/Parallax.jsx'
// Sections for this page
import ProductSection from './sections/ProductSection.jsx'
//import TeamSection from "../../theme/views/LandingPage/Sections/TeamSection.jsx";
//import WorkSection from "../../theme/views/LandingPage/Sections/WorkSection.jsx";
import InfoArea from "../../theme/components/InfoArea/InfoArea.jsx";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import CommunitySection from './sections/CommunitySection.jsx'

class Home extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
    <div>
      
      <Parallax>
      <div className={classes.container} >
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea className={classes.title}
                title="Find and attract top prospects on search engines and social networks"
                description="The fast and easy way to find resumes and candidates profiles through advanced search strings developed by search experts"
                icon={Chat}
                iconColor="info"
                vertical
              />
              <div className={classes.homeLoginRegistrationSection}>
              <Button color="success">Login</Button>
              <Button color="success">Sign up</Button>
              </div>
              
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <div className={classes.homeLoginRegistrationSection}>
          <img src='/assets/images/refer_banner.gif'/>
          </div>
              
            </GridItem>
        </GridContainer>
      </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>

          <ProductSection />
            <CommunitySection />
            
          </div>
        </div>
     
    </div>
  
      
   
   
    );
  }
}

export default withStyles(homePageStyle)(Home);
