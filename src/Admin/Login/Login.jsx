import { useState } from "react";
import { NavLink } from "react-router-dom";
import { errorToast, successToast } from "../../component/Toast";
import { adminLogin } from "../../api/Admin";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const [formFiled, setFormField] = useState({});

  const formdatas = [
    {
      type: "email",
      placeholder: "E-Mail",
      className: "",
      name: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      className: "",
      name: "password",
    },
  ];

  const onChangeValues = (e) => {
    console.log(e.target.value);
    setFormField({ ...formFiled, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formFiled);
    try {
      const response = await adminLogin(formFiled);

      successToast(response.data.message);

      // localStorage.setItem("adminToken", response.data.token);
      // localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log(response.data.token);

      if (!response.data.token) {
        return errorToast("token is not provided");
      }

      // localStorage.setItem("token", response.data.token);

      // dispatch(isAdminLogin(response.data));
      navigate("/admin");
    } catch (error) {
      errorToast(error.response.data.message, "error");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[40%] rounded-md shadow-2xl  h-[400px] flex justify-center flex-col gap-5 items-center"
      >
        <h2 className="text-black text-xl font-bold">Login to your account</h2>
        {formdatas.map(({ className, placeholder, type, name }, index) => (
          <input
            onChange={onChangeValues}
            key={index}
            type={type}
            placeholder={placeholder}
            name={name}
            className={`${className} max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`}
          />
        ))}
        <button
          type="submit"
          className="text-white w-[40%] bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        >
          Login
        </button>
        <NavLink to={"/admin-register"}>
          <p className="text-black text-xs underline"> Register </p>
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
