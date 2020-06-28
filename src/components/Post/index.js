import React from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
const { Meta } = Card;

export default ({ image, username, profileImage, description, title }) => {
  return (
    <Card
      hoverable
      style={{ marginTop: 12 }}
      cover={<img alt={username} src={image} />}
    >
      <Link
        style={{ margin: 5, fontWeight: 500, fontSize: 24 }}
        to={`profile/${username}`}
      >
        <Avatar
          style={{ marginTop: 8, marginRight: 8, marginBottom: 8 }}
          src={profileImage}
        />
        {username}
      </Link>
      <br />
      <Meta title={title} description={description} />
    </Card>
  );
};
