import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/ana.png";
import team2 from "assets/img/marcos.png";
import team3 from "assets/img/zeus.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Nosso Time</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ana Letícia
                <br />
                <small className={classes.smallTitle}>Arquiteta/Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Sou Linda e inteligênte, diferente do meu sócio, entre meus hobbys estão, gastar dinheiro, dormir e projetar.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>

                <Button
                  onClick={() => window.open("https://www.instagram.com/anaaleticiac/", '_blank')}
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>

              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Marcos
                <br />
                <small className={classes.smallTitle}>Arquiteta/Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Sou Só feio que doi, mas é o rosto que nasci, não tem o que fazer.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  onClick={() => window.open("https://www.instagram.com/marcosfer__/", '_blank')}
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                ZEUS
                <br />
                <small className={classes.smallTitle}>Estagiário</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Sou um Cachorro do capiroto, não auieto meu cu.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  onClick={() => window.open("https://www.instagram.com/zeussamoieda/", '_blank')}
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
