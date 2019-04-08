import { container, title } from '../../theme/assets/jss/material-kit-react.jsx';

const homePageStyle = theme => ({
    root: {
      flexGrow: 1,
      height: '80vh'
    },
    container: {
      zIndex: "12",
      color: "#FFFFFF",
      ...container,
    },
    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      color: "#FFFFFF",
      textDecoration: "none"
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0"
    },
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    paper: {
      display: "flex",
      border: "0",
      borderRadius: "3px",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: "#555",
      width: "100%",
      backgroundColor: "#fff",
      boxShadow:
        "0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0)",
      transition: "all 150ms ease 0s",
      alignItems: "center",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      position: "relative",
      zIndex: "unset"
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    homeLoginRegistrationSection: {
      maxWidth: "360px",
      margin: "0 auto",
      padding: "0px"
    }
  });

  

export default homePageStyle;