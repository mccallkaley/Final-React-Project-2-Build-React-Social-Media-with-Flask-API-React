import React, {useState, useEffect} from 'react';
import {Col, Row, Button} from 'react-bootstrap'
import PostCard from '../components/PostCard'
import { Redirect } from 'react-router-dom';
import axios from 'axios';


const MyPosts = (props) => {
    const [posts, setPosts] = useState([]);
    const [refreshPosts, setRefreshPosts] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/user/${props.user}/posts/${props.post}`)
        .then(response=>{
            console.log(response.data);
            setPosts(response.data.posts);
        })
        
    }, [refreshPosts]);

    const styles = {
        pageStyles:{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCn46iMH-wzUezHLevqCpSp3GJ_m34PB9ROA&usqp=CAU')",
            backgroundColor: "pink",
            padding:"20px",
            minHeight:"94vh",
            color:"azure"
        },
        headerStyles:{
            color:"#eb144c",
            
            
        },
        error:{
            color:"red"
        },
        h1:{
            color:"pink",
            justifyContent: "center",
            alignItems: 'center'
        },
    }

    return (
        <div style={styles.pageStyles}>
            YOUR POSTS (need to finish):
            {/* {redirect ? <Redirect to={{pathname:"/editpost", props:{post:postToEdit}}}/> : */}

                <Row>

                    <Col md={12}>
                        {/* post section */}
                        <Row>
                        <div
                className="w3-container w3-blue"
                style={{ padding: "2rem", marginTop: "2rem" }}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer consectetur libero nibh, non sodales urna malesuada
                    nec. Sed tortor eros, blandit eget fringilla at, gravida a
                    nibh. Etiam dui nulla, aliquam vitae purus a, auctor
                    malesuada arcu. Vestibulum venenatis orci nisl, sed
                    elementum leo tincidunt eget. Nullam convallis nisi in.
                </p>
            </div>

            <div
                className="w3-container w3-blue"
                style={{ padding: "2rem", marginTop: "2rem" }}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer consectetur libero nibh, non sodales urna malesuada
                    nec. Sed tortor eros, blandit eget fringilla at, gravida a
                    nibh. Etiam dui nulla, aliquam vitae purus a, auctor
                    malesuada arcu. Vestibulum venenatis orci nisl, sed
                    elementum leo tincidunt eget. Nullam convallis nisi in.
                </p>
            </div> 
                        </Row>

                    </Col>

                </Row>
            {/* } */}
        </div>
    );
}

export default MyPosts;




