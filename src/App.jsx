import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Posts from './Posts';

const User=({users})=>{
  const params=useParams();
  const id=params.id*1;
  const user=users.find(user=>user.id===id);
  return(
    <>
      <h1>User Details for {user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
    </>
  )
}

const Post=({posts})=>{
  const params=useParams();
  const id=params.id*1;
  const post=posts.find(post=>post.id===id);
  console.log(post);
  return(
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

function App() {
  const [users, setUsers]=useState([]);
  const [posts, setPosts]=useState([]);
  const location=useLocation();
  const {pathname}=location; 

  useEffect(()=> {
    const fetchUsers=async ()=>{
      const response=await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const data=response.data;
      setUsers(data);
    }
    fetchUsers();
  },[]);

useEffect(()=>{
  const fetchPosts=async ()=>{
    const response=await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
    const data=response.data;
    setPosts(data);
  }
  fetchPosts();
},[]);

  return (
    <>
      <nav>
        <Link to='/' className={pathname==='/'?'selected':''}>Home</Link>
        <Link to='/users' className={pathname==='/users'?'selected':''}>Users ({users.length})</Link>
        <Link to='/posts' className={pathname==='/posts'?'selected':''}>Posts ({posts.length})</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users users={users}/>}/>
        <Route path='/posts' element={<Posts posts={posts}/>}/>
        <Route path='/users/:id' element={<User users={users}/>}/>
        <Route path='posts/:id' element={<Post posts={posts}/>}/>
      </Routes>
    </>
  )
}

export default App
