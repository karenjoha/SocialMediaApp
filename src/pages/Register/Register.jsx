import { useState } from "react";
import { Formik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import fileUpload from "../../services/fileUpload";

const passwordRegex =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

const Register = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeatPassword: false,
  });

  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
  );

  const handleShowPassword = (name) => {
    setShowPassword({
      ...showPassword,
      [name]: !showPassword[name],
    });
  };
  return (
    <main className="flex flex-col grow gap-3.5 mt-3 px-2">
      <h1 className="font-serif text-center text-2xl">Cree una cuenta</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
          avatar: null,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required("Por favor ingrese su nombre completo")
            .max(20, "Su nombre no puede exceder los 20 caracteres")
            .min(10, "Su nombre no puede contener menos de 10 caracteres"),
          email: Yup.string()
            .required("Por favor ingrese su email")
            .email("Por favor ingrese un email válido"),
          password: Yup.string()
            .required("Por favor ingrese una contraseña")
            .matches(
              passwordRegex,
              "La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico, debe contener más de 8 caracteres pero no exceder los 16 caracteres. "
            )
            .oneOf(
              [Yup.ref("repeatPassword")],
              "La contraseña ingresada no coincide"
            ),
          repeatPassword: Yup.string()
            .required("Por favor confirme la contraseña")
            .matches(
              passwordRegex,
              "La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico, debe contener más de 8 caracteres pero no exceder los 16 caracteres."
            )
            .oneOf(
              [Yup.ref("password")],
              "La contraseña ingresada no coincide"
            ),
          avatar: Yup.mixed().required("Por favor escoja una foto de perfil"),
        })}
        onSubmit={async (values) => {
          const profileImage = await fileUpload(values.avatar);
          if (profileImage) {
            values.avatar = profileImage;
            console.table(values);
          } else {
            alert("Ha ocurrido un error en la carga de la imagen");
          }
        }}
      >
        {({ handleSubmit, getFieldProps, errors, touched, setFieldValue }) => (
          <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
            <label className="font-bold" htmlFor="name">
              Nombre completo:
            </label>
            <input
              type="text"
              id="name"
              {...getFieldProps("name")}
              className={
                touched.name && errors.name
                  ? "p-4 rounded border border-pink-500 text-pink-600 focus:ring-pink-500"
                  : "p-4 rounded border border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              }
            />
            {touched.name && errors.name ? (
              <span className="text-pink-600">{errors.name}</span>
            ) : null}
            <label className="font-bold" htmlFor="email">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              {...getFieldProps("email")}
              className={
                touched.name && errors.name
                  ? "p-4 rounded border border-pink-500 text-pink-600 focus:ring-pink-500"
                  : "p-4 rounded border border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              }
            />
            {touched.email && errors.email ? (
              <span className="text-pink-600">{errors.email}</span>
            ) : null}
            <label className="font-bold" htmlFor="password">
              Contraseña:
            </label>
            <div className=" flex relative items-center">
              <input
                type={showPassword.password ? "text" : "password"}
                id="password"
                {...getFieldProps("password")}
                className={
                  touched.password && errors.password
                    ? "p-4 grow rounded border border-pink-500 text-pink-600 focus:ring-pink-500"
                    : "p-4 grow rounded border border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                }
              />
              <button
                type="button"
                onClick={() => handleShowPassword("password")}
                className={
                  touched.password && errors.password
                    ? "absolute right-4 text-pink-600 "
                    : "absolute right-4 text-slate-400 "
                }
              >
                {showPassword.password ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {touched.password && errors.password ? (
              <span className="text-pink-600">{errors.password}</span>
            ) : null}
            <label className="font-bold" htmlFor="repeatPasswod">
              Confirmar contraseña:
            </label>
            <div className=" flex relative items-center">
              <input
                type={showPassword.repeatPassword ? "text" : "password"}
                id="repeatPassword"
                {...getFieldProps("repeatPassword")}
                className={
                  touched.repeatPassword && errors.repeatPassword
                    ? "p-4 grow rounded border border-pink-500 text-pink-600 focus:ring-pink-500"
                    : "p-4 grow rounded border border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                }
              />
              <button
                type="button"
                onClick={() => handleShowPassword("repeatPassword")}
                className={
                  touched.repeatPassword && errors.repeatPassword
                    ? "absolute right-4 text-pink-600 "
                    : "absolute right-4 text-slate-400 "
                }
              >
                {showPassword.repeatPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {touched.repeatPassword && errors.repeatPassword ? (
              <span className="text-pink-600">{errors.repeatPassword}</span>
            ) : null}
            <label className="font-bold" htmlFor="avatar">
              Escoja su foto de perfil:
            </label>
            <div className="flex items-center space-x-6">
              <figure className="shrink-0">
                <img
                  className="h-16 w-16 object-cover rounded-full"
                  src={image}
                  alt="Current profile photo"
                />
              </figure>
              <input
                type="file"
                id="avatar"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("avatar", file);
                  if (file) {
                    setImage(URL.createObjectURL(file));
                  }
                }}
                className={
                  touched.avatar && errors.avatar
                    ? "p-4 rounded border border-pink-500 text-pink-600 focus:ring-pink-500 text-transparent w-full text-sm"
                    : "p-4 rounded border border-slate-400 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                }
              />
            </div>
            {touched.avatar && errors.avatar ? (
              <span className="text-pink-600">{errors.avatar}</span>
            ) : null}
            <button
              className="p-4 bg-orange-500 text-white rounded mt-3 hover:bg-orange-600"
              type="submit"
            >
              Crear cuenta
            </button>
          </form>
        )}
      </Formik>
      <p>
        Si usted ya tiene una cuenta registrada inicie sesión{" "}
        <Link className="text-sky-900 underline" to={"/login"}>
          aquí!
        </Link>
      </p>
    </main>
  );
};

export default Register;
