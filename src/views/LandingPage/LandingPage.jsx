// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer";
// core components
import Header from "components/Header/Header";
import React from "react";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="User Management"
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
