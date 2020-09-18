import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './App.css'


const UserList = () => {
    //state declaration
    const [listOfUSer ,setListOfUSer ]=useState([]);
    //use effect and axios to fetch data
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setListOfUSer(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (<div className='centered'> 
                 <div className="cards">  
                  {listOfUSer.map(user=>(
                    <UserCard key={user.id} user={user}/>))}
                 </div>  
            </div>  
           
    );
};



export default UserList;