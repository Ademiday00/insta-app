import YourStory from "../assets/YourStory.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="container navbar fixed-bottom">
      <div className=" container d-flex justify-content-between align-items-center bg-black pb-3 ps-3 pt-3 bg-dark position-fixed bottom-0  border-top border-black">
        <i
          className="fas fa-home text-white fs-4"
          onClick={() => navigate("/")}
        ></i>
        <i className="fas fa-search text-white fs-4"></i>
        <i className="far fa-plus-square text-white fs-4"></i>
        <i className="fas fa-video text-white fs-4"></i>
        <img
          src={YourStory}
          alt="Profile"
          className=" rounded-circle "
          onClick={() => navigate("/profile")}
          style={{ width: "30px", height: "30px", objectFit: "cover" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
