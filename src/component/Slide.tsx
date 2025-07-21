import dayo from "../assets/Dayo.jpg";
import beauty from "../assets/landscape 1.jpeg";
import beauty2 from "../assets/landscap-2.jpeg";
import preach from "../assets/preach.jpeg";

const Slide = () => {
  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <div className=" ">
          <img
            src={dayo}
            alt=""
            className="rounded-circle border  bg-white "
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <small className=" m-4 text-white fw-bolder ">AyanbajoFunsho</small>
        </div>
        <i className="fas fa-ellipsis-h text-white p-3"></i>
      </div>
      <div>
        <img src={beauty} alt="" className=" w-100" />
      </div>
      <div className="fs-4 m-3 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-heart text-white"></i>
            <span className="text-white fs-6">103</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-comment text-white"></i>
            <span className="text-white fs-6">50</span>
          </div>
          <i className="fa-regular fa-paper-plane p-3 text-white gap-1"></i>
        </div>
        <i className="fa-regular fa-bookmark p-3 text-white"></i>
      </div>
      <p className="text-white pb-6 ps-3 mb-3">
        AyanbajoFunsho <span className=" fw-2 fs-8">Beautiful view</span>
        <p className="">3 days ago</p>
      </p>

      <div className="d-flex justify-content-between m-3">
        <div className=" ">
          <img
            src={beauty2}
            alt=""
            className="rounded-circle border  bg-white "
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <small className=" m-4 text-white fw-bolder ">Landscape-g</small>
        </div>
        <i className="fas fa-ellipsis-h text-white p-3"></i>
      </div>
      <div>
        <img src={beauty2} alt="" className=" w-100" />
      </div>
      <div className="fs-4 m-3 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-heart text-white"></i>
            <span className="text-white fs-6">1k</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-comment text-white"></i>
            <span className="text-white fs-6">303</span>
          </div>
          <i className="fa-regular fa-paper-plane p-3 text-white"></i>
        </div>
        <i className="fa-regular fa-bookmark p-3 text-white"></i>
      </div>
      <p className="text-white pb-6 ps-3">Landscape-g</p>
      <div>
        <div className="d-flex justify-content-between m-3">
          <div className=" ">
            <img
              src={preach}
              alt=""
              className="rounded-circle border  bg-white "
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <small className=" m-4 text-white fw-bolder ">pastorgeorge</small>
          </div>
          <i className="fas fa-ellipsis-h text-white p-3"></i>
        </div>
        <img src={preach} alt="" className=" w-100" />
      </div>
      <div className="fs-4 m-3 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-heart text-white"></i>
            <span className="text-white p-0 fs-6">33.3k</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-comment  text-white"></i>
            <span className="text-white fs-6 ">4035</span>
          </div>
          <i className="fa-regular fa-paper-plane text-white"></i>
        </div>
        <i className="fa-regular fa-bookmark  text-white "></i>
      </div>
      <div>
        <p className="text-white pb-6 ps-3">pastorgeorge</p>
        <h1></h1>
      </div>
    </>
  );
};

export default Slide;
