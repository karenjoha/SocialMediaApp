import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment, FaRegBookmark } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import BottomNav from '../../components/BottomNav/BottomNav';
import endpoints from "../../config";

// ID quemado (fijo)
const userId = "1";

const AdminProfile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  
  const navigate = useNavigate();
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleBackClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.get(endpoints.posts);
        const usersResponse = await axios.get(endpoints.users);

        // Filtrar el usuario por userId
        const foundUser = usersResponse.data.find(user => user.id === userId);

        // Filtrar los posts que pertenecen al userId
        const userPosts = postsResponse.data.filter(post => post.userId === userId);

        setUser(foundUser);
        setPosts(userPosts);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>No se encontró el usuario.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <button
          onClick={handleBackClick}
          className="text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Coverphoto */}
      <div className="relative w-full sm:h-48 md:h-64 bg-gray-300">
        <img
          src={user.image}
          alt="Cover"
          className="object-cover w-full h-96	"
        />
      </div>
      <div className="relative bg-rose-100 p-4 shadow-md">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex bg-white w-4/5 justify-between items-center mb-4 rounded-2xl	">
          <img
            src="./public/images/png/image2.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <h2 className="text-xl font-bold">{user.name}</h2>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <IoMdHeartEmpty size={20}/>
              <span>{user.likes}</span>
            </div>
            <div className="flex flex-col items-center">
              <FaRegComment size={20} />
              {/* <span>{posts.length > 0 ? posts[0].comments : 0}</span> */}
              <span>54 K</span>
            </div>
            <div className="flex flex-col items-center">
              <FiSend size={20} />
              <span>2 K</span>
              {/* <span>{posts.length > 0 ? posts[0].send : 0}</span> */}
            </div>
          </div>
        </div>
        <div className="pt-5 text-justify  my-5">
          <p>{user.description}</p>
        </div>
      </div>

      <div className="items-center justify-between bg-red m-4 pb-10 rounded flex">
        <input type="text" placeholder="Write comment as username...." />
        <button className="">
          <img src="submit.svg" alt="" />
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default AdminProfile;
