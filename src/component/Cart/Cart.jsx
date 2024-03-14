// import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="flex w-[90%] mx-[5%] my-[40px] border border-gray-400 rounded-lg pb-[5%]">
      <div>
        <h1 className="text-[30px] font-semibold ps-[20%] pt-[30px]">
          Shopping Cart
        </h1>
        <div className=" w-[210%] ms-[23px]  justify-between shadow-2xl rounded-xl">
          <div className="w-[60%] h-[40%] my-[30px]">
            <div className="flex w-[160%] pt-[50px] justify-between">
              <div className="flex">
                <div className="w-[150px] h-[150px] bg-slate-50 rounded-lg ms-[10px]">
                  <img
                    className="w-[100%] h-[100%]"
                    src="src/assets/Images/garlic.png"
                    alt=""
                  />
                </div>
                <div className="ps-[15px]">
                  <p className="font-extrabold">Product</p>
                  <p className="font-extrabold">Colour</p>
                  <p className="font-extrabold">Large</p>
                </div>
              </div>
              <div>
                <div className="bg-green-600 text-white">
                  <button>1</button>
                </div>
                <div className="text-red-600">
                  <p className="font-extrabold">Remove</p>
                </div>
              </div>
              <div>
                <p className="font-extrabold">$25.00</p>
              </div>
            </div>
          </div>
          <div className="px-[40px]">
            <hr />
          </div>
          <div className="w-[60%] h-[40%] my-[20px]">
            <div className="flex w-[160%] pt-[50px] justify-between">
              <div className="flex">
                <div className="w-[150px] h-[150px] bg-slate-50 rounded-lg ms-[10px]">
                  <img
                    className="w-[100%] h-[100%]"
                    src="src/assets/Images/garlic.png"
                    alt=""
                  />
                </div>
                <div className="ps-[15px]">
                  <p className="font-extrabold">Product</p>
                  <p className="font-extrabold">Colour</p>
                  <p className="font-extrabold">Small</p>
                </div>
              </div>
              <div>
                <div className="bg-green-600 text-white">
                  <button>1</button>
                </div>
                <div className="text-red-600">
                  <p className="font-extrabold">Remove</p>
                </div>
              </div>
              <div>
                <p className="font-extrabold">$43.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-[40px] pt-[15px]">
          <button
            type="button"
            className="w-[85%] text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
          >
            Continue Shopping
          </button>
        </div>
      </div>

      {/* CHECKOUT */}

      <div className="shadow-2xl rounded-lg w-[36%] h-[30%] ms-[37%] me-[15px] py-[20px] mt-[12%]">
        <h1 className="text-[25px] ps-[20px]">Order Summary</h1>
        <div className="flex justify-between py-[10px] px-[20px] h-[50px]">
          <p>Subtotal</p>
          <p>$99.00</p>
        </div>

        <hr />
        <div className="flex justify-between py-[10px] px-[20px]">
          <p>Shipping</p>
          <p>$5.00</p>
        </div>

        <hr />
        <div className="flex justify-between py-[10px] px-[20px]">
          <p>Tax</p>
          <p>$8.40</p>
        </div>

        <hr />
        <div className="flex justify-between py-[10px] px-[20px]">
          <p className="font-semibold text-[15px]">Order Total</p>
          <p>$135.40</p>
        </div>
        <div className="ps-[40px]">
          <button
            type="button"
            className="w-[85%] text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 font-extrabold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
