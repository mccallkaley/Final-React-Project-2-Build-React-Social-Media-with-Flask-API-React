import React, { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";

import Axios from "axios";

class PostCard extends React.Component {
    state = {posts: []}

    componentDidMount() {
        Axios.get("/posts").then(res => {
            this.setState({posts: res.data})
        });
    }

    render() {
        return (
            <>
                <div
                    className="w3-container w3-jumbo"
                    style={{ margin: "3rem", paddingLeft: "1rem" }}>
                    posts
                </div>
                <div className="w3-container">
                    {this.state.posts.length === 0 ? <p className="w3-xlarge w3-opacity" style={{marginLeft: "2rem"}}>No posts! Create one</p> : this.state.posts.map((post, index) => {
                        return (
                            <Card.Body>
                                id={post.id}
                                body={post.body}
                                key={index}
                                </Card.Body>
                        );
                    })}
                </div>
         </>   
        );
    }
}

export default PostCard;
