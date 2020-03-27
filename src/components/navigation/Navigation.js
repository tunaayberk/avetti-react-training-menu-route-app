import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  title: {
    flexGrow: 1
  }
}));

const Navigation = ({ dynamic }) => {
  const classes = useStyles();
  const [menuState, setMenuState] = useState([
    { url: "/page/1", name: "Page 1" },
    { url: "/page/2", name: "Page 2" },
    { url: "/page/3", name: "Page 3" }
  ]);

  useEffect(() => {
    fetch(
      "https://demob2b2cpreview.avetti.io/preview/uservices/1.0.2/menu/20180521148/category/Shop/lang/en/"
    )
      .then(res => res.json())
      .then(json => {
        let tempArr = json.childs.map(child => {
          let name = child.name.replace("&amp;", "&");
          let url = child.URL.replace("shop", "");
          let image = child.image;
          return { url, name, image };
        });
        return tempArr;
      })
      .then(result => {
        dynamic(result);
        setMenuState(result);
      });
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link style={{ color: "white" }} to="/">
              Avetti React Training - RRD{" "}
            </Link>
          </Typography>

          {menuState.map((menu, index) => (
            <Button key={index} color="inherit">
              <Link style={{ color: "white" }} to={menu.url}>
                {menu.name}
              </Link>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
