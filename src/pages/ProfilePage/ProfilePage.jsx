// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// function ProfilePage() {
//   const [isFollowing, setIsFollowing] = useState(false);

//   const handleFollowClick = () => {
//     setIsFollowing(!isFollowing);
//   };

//   const handleBackClick = () => {
//     Navigate("/home");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
//         <button
//           onClick={handleBackClick}
//           className="text-gray-600 hover:text-gray-900"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//         <button className="text-gray-600 hover:text-gray-900">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Coverphoto */}
//       <div className="relative w-full h-40 sm:h-48 md:h-64 bg-gray-300">
//         <img
//           src="./public/images/png/coverphoto.png"
//           alt="Cover"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Profileinfo*/}
//       <div className="relative bg-rose-200 p-4 shadow-md">
//         <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <img
//             src="./public/images/png/image2.png"
//             alt="Profile"
//             className="w-24 h-24 rounded-full border-4 border-white"
//           />
//         </div>
//         <div className="pt-5 text-center">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <p className="text-black font-bold">10.7 M</p>
//               <p className="text-black font-bold">Followers</p>
//             </div>
//             <div>
//               <p className="text-black font-bold">108.3 M</p>
//               <p className="text-black font-bold">Likes</p>
//             </div>
//           </div>
//           <div className="text-2xl font-semibold mb-2">Jennie Kim</div>
//           <p className="text-gray-800 mb-4">J. Hello Guys</p>
//           <p className="text-gray-800 mb-4">Follow me and like my post</p>
//           <div className="flex justify-between">
//             <button
//               onClick={handleFollowClick}
//               className={`py-2 px-4 rounded-lg ${
//                 isFollowing
//                   ? "bg-roseColor text-white"
//                   : "bg-roseColor text-white"
//               }`}
//             >
//               {isFollowing ? "Following" : "Follow"}
//             </button>
//             <button className="py-2 px-4 bg-roseColor text-white rounded-lg">
//               Messages
//             </button>
//           </div>
//         </div>
//       </div>

//       {/*menu */}
//       <div className="bg-white p-4 border-t border-gray-200 flex justify-between">
//         <div className="flex space-x-4 bg-white w-full justify-between">
//           <button className="text-black border-b-2 border-roseColor py-2">
//             Photos
//           </button>
//           <button className="text-black hover:text-black py-2">Videos</button>
//           <button className="text-black hover:text-black py-2">Album</button>
//           <button className="text-black hover:text-black py-2">Tag</button>
//         </div>
//       </div>

//       {/* Grid */}
      
//       <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white rounded-3xl">
//       <Link to="/postDetails">
//         <div className="bg-gray-300 h-64 rounded-2xl">
//           <img
//             src="../public/images/png/public1.png"
//             alt=""
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//         </Link>
//         <div className="bg-gray-300 h-64 rounded-2xl">
//           <img
//             src="../public/images/png/public2.png"
//             alt=""
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//         <div className="bg-gray-300 h-64 rounded-2xl">
//           <img
//             src="../public/images/png/public3.png"
//             alt=""
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//         <div className="bg-gray-300 h-64 rounded-2xl">
//           <img
//             src="../public/images/png/public4.png"
//             alt=""
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//         <div className="bg-gray-300 h-64 rounded-2xl">
//           <img
//             src="../public/images/png/public5.png"
//             alt=""
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//         <div className="bg-gray-300 h-64 rounded-2xl">
//           <img
//             src="../public/images/png/public6.png"
//             alt=""
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;


// segundo y el que funciona

import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

function ProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Jennie Kim",
    bio: "J. Hello Guys",
    additionalBio: "Follow me and like my post",
  });
  const [formData, setFormData] = useState({ ...profileData });

  const navigate = useNavigate();


  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleBackClick = () => {
    navigate("/home");
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setProfileData(formData);
      
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [activeSection, setActiveSection]= useState('Photos');
  const handleSectionChange=(section)=>{
    setActiveSection(section);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
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
        <button
          onClick={handleEditClick}
          className="text-gray-600 hover:text-gray-900"
        >
          <CiEdit/> 
        </button>
      </div>

      {/* foto de portada */}
      <div className="relative w-full h-40 sm:h-48 md:h-64 bg-gray-300">
        <img
          src="./public/images/png/coverphoto.png"
          alt="Cover"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Profileinfo */}
      <div className="relative bg-rose-200 p-4 shadow-md">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="./public/images/png/image2.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
        <div className="pt-5 text-center">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-black font-bold">10.7 M</p>
              <p className="text-black font-bold">Followers</p>
            </div>
            <div>
              <p className="text-black font-bold">108.3 M</p>
              <p className="text-black font-bold">Likes</p>
            </div>
          </div>
          <div className="text-2xl font-semibold mb-2">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-gray-400 outline-none"
              />
            ) : (
              profileData.name
            )}
          </div>
          <p className="text-gray-800 mb-4">
            {isEditing ? (
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-gray-400 outline-none w-full"
              />
            ) : (
              profileData.bio
            )}
          </p>
          <p className="text-gray-800 mb-4">
            {isEditing ? (
              <textarea
                name="additionalBio"
                value={formData.additionalBio}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-gray-400 outline-none w-full"
              />
            ) : (
              profileData.additionalBio
            )}
          </p>
          <div className="flex justify-between">
            <button
              onClick={handleFollowClick}
              className={`py-2 px-4 rounded-lg ${
                isFollowing ? "bg-roseColor text-white" : "bg-roseColor text-white"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className="py-2 px-4 bg-roseColor text-white rounded-lg">
              Messages
            </button>
          </div>
        </div>
      </div>

      {/* Menu */}
      
      <div className="bg-white p-4 border-t border-gray-200 flex justify-between">
        <div className="flex space-x-4 bg-white w-full justify-between">
          <button className="text-black border-b-2 border-roseColor py-2">
            Photos
          </button>
          <button className="text-black hover:text-black py-2">Videos</button>
          <button className="text-black hover:text-black py-2">Album</button>
          <button className="text-black hover:text-black py-2">Tag</button>
        </div>
      </div>

      {/* Grid */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white rounded-3xl">
        <Link to="/postDetails">
          <div className="bg-gray-300 h-64 rounded-2xl">
            <img
              src="../public/images/png/public1.png"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </Link>
        <div className="bg-gray-300 h-64 rounded-2xl">
          <img
            src="../public/images/png/public2.png"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="bg-gray-300 h-64 rounded-2xl">
          <img
            src="../public/images/png/public3.png"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="bg-gray-300 h-64 rounded-2xl">
          <img
            src="../public/images/png/public4.png"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="bg-gray-300 h-64 rounded-2xl">
          <img
            src="../public/images/png/public5.png"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="bg-gray-300 h-64 rounded-2xl">
          <img
            src="../public/images/png/public6.png"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}


export default ProfilePage;


