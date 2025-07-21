import YourStory from "../assets/YourStory.jpg";
import Navbar from "./Navbar";
import pictures from "../data/Picture";
import MyProfile from "./MyProfile";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <div className="m-0 p-0">
          <div className="d-flex justify-content-between align-items-center m-3  text-white ">
            <div className="d-flex align-items-center gap-2">
              <p className="mb-1 fs-1">Korewa</p>
              <i className="fas fa-less-than fa-rotate-270 fs-6"></i>
            </div>
            <div className="d-flex gap-4 fs-3">
              <i className="far fa-at"></i>
              <i className="far fa-plus-square"></i>
              <i
                className="fas fa-bars"
                onClick={() => navigate("/settings")}
              ></i>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center m-3 text-white">
            <img
              src={YourStory}
              alt="Profile"
              className="rounded-circle me-4"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <div className=" m-3 p-0">
              <a
                className="text-white text-decoration-none ms-1 "
                href="#"
                role="button"
              >
                173
              </a>
              <p className="mt-0">Posts</p>
            </div>
            <div className=" m-lg-3">
              <a
                className="text-white text-decoration-none ms-3"
                href="#"
                role="button"
              >
                774k
              </a>
              <p className="mt-0">Followers</p>
            </div>
            <div>
              <a
                className="text-white text-decoration-none ms-3"
                href="#"
                role="button"
              >
                714
              </a>
              <p className=" mt-0">Following</p>
            </div>
          </div>
          <div className="text-white m-3 ">
            <h4 className="mb-1">Korewa</h4>
            <p className="mb-1">Font-end developer</p>
            <p className="mb-1">Javascript, React</p>
            <p className="mb-1">korewa@gmail.com</p>
          </div>
          <div className="d-flex justify-content-between align-items-center m-3 gap-2 text-white">
            <a className="btn btn-primary w-100" href="#" role="button">
              Following
            </a>
            <a
              className="btn btn-outline-secondary text-white w-100"
              href="#"
              role="button"
            >
              Message
            </a>
            <a
              className="btn btn-outline-secondary w-100 text-white"
              href="#"
              role="button"
            >
              Email
            </a>
            <a
              className="btn btn-outline-secondary w-100 text-white"
              href="#"
              role="button"
            >
              <i className="fas fa-chevron-up"></i>
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center m-4 text-white fs-4">
            <i className="fas fa-th"></i>
            <i className="fas fa-video"></i>
            <i className="fas fa-play"></i>
            <i className="fas fa-user-tag"></i>
          </div>
          <div className="container-fluid">
            <div className="row row-cols-3 row-cols-md-3 row-cols-lg-3 g-3 ">
              {pictures.map((pictures, index) => (
                <MyProfile key={index} picture={pictures} />
              ))}
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Profile;
