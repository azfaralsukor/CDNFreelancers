// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import MaterialTable from 'components/MaterialTable/MaterialTable';
import React from "react";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Complete Developer Network Freelancers"
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <MaterialTable />
      </div>
      <Footer />
    </div>
  );
}
