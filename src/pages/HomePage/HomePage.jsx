import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import Posts from '../../components/Posts/Posts';
import PostsDetails from '../../components/PostsDetails/PostsDetails';
import BottomNav from '../../components/BottomNav/BottomNav';

const HomePage = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('URL_DEL_MINIBACKEND');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, []);

//   return (
   
//     <main className="w-full max-w-4xl mt-4">
//        <Header />
//       <section className="flex overflow-x-auto space-x-4">
//         {users.map(user => (
//           <figure key={user.id} className="flex flex-col items-center">
//             <img
//               src={user.avatar}
//               alt={user.name}
//               className="w-32 h-32 object-cover rounded-full" // Ajusta el tamaño según lo necesario
//             />
//             <figcaption className="text-black mt-1 text-xs">
//               {user.name}
//             </figcaption>
//           </figure>
//         ))}
//       </section>

//       <div className="bg-white p-4 mb-4">
//        <Posts />
//       </div>
//     </main>
//   );
// };

// export default Home;

  return (
    // flex justify-normal h-screen bg-red-700 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
    // text-3xl font-bold w-full max-w-md mx-auto
    <div className="">
    {/* <div className="sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"> */}
      {/* <Header /> */}
      <div className="flex justify-between p-4  ">
        <img
          src="../public/images/png/LOGO.png"
          alt="logo-findy"
          className="mr-auto"
        />
        <div className="flex space-x-1 text-black-600">
          <IoMdHeartEmpty />
          <IoChatbubblesOutline />
        </div>
      </div>
      {/* <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-3xl align text-center">My Instagram Clone</h1>
      </header> */}
      <main className="w-full mt-4 ">
        <section className="flex overflow-x-auto justify-between">
          <figure className="flex-none">
            <div className="relative inline-block">
              <img
                src="../public/images/png/image1.png"
                alt=""
                className="object-cover ml-4 size-14"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 flex justify-center ml-4">
                  {" "}
                  <img src="../public/images/png/sombra.png" alt="" />
                </div>
                <span className="relative text-white text-3xl shadow-inner ml-4">
                  +
                </span>
                {/* <figcaption className="text-black mt-20 text-xs ml-1">Your story</figcaption> */}
              </div>
            </div>
          </figure>
          <figure className="flex flex-col items-center">
            <img
              src="../public/images/png/image2.png"
              alt=""
              className="size-14"
            />
            <figcaption className="text-black mt-1 text-xs">
              Jennie Kim
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img
              src="../public/images/png/image3.png"
              alt=""
              className="size-14"
            />
            <figcaption className="text-black mt-1 text-xs">
              Roseanne Park
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img
              src="../public/images/png/image4.png"
              alt=""
              className="size-14"
            />
            <figcaption className="text-black mt-1 text-xs">
              Kim Ji-soo
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img
              src="../public/images/png/image5.png"
              alt=""
              className="size-14"
            />
            <figcaption className="text-black mt-1 text-xs">
              Lalisa Manob
            </figcaption>
          </figure>
        </section>
        <main>
          <PostsDetails/>
          <Posts />
        </main>
        <BottomNav />
      </main>
      
    </div>
    
   
  );
};

export default HomePage;
