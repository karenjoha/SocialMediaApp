import React, { useState, useEffect } from "react";
import axios from "axios";
import endpoints from "../../config"; // Asegúrate de tener la URL correcta en tu archivo config
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.get(endpoints.posts);
        const usersResponse = await axios.get(endpoints.users);

        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
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

  // Find user by ID helper function
  const findUserById = (id) => users.find((user) => user.id === id);

  return (
    <div className="container mx-auto p-4">
      <section className="space-y-4">
        {posts.map((post) => {
          const user = findUserById(post.userId);

          return (
            <article key={post.id} className="bg-white p-4 rounded shadow">
              {/* <header className="flex items-center space-x-4 mb-4">
                {user && (
                  <>
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-12 h-12 rounded-full object-cover bg-black"
                    />
                    <h2 className="text-xl">{user.username}</h2>
                  </>
                )}
              </header> */}
              <div className="mb-4">
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full rounded object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button aria-label="Me gusta" className="flex items-center">
                    <IoMdHeartEmpty className="text-xl" />
                    <span className="ml-2 text-sm">{post.likes}</span>
                  </button>
                  <button aria-label="Comentar" className="flex items-center">
                    <FaRegComment className="text-xl" />
                    <span className="ml-2 text-sm">{post.comments}</span>
                  </button>
                  <button aria-label="Reenviar" className="flex items-center">
                    <FiSend className="text-xl" />
                    <span className="ml-2 text-sm">{post.send}</span>
                  </button>
                </div>
                <button aria-label="Marcar" className="flex items-center">
                  <FaRegBookmark className="text-xl" />
                </button>
              </div>
              <p>{post.caption}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Posts;
