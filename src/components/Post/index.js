import React from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default ({ image, username, profileImage, description, title }) => {
  return (
    <Card
      hoverable
      style={{ marginTop: 12 }}
      cover={<img alt={username} src={image} />}
    >
      <Avatar style={{ marginBottom: 5 }} src={profileImage} />
      <Link style={{ margin: 5 }} to={`profile/${username}`}>
        {username}
      </Link>
      <br />
      <Meta title={title} description={description} />
    </Card>
  );
};
