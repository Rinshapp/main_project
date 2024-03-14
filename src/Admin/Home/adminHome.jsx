import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { Avatar } from "@mui/material";
// import { IoSearch } from "react-icons/io5";




const AdminHome = () => {
  return (
    <div className="font-sans">
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto rounded-md bg-gray-200 text-white">
          <ul className="space-y-2 gap-4">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-shrink-0 w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-[20px]"><IoHomeSharp/></span>
                <span className="ms-3 text-[21px]">Home</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><FaCircleUser/></span>
                <span className="flex-1 ms-3 text-left  rtl:text-right whitespace-nowrap text-[21px]">
                  Profile
                </span>
              </button>
            </li>

            <NavLink to={"/"}>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><MdProductionQuantityLimits/></span>
                <span className="flex-1 ms-3 whitespace-nowrap text-[21px]">
                  Products
                </span>
                
              </a>
            </li>
            </NavLink>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><BiSolidCategory/></span>
                <span className="flex-1 ms-3 whitespace-nowrap text-[21px]">
                  Categories
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><FaShoppingCart/></span>
                <span className="flex-1 ms-3 whitespace-nowrap text-[21px]">
                  Cart
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><FaBlog/></span>
                <span className="flex-1 ms-3 whitespace-nowrap text-[21px]">
                  Blogs
                </span>
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><FaUserGroup/></span>
                <span className="flex-1 ms-3 whitespace-nowrap text-[21px]">
                  User
                </span>
              </a>
            </li>
            <NavLink to={"/admin-register"}>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><FaPenToSquare/></span>
                  <span className="flex-1 ms-3 whitespace-nowrap text-[21px]">
                    Sign In
                  </span>
                </a>
              </li>
            </NavLink>
            <NavLink to={"/admin-login"}>
              <li>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><FaPenToSquare/></span>
                  <span className="flex-1 ms-3 whitespace-nowrap text-[21px]">
                    Sign Up
                  </span>
                </a>
              </li>
            </NavLink>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-shrink-0 w-5 h-5 text-[20px] text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><LuLogOut/></span>
                <NavLink to={'/admin-login'}>
                <span className="flex-1 ms-3 whitespace-nowrap text-[21px]">
                 Logout
                </span>
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="ms-[18%] bg-green-700 h-[70px] flex justify-between">
        <a className="ps-[23px] text-[25px] pt-[10px] text-white">Dashboard</a>
        <span className=" pt-[13px] ps-[75%] pe-[8px]"> <Avatar src="/broken-image.jpg" /></span>
        
      </div>
    </div>
  );
};

export default AdminHome;
