import React from "react";
import { Row, Col, Card, Layout, Button, Input, Form, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { authenticationSelector } from "../../state/users/selectors";
import { handleLoginAction } from "../../state/users/actions";
import { Redirect } from "react-router-dom";

const { Content } = Layout;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Landing = () => {
  const isLoggedIn = useSelector(authenticationSelector);
  const dispatch = useDispatch();

  if (isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/home",
        }}
      />
    );
  }
  const onFinish = (loggedUser) => {
    dispatch(
      handleLoginAction(
        loggedUser,
        () => {},
        (message) => {
          Modal.error({
            title: "Info",
            content: message,
          });
        }
      )
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Content
      className="site-layout-background"
      style={{ padding: "0 50px", height: "100%", marginTop: 80 }}
    >
      <Row>
        <Col span={7} />
        <Col span={10}>
          <div className="site-card-border-less-wrapper">
            <Card
              title="MINIMAL INSTAGRAM"
              bordered={false}
              style={{ backgroundColor: "#FFDCBA", border: 0, margin: 15 }}
            >
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{ background: "#57752E", borderColor: "white" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Col>
        <Col span={7} />
      </Row>
    </Content>
  );
};

export default Landing;
