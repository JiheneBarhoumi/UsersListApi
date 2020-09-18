import React from "react";
import {Bootstrap,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar, { Cache, ConfigProvider } from 'react-avatar';





const UserCard = ({user}) => {
  
  return (<Card  style={{ width: '18rem', marginBottom:'5%', marginLeft:'10%'}} className='card'>
       
       <ListGroup className="list-group-flush">
       <ListGroupItem>
        <Avatar name={user.name} className='avatar' />
        <Card.Title style={{paddingTop:7,textAlign:'center',color:'rgb(29, 205, 228)'}}> {user.name} </Card.Title>
       </ListGroupItem>
       </ListGroup>
  <ListGroup className="list-group-flush">
      <ListGroupItem className='bt'>
     <div> <img src="https://img.icons8.com/fluent/48/000000/email-open.png"/>  {user.email} </div>
     <div> <img src="https://img.icons8.com/cotton/64/000000/phone-bubble--v3.png"/> {user.phone} </div>
     <div> <img src="https://img.icons8.com/ultraviolet/64/000000/address.png"/> {user.address.city} </div>
      </ListGroupItem>
 </ListGroup>
 </Card>
  
    
      
  );
};

export default UserCard;

