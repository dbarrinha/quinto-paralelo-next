import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";
import Lottie from 'react-lottie';

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
const dashboardRoutes = [];
const useStyles = makeStyles(styles);


const animationBook = require('assets/lottie/worker.json')
export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationBook,
    speed: 500,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const cores = {
    primaryColor: '#cd9341',
    primaryColorOpacity: '#e8bd80',
  }

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Quinto//"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax responsive style={{ backgroundColor: '#fff', height: '100vh' }}>

        <div style={{
          width: '70%',
          height: '50%',
          backgroundColor: cores.primaryColor,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
          borderBottomRightRadius: '100%'
        }} />
        <div style={{
          width: '75%',
          height: '60%',
          backgroundColor: cores.primaryColorOpacity,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 9,
          borderBottomRightRadius: '100%'
        }} />
        <div style={{
          width: '55%',
          height: '30%',
          backgroundColor: cores.primaryColor,
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 10,
          borderTopLeftRadius: '100%'
        }} />
        <div style={{
          width: '65%',
          height: '35%',
          backgroundColor: cores.primaryColorOpacity,
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 9,
          borderTopLeftRadius: '100%'
        }} />

        <div style={{ marginTop: 200 }} className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>A realização do seu sonho começa aqui.</h1>
              <h3>
                <strong>Nós Somos Quinto Paralelo!</strong>
              </h3>
              <h4>
              <strong>Studio criativo que anda em paralelo com a arquitetura e o design!</strong>
              </h4>
              <br />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Lottie style={{ zIndex: 10000, pointerEvents: 'none' }} options={defaultOptions}
                height={400}
                width={400}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>

      <div className={classes.container}>
        <ProductSection />
        <TeamSection />
        <WorkSection />
      </div>
      </div>
      <Footer />
    </div>
  );
}
