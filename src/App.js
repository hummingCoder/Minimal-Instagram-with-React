import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { store } from "./state";
import "./App.css";
import Main from "./containers/Main";
import Landing from "./components/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout style={{ minHeight: window.innerHeight }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <ProtectedRoute exact path="/home" component={Main} />
            <Route exact path="/unauthorized" component={Unauthorized} />
          </Switch>
          <Footer />
        </Layout>
      </Router>
    </Provider>
  );
};
