import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from '../src/components/Home';
import SignUp from './components/Signup';
import Dashboard from '../src/components/Dashboard';
import Checkout from '../src/components/CheckOut';
import { ThemeProvider, CssBaseline} from '@material-ui/core';
import theme from './theme';
import Layout from './components/Layout/Layouts'
import Paystub from './components/Dashboard/Paystub'



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Layout>
            <Dashboard />
            </Layout>

          </Route>
          <Route path="/paystub">
            <Layout>
            <Paystub />
            </Layout>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

        </Switch>
    </Router>
    </ThemeProvider>
  );
}
