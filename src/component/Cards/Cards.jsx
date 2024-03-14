import { FaArrowRight } from "react-icons/fa6";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";
import { Data } from "./data";
import { Data2 } from "./data2";



const Cards = () => {
  return (
    <>
      <div className="text-md ms-[10%] mt-[35px] flex gap-[70%] ">
        <div className="">
          <h1 className="text-[30px]">New Products</h1>
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
        {Data.map((item, index) => {
          return (
            <div className="shadow-2xl w-[250px] rounded-md" key={index}>
              <span className="ps-[85%] pt-[20px] ">
                {" "}
                <FavoriteBorderIcon />
              </span>
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
                <NavLink>
                  <button>
                    Add To Cart{" "}
                    <span>
                      <ShoppingBagIcon />
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2nd */}

      <div className="text-md ms-[10%] mt-[35px] flex gap-[70%] ">
        <div className="">
          <h1 className="text-[30px]">Popular Products</h1>
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
          {Data2.map((item, index) => {
            return (
              <div className="shadow-2xl w-[250px] rounded-md" key={index}>
                <span className="ps-[85%] pt-[20px] ">
                  {" "}
                  <FavoriteBorderIcon />
                </span>
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
                  <NavLink>
                    <button>
                      Add To Cart{" "}
                      <span>
                        <ShoppingBagIcon />
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
