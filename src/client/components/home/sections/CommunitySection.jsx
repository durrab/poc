import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Extension from "@material-ui/icons/Extension"
import ThumbsUp from "@material-ui/icons/ThumbUp"
import Button from '../../../theme/components/CustomButtons/Button.jsx'
// core components
import GridContainer from "../../../theme/components/Grid/GridContainer.jsx";
import GridItem from "../../../theme/components/Grid/GridItem.jsx";
import InfoArea from "../../../theme/components/InfoArea/InfoArea.jsx";

import productStyle from "../../../theme/assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class CommunitySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Recruiter Community</h2>
            <section>
            <h5 className={classes.description} style={{textAlign:'left'}}>
                Join our community as a Recruiter and get paid immediately for each qualified referral
            </h5>
            </section>
           <article>
           <h5 className={classes.description} style={{textAlign:'left'}}>
            New to Recruiting?  Join and we will get you started in a community learning program where you can leverage sourcing tools, the community of recruiters and knowledge base.
           </h5>
           </article>
           <section> <Button color="success">Sign up</Button></section>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(CommunitySection);
