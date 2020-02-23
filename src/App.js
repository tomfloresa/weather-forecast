import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// Containers (Views)
import { Forecast, WeatherDetail } from "./containers";

// UI Components
import { Loader } from "./components";

// Reducers
import combineReducers from "./redux/reducers/combineReducers";

class App extends React.Component {
  render() {
    const { loader } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/:dayName" component={WeatherDetail} />
            <Route path="/" component={Forecast} />
          </Switch>
        </Router>
        <Loader deployed={loader.deployed} />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  const { loader } = state;

  return { loader };
};

export default connect(mapStateToProps, null)(App);
