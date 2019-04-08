import { container, title } from "../../../../theme/assets/jss/material-kit-react.jsx" 
import imagesStyle from "../../../../theme/assets/jss/material-kit-react/imagesStyles.jsx";
const UserProfilePageStyle = {
  container,
  profile: {
    textAlign: "left",
    paddingTop: 100,
    paddingLeft: 40,
    width: 200,
    "& img": {
      maxWidth: "130px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },

  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "transparent",
    position: "relative",
    zIndex: "3",
    marginLeft: "0px",
    marginRight: "0px",
    paddingLeft: 15
  },
  mainRaised: {
    borderRadius: "1px",
    
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  profileTop: {
    background: '#d7dbe2',
    color: '#FFFFFF',
    height:'140px',
    zIndex:3
  },
  profileCenterBar: {
    background: '#6fa7fc',
    color: '#FFFFFF',
    height:'52px',
    textAlign: 'right'
    
  },
  profileContent: {
    background: '#f4f6f9',
    height:'70vh'
  },
  profileContainer: {
     ...container,
     marginLeft: '0px',
     marginRight: '0px',
     paddingLeft: '80px',
     width: 'auto',
     borderRadius: '6'
  },
  ...imagesStyle,
  profileParallax: {
      height: '20px'
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
};

export default UserProfilePageStyle;
