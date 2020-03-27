import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Home = props => {
  console.log("PROPS", props);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>This is Home Page</h1>
      </Container>
    </React.Fragment>
  );
};

export default Home;
