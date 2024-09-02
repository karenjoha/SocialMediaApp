import { useNavigate } from "react-router-dom";
import NewsForm from "../../components/NewsForm/NewsForm";
import useNews from "../../hooks/useNews";

const AddNews = () => {
  const navigate = useNavigate();
  const { addNews } = useNews();

  const handleCreateNews = async (values) => {
    console.table(values);
    await addNews(values);
    alert("Se ha guardado exitosamente la noticia");
    navigate("/news");
  };
  return (
    <main>
      <button onClick={() => navigate(-1)}>Ir atrás</button>
      <h1>Agregar nueva noticia</h1>
      <NewsForm onSubmit={handleCreateNews} />
    </main>
  );
};

export default AddNews;
