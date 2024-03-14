import { FaSackDollar } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { PiStethoscopeBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex w-[90%] ms-[10%] mt-[20px]">
      <NavLink to={"/details/{name}"}>
        <div className="flex items-center justify-between mx-3 px-5 w-[250px] h-[100px] rounded-lg bg-green-200">
          <div className="flex space-x-2">
            <div>
              <FaSackDollar />
            </div>
            <p className="font-semibold">
              Get 25% <br />
              Off
            </p>
          </div>
          <span>
            <FaAngleRight />
          </span>
        </div>
      </NavLink>
      <NavLink to={"/details/{name}"}>
        <div className="flex items-center justify-between mx-3 px-5 w-[250px] h-[100px] rounded-lg bg-orange-200">
          <div className="flex space-x-2">
            <div>
              <LiaLuggageCartSolid />
            </div>
            <p className="font-semibold">
              Free Home <br />
              Delivary
            </p>
          </div>
          <span>
            <FaAngleRight />
          </span>
        </div>
      </NavLink>

      <NavLink to={"/details/{name}"}>
        <div className="flex items-center justify-between mx-3 px-5 w-[250px] h-[100px] rounded-lg bg-green-400">
          <div className="flex space-x-2">
            <div>
              <FaUserDoctor />
            </div>
            <p className="font-semibold">
              Doctor's <br />
              Appointment
            </p>
          </div>
          <span>
            <FaAngleRight />
          </span>
        </div>
      </NavLink>
      <NavLink to={"/details/{name}"}>
        <div className="flex items-center justify-between mx-3 px-5 w-[250px] h-[100px] rounded-lg bg-pink-200">
          <div className="flex space-x-2">
            <div>
              <PiStethoscopeBold />
            </div>
            <p className="font-semibold">
              Health
              <br />
              Advice
            </p>
          </div>
          <span>
            <FaAngleRight />
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default Button;
