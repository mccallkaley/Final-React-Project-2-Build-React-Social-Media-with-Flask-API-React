import React, {useState} from 'react';
// import {UserCall} from '../api/UserCall';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import {parseBool} from '../helpers';



const Users = (props) => {
    
    const getAllUsers = () => {
        axios.get(`http://127.0.0.1:5000/users/${props.user}`)
        .then(response=>{
            setUsers(response.data.users);
        });
    }
    const [users, setUsers] = useState(()=>getAllUsers());

    // const getIsFollowing = async (otherUserID) => {
    //     return await axios.get(`http://127.0.0.1:5000/isfollowing/${props.user}/${otherUserID}`)
    //     .then(response=>{
    //         // console.log(parseBool(response.data));
    //         return parseBool(response.data);
    //     })
    // }

    const handleFollow=async(id, userIndex, unfollow=false)=>{
        if (unfollow===false){
            await axios.put(`http://127.0.0.1:5000/follow/${props.user}/${id}`)
            .then((response)=>{
                if (response.data){
                    console.log(response.data);
                }
            })
        }
        else{
            await axios.put(`http://127.0.0.1:5000/unfollow/${props.user}/${id}`)
            .then((response)=>{
                if (response.data){
                console.log(response.data);
                }
            })
        }
        getAllUsers();
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
            {users ?
            <Table striped bordered hover>
                <tbody>
                    {users.map(
                        user => {
                            if (user.id!==parseInt(props.user)){
                                
                                return(
                                    <tr key={user.id}>
                                    <td style={{"width":"1vw"}}><p style={{"display":"flex", "justifyContent":"center"}}>{user.id}</p></td>
                                    <td style={{"width":"6vw"}}>
                                    <img src={`https://avatars.dicebear.com/api/micah/${user.icon}.svg`} style={{"maxHeight":"4vw"}}/>
                                    </td>
                                    <td style={{"width":"25vw"}}><p style={{"display":"flex", "justifyContent":"center"}}><b>{user.email}</b></p></td>
                                    <td style={{"width":"25vw"}}><p style={{"display":"flex", "justifyContent":"center"}}>{user.first_name} {user.last_name}</p></td>
                                    {user.is_following?
                                    <td style={{"width":"43vw"}}>
                                    <Button variant="danger" onClick={()=>handleFollow(user.id, users.indexOf(user), true)}>Unfollow</Button>
                                    </td>
                                    :
                                    <td style={{"width":"43vw"}}>
                                    <Button onClick={()=>handleFollow(user.id, users.indexOf(user))}>Follow</Button>
                                    </td>
                                    }
                                    </tr>
                                );
                            }
                        }
                    )}
                </tbody>
            </Table>

            :'No Users'}
        </div>
    );
}

export default Users;