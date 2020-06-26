import React, { useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Layout, Avatar, Card, Skeleton, Typography } from "antd";
import { profileSelector } from '../../state/users/selectors';
import { userPostsSelector } from '../../state/posts/selectors';
import { fetchProfileAction, setProfileAction } from '../../state/users/actions';
import { fetchUserPostsAction, setUserPostsAction } from '../../state/posts/actions';
import Post from '../../components/Post';

const { Content } = Layout;
const { Meta } = Card;
const { Title, Text } = Typography;
export default () => {
    const person = useSelector(profileSelector);
    const userPosts = useSelector(userPostsSelector);
    const dispatch = useDispatch();
    let { username } = useParams();

    useEffect(() => {
        dispatch(fetchProfileAction(username));
        dispatch(fetchUserPostsAction(username));
        return () => {
            dispatch(setProfileAction(null));
            dispatch(setUserPostsAction(null));
        }
    }, [dispatch, username]);

    console.log(person)
    return person ?
        <Content className="site-layout-background" style={{ padding: '0 50px', marginTop: 120 }}>
            <Row>
                <Col span={7} />
                <Col span={10} >
                    <Row style={{ marginTop: 15 }}>
                        <Col span={8}><Avatar size={128} style={{ marginBottom: 5 }} src={person.profileImage} /></Col>
                        <Col span={16}>
                            <Title level={4}>{person.username}</Title>
                            <Text type="warning">{person.motto}</Text><br />
                            <Text><span style={{ fontWeight: 500 }}>Contact :</span> {person.email}</Text><br />

                        </Col>
                    </Row>
                </Col>
                <Col span={7} />
            </Row>
            <Row>
                <Col span={7} />
                <Col span={10} >
                    <Row>
                        <div>
                            {
                                userPosts ?
                                    userPosts.map((feed, i) => {
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
                    </Row>
                </Col>
                <Col span={7} />

            </Row>
        </Content > :
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