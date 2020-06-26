import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { feedPostsSelector } from '../../state/posts/selectors';
import { fetchFeedPostsActions } from '../../state/posts/actions';
import { Row, Col, Card, Layout, Skeleton, Avatar } from "antd";

import Post from '../../components/Post';
const { Meta } = Card;
const { Content } = Layout;

export default () => {

    const feedPosts = useSelector(feedPostsSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFeedPostsActions())
    }, [])
    return <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Row>
            <Col span={7} />
            <Col span={10}>
                <div>
                    {
                        feedPosts ?
                            feedPosts.map((feed, i) => {
                                return <Post key={i}
                                    {...feed}
                                    {...feed.meta}
                                />
                            }) :
                            <Card
                                style={{ marginTop: 12 }}
                            >
                                <Skeleton avatar active>
                                    <Meta
                                        avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        }
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Skeleton>
                            </Card>
                    }
                </div>
            </Col>
            <Col span={7} />
        </Row>
    </Content >


}
