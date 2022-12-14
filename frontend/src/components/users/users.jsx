import React,{useState,useEffect} from 'react'
import axios from 'axios';
import UserList from './UserList';

export function Users() {
  const [users,setUsers] = useState([])
  useEffect( () => {
    axios.get('/api/users')
    .then(res => {
      setUsers(res.data);
    })
    .catch(err => console.log(err))
  },[])
  return (
    <>
      <UserList
        users={users}
      />
    </>
  )
}


