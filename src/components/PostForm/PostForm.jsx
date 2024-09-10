import { Formik } from "formik";
import PropTypes from "prop-types";
import fileUpload from "../../services/fileUpload";

const NewsForm = ({ news = null, onSubmit }) => {
  const initialValues = {
    title: news ? news.title : "",
    description: news ? news.description : "",
    photo: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        if (values.photo) {
          const image = await fileUpload(values.photo);
          values.photo = image ? image : "";
        }
        (values.categories = []), (values.likes = []);
        onSubmit(values);
      }}
    >
      {({ handleSubmit, getFieldProps, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Post description"
            {...getFieldProps("title")}
          />
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setFieldValue("photo", file);
            }}
          />
          <button type="submit">{news ? "Actualizar" : "Crear"}</button>
        </form>
      )}
    </Formik>
  );
};

NewsForm.propTypes = {
  news: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default NewsForm;
