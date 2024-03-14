import { useParams } from "react-router-dom";

const Details = () => {

const {item} = useParams()

  return (
    <div>
      <h1 className="text-[30px]">Details</h1>
      {item}
    </div>
  );
};

export default Details;
