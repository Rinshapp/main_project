import { FaArrowRight } from "react-icons/fa6";

const Banner2 = () => {
  return (
    <div className="flex bg-blue-50 w-full h-[420px] text-black ">
      <div className="ps-[50px] py-[58px] w-[700px] ">
        <div>
          <span className="text-[16px] font-semibold">Today's Hot Offer</span>
        </div>
        <div className="text-[50px] leading-snug">
          <p className="text-[30px] font-semibold">
            Unlock 50% Off on <br />
            Essential Medicines
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
          <button className="flex justify-center align-middle gap-[7px] pt-[10px] bg-green-600  rounded-md text-sm w-[200px] h-[40px] mt-[30px] ">
            <span className="text-white">Place An Order Now</span>
            <a className="text-white">
              < FaArrowRight/>
            </a>
          </button>
        </div>
      </div>
      <div className="">
        {/* <img
          className="w-[600px] h-[400px]"
          src="src/assets/Images/banner.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Banner2;
