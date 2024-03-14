import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className=" flex justify-between mb-[20px]">
      <Link to={`/details/${'Pain Relief'}`}>
        <p>Pain Relief</p>
      </Link>
      <Link to={`/details/${'Cold and Flu'}`}>
        <p>Cold and Flu</p>
      </Link>
      <Link to={`/details/${'Diabetes Care'}`}>
        <p>Diabetes Care</p>
      </Link>
      <Link to={`/details/${'Digestive Health'}`}>
        <p>Digestive Health</p>
      </Link>
      <Link to={`/details/${'First Aid'}`}>
        <p>First Aid</p>
      </Link>
      <Link to={`/details/${'Skin Care'}`}>
        <p>Skin Care</p>
      </Link>
      <Link to={`/details/${'Child and Baby Care'}`}>
        <p>Child and Baby Care</p>
      </Link>
      <Link to={`/details/${'Heart Health'}`}>
        <p>Heart Health</p>
      </Link>
      <Link to={`/details/${'Eye and Ear Care'}`}>
        <p>Eye and Ear Care</p>
      </Link>
      <Link to={`/details/${'Respiratory Health'}`}>
        <p>Respiratory Health</p>
      </Link>
    </div>
  );
};

export default List;
