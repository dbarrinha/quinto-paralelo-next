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
import * as animationData from '../assets/lottie/office.json'

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
const dashboardRoutes = [];
const useStyles = makeStyles(styles);


export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Quinto//"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax responsive style={{ backgroundColor: '#fff' }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>A realização do seu sonho começa aqui.</h1>
              <h4>
                Studio criativo que anda em paralelo com a arquitetura e o design!
              </h4>
              <br />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Lottie options={defaultOptions}
                height={400}
                width={400}
                />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <ProductSection />
        <TeamSection />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
