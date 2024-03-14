const Offer = () => {
  return (
    <>
      <div className=" flex  justify-between mb-12">
        <div className=" h-[600px]w-[600px] bg-blue-50 flex justify-around rounded-md mx-36 mb-2">
          <div className="flex-col mt-36  ms-5">
            <button className="bg-green-600 text-white rounded border border-green-700 h-[40px] w-[100px]">
              25%
            </button>
            <h1 className="mt-2 font-semibold"> BLACK GARLIC OIL</h1>
            <p className="mt-2">
              Stronger and Thicker <br /> Hair with Black Garlic
              <br />
              Oil.
            </p>
            <p className="line-through"> $37</p>
            <div className="flex justify-between">
              <h2 className="font-bold">$37.00</h2> <span>including Tax</span>
            </div>
          </div>
          <div className="w-[470px] h-[450px]">
            <img className="" src="src/assets/Images/garlic.png" alt="" />
          </div>
        </div>
        <div className="flex-col mx-16 w-[500px]">
          <div className="flex w-[478px] h-[200px] rounded -mx-44 bg-pink-50 justify-around">
            <div className="flex-col ms-3 mt-12">
              <button className="bg-green-600 text-white rounded border border-green-700 h-[40px] w-[100px]">
                25%
              </button>
              <h1>
                Dental Care Set For Vivid
                <br />
                and Bright Smiles
              </h1>
              <p className="line-through">$33.90</p>
              <div className="flex justify-between">
                <h2 className="font-bold">$37.00</h2> <span>including Tax</span>
              </div>
            </div>

            <div className="w-[180px] h-[160px] pt-[6px]">
              <img src="src/assets/Images/bana.png" alt="" />
            </div>
          </div>

          <div className="flex w-[478px] h-[200px] bg-blue-50 -mx-44 rounded-md mt-7 justify-around">
            <div className="flex-col mt-12">
              <button className="bg-green-600 text-white rounded h-[40px] w-[100px]">
                25%
              </button>
              <h1 className="font-semibold">
                {" "}
                BANANA FLAVOURED <br />
                TOOTH PASTE
              </h1>
              <p className="line-through">$37.00</p>
              <div className="flex justify-between">
                <h2 className="font-bold">$37.00</h2> <span>including Tax</span>
              </div>
            </div>

            <div className="w-[180px] h-[160px] pt-[10px]">
              <img src="src/assets/Images/white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
