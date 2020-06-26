import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import { Provider } from "react-redux";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { store } from './state';
import './App.css';
import Detail from './containers/Detail';
import Main from './containers/Main';
export default () => {
  return <Provider store={store}>
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Switch>
            <Route path="/:username">
              <Detail />
            </Route>
          </Switch>
        </Switch>
        <Footer />
      </Layout>
    </Router>
  </Provider>
}