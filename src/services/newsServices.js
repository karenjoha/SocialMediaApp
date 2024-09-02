import axios from "axios";
import endpoints from "../config";

// export const getNews = async () => {
//     try {
//         const { data } = await axios.get(endpoints.news);
//         return data
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

export const getNews = async () => {
  const { data } = await axios.get(endpoints.news);
  return data;
};

export const getNewsById = async (id) => {
  const url = `${endpoints.news}/${id}`;
  const { data } = await axios.get(url);
  return data;
};

export const getNewsByCategory = async (idCategory) => {
  const news = await getNews();
  const filteredNews = news.filter((item) =>
    item.categories.includes(idCategory)
  );
  return filteredNews;
};

export const createNews = async (news) => {
  const { data } = await axios.post(endpoints.news, news);
  return data;
};

export const updateNews = async (id, news) => {
  const url = `${endpoints.news}/${id}`;
  const { data } = await axios.put(url, news);
  return data;
};

export const deleteNews = async (id) => {
  const url = `${endpoints.news}/${id}`;
  await axios.delete(url);
};

export const toggleLikes = async (idNews, idUser) => {
  const urlNews = `${endpoints.news}/${idNews}`;
  const singleNews = await getNewsById(idNews);
  const likesSingleNews = singleNews.likes;
  const isUser = likesSingleNews.some((item) => item == idUser);

  const likes = isUser
    ? likesSingleNews.filter((item) => item != idUser)
    : [...likesSingleNews, idUser];

  const { data } = await axios.patch(urlNews, { likes: likes });
  return data;
};
