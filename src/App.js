import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// Containers (Views)
import { Forecast } from "./containers";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/forecast" component={Forecast} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
