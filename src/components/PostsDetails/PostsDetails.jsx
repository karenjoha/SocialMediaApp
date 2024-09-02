import React, { useState, useEffect } from "react";
import axios from 'axios';
import endpoints from '../../config'; 
import Posts from "../Posts/Posts";
import { Link } from 'react-router-dom';


const PostsDetails = () => {
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = endpoints.users; 
    axios.get(apiUrl)
      .then(response => {
        console.log('Data received:', response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-2">
      <section className="space-y-2">
        {users.map((user) => (
          <article key={user.image} className=" bg-white p-4 rounded shadow">
            <header className="flex items-center space-x-4 mb-4">
             
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <Link to="/profile" className="text-xs" >
            {user.name}
          </Link>
            </header>
            <Posts/>
            <div className="mb-4">
              {/* <img
                src={post.image}
                alt="Post content"
                className="w-full rounded object-cover"
              /> */}
            </div>
            {/* <p>{post.caption}</p> */}
          </article>
        ))}
      </section>
      
    </div>
  );
};

export default PostsDetails;
