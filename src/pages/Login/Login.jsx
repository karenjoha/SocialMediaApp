import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Por favor ingrese un email válido")
        .required("Este campo es requerido"),
      password: Yup.string().required("Este campo es requerido"),
    }),
    onSubmit: (values) => {
      console.table(values);
    },
  });

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <main className="flex flex-col grow gap-3.5 mt-3 px-2">
      <button onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <h1 className="font-serif text-center text-2xl">Iniciar sesión</h1>
      <form className="flex flex-col gap-1" onSubmit={formik.handleSubmit}>
        <label className="font-bold" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className={
            formik.touched.email && formik.errors.email
              ? "p-4 rounded border border-red-400"
              : "p-4 rounded border border-slate-400"
          }
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="text-red-400">{formik.errors.email}</span>
        ) : null}
        <label className="font-bold" htmlFor="password">
          Contraseña
        </label>
        <div className="flex relative items-center">
          <input
            className={
              formik.touched.password && formik.errors.password
                ? "p-4 grow border rounded border-red-400"
                : "p-4 grow border rounded border-slate-400"
            }
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          <button
            className={
              formik.touched.password && formik.errors.password
                ? "absolute right-4 text-red-400 "
                : "absolute right-4 text-slate-400 "
            }
            type="button"
            onClick={handleShowPassword}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className="text-red-400">{formik.errors.password}</span>
        ) : null}
        <button
          type="submit"
          className="p-4 bg-orange-500 text-white rounded mt-3 hover:bg-orange-600"
        >
          Iniciar sesión
        </button>
      </form>
      <p>
        Si aún no tiene una cuenta por favor haga click{" "}
        <Link className="text-sky-900 underline" to={"/register"}>
          aquí!
        </Link>
      </p>
    </main>
  );
};

export default Login;
