import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Banner = () => {
  return (
    <div className="flex bg-green-900 w-full h-[500px] text-white">
      <div className="ps-[50px] pt-[55px] w-[700px] ">
        <div className="text-[50px] leading-snug">
          <p className="">
            Your Prescription for <br />
            Affordble Health <br />
            Solutions!
          </p>
        </div>
        <div className="text-[17px] mt-[20px] leading-snug">
          Elevate your health journey with exclusive discounts and unparalleled{" "}
          <br />
          convenienc.Your path to well-being starts here,where every purchase{" "}
          <br />
          is a prescription for saving
        </div>
        <div>
          <button className="bg-white text-green-400 rounded-md text-sm w-[150px] h-[35px] mt-[30px]">
            <span>Start Shopping</span>
            <a className="text-green-400">
              <ShoppingBagIcon />
            </a>
          </button>
        </div>
      </div>
      <div className="">
       <img src="" alt="" />
      </div>
    </div>
  );
};

export default Banner;
