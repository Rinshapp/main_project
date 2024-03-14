import { FaArrowRight } from "react-icons/fa6";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Data3 } from "./data3";
import { Data4 } from "./data4";
import { Data5 } from "./data5";
import Button1 from "../Button/Button1";

const Card2 = () => {
  return (
    <>
      <div className="text-md ms-[10%] mt-[35px] flex gap-[70%] ">
        <div className="">
          <h1 className="text-[30px]">Top Products</h1>
        </div>
        <div className="flex text-[15px]">
          <p>
            View All
            <span>
              <FaArrowRight />
            </span>
          </p>
        </div>
      </div>

      <div className="ms-[10%] my-[30px] flex gap-[40px]">
        {Data3.map((item, index) => {
          return (
            <div className="shadow-2xl w-[250px] rounded-md" key={index}>
               <span className="ps-[85%] pt-[20px] "> <FavoriteBorderIcon/></span>
              <div className="">
                <img
                  className="w-[200px] h-[200px] object-contain"
                  src={item.image}
                  alt=""
                />
                <hr />
                <div className="ps-[8px]">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
              <div className="bg-green-500 h-[35px] justify-center text-center rounded-b-lg">
                <button>
                  Add To Cart{" "}
                  <span>
                    <ShoppingBagIcon />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* button */}
      <Button1 />
      {/* 2nd card*/}

      <div className="text-md ms-[10%] mt-[35px] flex gap-[70%] ">
        <div className="">
          <h1 className="text-[30px]">Medical Products</h1>
        </div>
        <div className="flex text-[15px]">
          <p>
            View All
            <span>
              <FaArrowRight />
            </span>
          </p>
        </div>
      </div>

      <div className="ms-[10%] my-[30px] flex gap-[40px]">
        <div className="my-[30px] flex gap-[40px]">
          {Data4.map((item, index) => {
            return (
              <div className="shadow-2xl w-[250px] rounded-md" key={index}>
                 <span className="ps-[85%] pt-[20px] "> <FavoriteBorderIcon/></span>
                <div className="">
                  <img
                    className="w-[200px] h-[200px] object-contain"
                    src={item.image}
                    alt=""
                  />
                  <hr />
                  <div className="ps-[8px]">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div className="bg-green-500 h-[35px] justify-center text-center rounded-b-lg">
                  <button>
                    Add To Cart{" "}
                    <span>
                      <ShoppingBagIcon />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3rd card*/}

      <div className="text-md ms-[10%] mt-[35px] flex gap-[70%] ">
        <div className="">
          <h1 className="text-[30px]">Upcoming Products</h1>
        </div>
        <div className="flex text-[15px]">
          <p>
            View All
            <span>
              <FaArrowRight />
            </span>
          </p>
        </div>
      </div>

      <div className="ms-[10%] my-[30px] flex gap-[40px]">
        {Data5.map((item, index) => {
          return (
            <div className="shadow-2xl w-[250px] rounded-md" key={index}>
               <span className="ps-[85%] pt-[20px] "> <FavoriteBorderIcon/></span>
              <div className="">
                <img
                  className="w-[200px] h-[200px] object-contain"
                  src={item.image}
                  alt=""
                />
                <hr />
                <div className="ps-[8px]">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
              <div className="bg-green-500 h-[35px] justify-center text-center rounded-b-lg">
                <button>
                  Add To Cart{" "}
                  <span>
                    <ShoppingBagIcon />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card2;
