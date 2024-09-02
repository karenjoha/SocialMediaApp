import { createNews, deleteNews, getNews } from "../services/newsServices";
import useAppContext from "./useAppContext";

const useNews = () => {
  const { news, newsDispatch } = useAppContext();

  const fetchNews = async () => {
    newsDispatch({
      type: "FETCH_NEWS_REQUEST",
    });
    try {
      const data = await getNews();
      newsDispatch({ type: "FETCH_NEWS", payload: data });
    } catch (error) {
      console.error(error);
      newsDispatch({ type: "FETCH_NEWS_FAILURE", payload: error.message });
    }
  };

  const addNews = async (news) => {
    newsDispatch({
      type: "FETCH_NEWS_REQUEST",
    });
    try {
      const newNews = await createNews(news);
      newsDispatch({
        type: "ADD_NEWS",
        payload: newNews,
      });
    } catch (error) {
      console.error(error);
      newsDispatch({ type: "FETCH_NEWS_FAILURE", payload: error.message });
    }
  };

  const removeNews = async (id) => {
    try {
      await deleteNews(id);
      newsDispatch({ type: "DELETE_NEWS", payload: id });
    } catch (error) {
      console.error(error);
      newsDispatch({ type: "FETCH_NEWS_FAILURE", payload: error.message });
    }
  };

  return {
    news: news.news,
    loading: news.loading,
    error: news.error,
    fetchNews,
    addNews,
    removeNews,
  };
};

export default useNews;
