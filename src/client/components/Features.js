import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import PropTypes from "prop-types";
import homePageStyle from '../assets/jss/homePage.jsx'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: '80vh',
  },
});

class Features extends React.Component {
  render() {
    const { classes } = this.props;
    return (
    
  <div className={classes.root} elevation={1}>
<Paper className={classes.paper}>
<Grid container spacing={16}>
<Typography variant="h5" component="h3">
            Features 
          </Typography>
          <Typography component="p">
            Features Contents
          </Typography>
</Grid>
</Paper>

</div>
   
    );
  }
}

Features.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(homePageStyle)(Features);
