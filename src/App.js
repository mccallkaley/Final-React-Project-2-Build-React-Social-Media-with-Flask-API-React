//import logo from './logo.svg';
import React, { Component } from "react";
import { Switch, Route,} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Register from "./views/Register";
import MyPosts from "./views/MyPosts";
import Users from "./views/Users";
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from "./components/NavBar";
//import ProductCard from "./components/ProductCard";
import PostCard from "./components/PostCard";
import "bootstrap/dist/css/bootstrap.min.css";
//import { getIsAdmin } from "./api/apiAdmin";
//import AdminRoute from "./components/AdminRoute";
//import CreateCats from "./views/CreateCats";
//import EditCats from "./views/EditCats";
//import CreateItems from "./views/CreateItems";
//import EditItems from "./views/EditItems";
//import axios from 'axios';
//import Cart from "./views/Cart";


import { Container } from 'react-bootstrap'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      token: "",
      isAdmin: false,
      
    };
  }


  static getDerivedStateFromProps = (props, state) => {
    return { 
      token: localStorage.getItem("token")
     
    };
  };
  
  componentDidMount() {
    if (this.state.token) {
      //this.setAdmin();
    }}
 
 /*
  if (typeof window !== "undefined") {
      window.addEventListener("storage",(e)=>{
        this.setState({cart:JSON.parse(localStorage.get_all_posts("posts"))})
      })
    }
    }
 */

  setUser = (user) => {
    this.setState({ user }, () => console.log("User is", this.state.user));
  };
 


  setToken = (token) => {
    localStorage.setItem("token", token);
    this.setState({ token }, this.setUser);
    
  };
  
/*  getIsAdmin=()=>{
    const isAdmin=async ()=>{
      let res=await getIsAdmin(localStorage.getItem('token'))
      if (res === 500 || res ===400){res=false}
      console.log("isAdmin",res)
      this.setState({isAdmin:res})
    }
    isAdmin()
  }*/

  doLogout=()=>{
    console.log("Logged out")
    localStorage.clear();
    this.setToken('');
    this.setState({isAdmin:false, cart:{}});

  }


 

  render() {
    return (
      <div>
        <NavBar token={this.state.token} user={this.state.user}   />
        
        <Container>
          <Switch> 
            <Route exact path ="/" token={this.state.token} 
                render={()=><Home/>} />
            
            <Route exact path ="/users" token={this.state.token} 
                render={(props)=><Users {...props}/>} />
            <Route exact path = "/myposts"
             render={()=><MyPosts setToken={this.setToken}  />} />
            
            <Route exact path ="/login" 
                render={()=><Login setToken={this.setToken}  setUser={this.setUser}/>} />
            <Route exact path = "/register"
             render={()=><Register setToken={this.setToken}  />} />
            <Route exact path ="/logout"
                token={this.state.token}
                render={()=><Logout doLogout={this.doLogout}/>}/>
          </Switch>
        </Container>
      </div>
    );
  }
}