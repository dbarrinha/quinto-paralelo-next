import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Timelapse";
import VerifiedUser from "@material-ui/icons/BusinessOutlined";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import team1 from "assets/img/grupo.jpeg";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
      
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Quem Somos</h2>
          <h5 className={classes.description}>
          O Quinto Paralelo surgiu através de um trabalho acadêmico, 
          mas agora é nosso filho profissional. Nós o batizamos assim, 
          porque queríamos trazer uma referência geográfica ao mesmo. 
          Acontece que, a capital Teresina, está localizada no quinto 
          paralelo do globo terrestre – daí o nome. Também somos as duas 
          retas paralelas, uma ao lado da outra. Somos dois, mas ao mesmo 
          tempo somos um. Aqui há dois jovens que buscam com a arquitetura e o 
          design mudar vidas daqueles que acreditam que estruturas, sistemas e 
          cores podem oferecer o que buscam.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Pontuais"
              description="Sempre prezamos pela qualidade e rapidez na produção dos projetos."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Característica 2"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Característica 3"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
