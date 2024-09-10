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
      navigate("/home");
    },
  });

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <main className="flex flex-col grow gap-3.5 mt-3 px-2">
      <button onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <img className="place-self-center ml-8" src="images/png/LOGO.png" alt="logo" />
      <h1 className="text-center text-2xl">LOGIN</h1>
      <form className="flex flex-col gap-1" onSubmit={formik.handleSubmit}>
        <input
          className={
            formik.touched.email && formik.errors.email
              ? "p-4 rounded border border-red-400"
              : "p-4 rounded border border-slate-400"
          }
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="text-red-400">{formik.errors.email}</span>
        ) : null}
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
            placeholder="Password"
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
          className="p-2 bg-roseColor text-white mt-6"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-10">¿No tienes una cuenta?</p>
      <button
        className="p-2 bg-roseColor text-white rounded"
        onClick={() => navigate('/register')}
      >
        Register
      </button>
    </main>
  );
};

export default Login;

