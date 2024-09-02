import PropTypes from "prop-types";
import useNews from "../../hooks/useNews";

const NewsItem = ({ news = null }) => {
  const { removeNews } = useNews();

  const handleDelete = (id) => {
    const confirmAction = confirm("Está seguro que desea eliminar la noticia?");
    if (confirmAction) {
      removeNews(id);
    }
  };
  return news ? (
    <article>
      <figure>
        <img src={news.photo} alt={news.title} />
        <figcaption>{news.title}</figcaption>
      </figure>
      <p>{news.description}</p>
      <button onClick={() => handleDelete(news.id)}>Eliminar</button>
    </article>
  ) : (
    <div>...Cargando</div>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object,
};

export default NewsItem;
