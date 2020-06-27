import { Link } from "react-router-dom";
import React from "react";
import { Layout, Menu, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { authenticationSelector } from "../../state/users/selectors";
import { setLoginStatusAction } from "../../state/users/actions";
import { Redirect, useHistory } from "react-router-dom";

import "./index.css";

const { Header } = Layout;

export default () => {
  const isLoggedIn = useSelector(authenticationSelector);
  const dispatch = useDispatch();
  let history = useHistory();

  const logout = () => {
    dispatch(setLoginStatusAction(false));
    history.push("/");
  };

  return (
    <Header
      theme="dark"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/home">Home</Link>
        </Menu.Item>
        {isLoggedIn && (
          <Menu.Item key="2" style={{ float: "right" }}>
            {" "}
            <Button type="primary" danger onClick={logout}>
              Log Out
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};
