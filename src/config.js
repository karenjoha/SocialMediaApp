// const URL_API = "http://localhost:3456/";
// const URL_API = "http://localhost:5174/";

const URL_API= "https://minibackend-findy-cr53.vercel.app/";  

const endpoints = {
    users: `${URL_API}users`,
    usersByIdAndAvatar: (id, avatar) =>
      `${URL_API}users?id=${id}&avatar=${avatar}`,
    posts: `${URL_API}posts`,
    // categories: `${URL_API}categories`,
    comments: (commentsId) => `${URL_API}comments?Id=${commentsId}`,
  };
  
  export default endpoints;
