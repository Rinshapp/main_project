import { useState } from "react";
import { NavLink } from "react-router-dom";
import { successToast, errorToast } from "../../Toast";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../../api/user";

function RegisterUser() {
  const navigate = useNavigate();

  const [formFiled, setFormField] = useState({});

  const formdatas = [
    {
      type: "text",
      placeholder: "FirstName:",
      className: "",
      name: "fname",
    },
    {
      type: "text",
      placeholder: "LastName:",
      className: "",
      name: "lname",
    },
    {
      type: "email",
      placeholder: "E-Mail:",
      className: "",
      name: "email",
    },
    {
      type: "password",
      placeholder: "Password:",
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
    try {
      const response = await userRegister(formFiled);

      successToast(response.data.message);
      navigate("/user-login");
    } catch (error) {
      errorToast(error.response.data.message, "error");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[50%] rounded-md shadow-2xl h-[500px] flex justify-center flex-col gap-5 items-center "
      >
        <h2 className="text-black text-2xl font-bold">Create an account</h2>
        {formdatas.map(({ className, placeholder, type, name }, index) => (
          <input
            onChange={onChangeValues}
            key={index}
            type={type}
            placeholder={placeholder}
            name={name}
            className={`${className} max-w-[300px] w-[80%] h-[40px]  bg-green-50 flex justify-start ps-5 rounded-md items-center`}
          />
        ))}

        <button
          type="submit"
          className="text-black w-[40%] bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        >
          Register
        </button>
        <NavLink to={"/admin-login"}>
          <p className="text-white text-xs underline "> Login</p>
        </NavLink>
      </form>
    </div>
  );
}
export default RegisterUser;
