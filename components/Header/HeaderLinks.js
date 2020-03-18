/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const scrollTo = (id) => {
    let section = document.querySelector(id)

    if (id == "#header") {
      $('html, body').animate({
        scrollTop: 0
      }, 200, function () {
        // window.location.hash = hash;
      });
    } else {
      $('html, body').animate({
        scrollTop: $(section).offset().top
      }, 200, function () {
        // window.location.hash = hash;
      });
    }
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => scrollTo('#about')}
            color="transparent"
            className={classes.navLink}
          >
            Sobre
        </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => scrollTo('#team')}
            color="transparent"
            className={classes.navLink}
          >
            Time
        </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => scrollTo('#contato')}
            color="transparent"
            className={classes.navLink}
          >
            Contato
        </Button>
        </ListItem>
        <Tooltip
          id="instagram-tooltip"
          title="Siga-nos no Instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/quintoparalelo"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
