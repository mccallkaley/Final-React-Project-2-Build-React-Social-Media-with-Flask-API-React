import React, { useState, useEffect } from 'react';
import {Formik, Form, Field} from 'formik';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import axios from 'axios';



const FormSchema = Yup.object().shape({
    "body": Yup.string(300).required("Your post cannot be empty")
})

const initialValues = {
    body:''
}

const Home = (props) => {
    //const [error, setError] = useState('');
    const [posts, setPosts] = useState([]);
    const [refreshPosts, setRefreshPosts] = useState('');
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/posts/${props.user}`)
        .then(response=>{
            console.log(response.data);
            setPosts(response.data.posts);
        })
        
    }, [refreshPosts]);

    const handleSubmit=({body})=>{
        console.log(body);
        axios.post(`http://127.0.0.1:5000/posts?body=${body}&user_id=${props.user.id}`)
        .then(response=>{
            console.log(response.data);
            setRefreshPosts('refresh');
            alert(`Thanks for posting !!`)
        })
    }

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
        <h1>Share your latest beauty tips and tricks!</h1>
        <br/>Makeup - Skincare - Hair - Procedures 
        <br/>
        <br/>
            <Formik initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={
                    (values)=>{
                        handleSubmit(values);
                    }
                }>
                {
                    ({errors, touched})=>(
                        <Form>
                            <Field name="body" component="textarea" rows="4" className="form-control" />
                            {errors.body && touched.body ? (<div style={styles.error}>{errors.body}</div>):null}

                            <br/>
                            <Button type="submit" className="btn btn-primary">Post</Button>

                        </Form>
                    )
                }
            </Formik>
            <br/>
            See what other beauty gurus having been saying:
            <br/>
            <br/>

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

            {posts.length>0 ?
            <ul style={{"listStyleType":"none"}}>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <img src={`https://avatars.dicebear.com/api/micah/${post.author_icon}.svg`} style={{"maxHeight":"3rem"}}/>
                        <b>{post.author}</b>
                        <br/>
                        {post.body}
                        <br/>
                        <br/>
                    </li>
                    ))}
            </ul>
            :''}
        </div>
    );
}

export default Home;







/*import React from "react";

function Home() {
    return (
        <React.Fragment>
            <div
                className="w3-container w3-center w3-blue"
                style={{ padding: "2rem" }}>
                <h1 className="w3-jumbo">Quickr - Quick Twitter</h1>
                <button
                    className="w3-button w3-pink"
                    style={{ marginRight: "1rem" }}>
                    Login
                </button>
                <button className="w3-button w3-pink">Register</button>
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
        </React.Fragment>
    );
}

export default Home; */





