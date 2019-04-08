import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Extension from "@material-ui/icons/Extension"
import ThumbsUp from "@material-ui/icons/ThumbUp"
// core components
import GridContainer from "../../../theme/components/Grid/GridContainer.jsx";
import GridItem from "../../../theme/components/Grid/GridItem.jsx";
import InfoArea from "../../../theme/components/InfoArea/InfoArea.jsx";

import productStyle from "../../../theme/assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import Button from '../../../theme/components/CustomButtons/Button.jsx'

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Employee referral program software.</h2>
            <section>
            <h5 className={classes.description} style={{textAlign:'left'}}>
            Create, manage, and optimize your mobile and web-based refer-a-friend programs all in one platform.
            </h5>
            </section>
           <article>
           <h5 className={classes.description} style={{textAlign:'left'}}>
           Open up the pipeline to harness the power of crowdsourcing more customers, faster
           Accelerate new leads acquisition without the need for development using our channel special offer programs.
           </h5>
           </article>

           <article>
           <h5 className={classes.description} style={{textAlign:'left'}}>
           Smart Contracts powered by Cisco Blockchain.
           </h5>
           </article>
          </GridItem>
        </GridContainer>
        <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Post a job! How it Works</h2>

            <section>
           
            <h5 className={classes.description} style={{textAlign:'center'}}>
                Sign Up Now or Contact Us for More details at 1-888-659-0005
            </h5>
         
            </section>

          </GridItem>
        </GridContainer>
        </div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="1. Post a job"
                description="Define your role requirements using our job campaign manager in which you set up the terms and submit. Our team quickly reviews and optimizes for best results."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="2. Crowdsourced Candidates"
                description="Once posted on the ReferYes Network our domain experts sift through resumes, recommend referrals and handpick the most qualified candidates for your requirements."
                icon={Extension}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="3. Lead Shortlist"
                description="You receive a shortlist of the most qualified candidates who are ready to take the next step."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="4. Hire"
                description="Based on your terms and our guarantee period we make the referral payments."
                icon={ThumbsUp}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
        <div>
            <GridContainer justify="center">
                <GridItem>
                <section>
                <section> <Button color="success">Sign up</Button></section>
                </section>       
                </GridItem>
            </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
