// import React from "react";
import { useNavigate } from "react-router-dom";

const SethingsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white px-3 px-md-4">
      <div className="d-flex justify-content-between align-items-center m-3 gap-4 ">
        <i
          className=" fas fa-angle-left fs-3 position-absolute"
          onClick={() => navigate("/profile")}
        ></i>
        <p className="ms-5 mb-1">Settings and activity</p>
      </div>
      <div className="input-group p-2">
        <span className="input-group-text bg-white border-end-0">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          className="form-control border-start-0"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div className="d-flex justify-content-between align-items-center m-3">
        <p>Your account</p>
        <div className="d-flex justify-content-between align-items-center gap-1">
          <span className="mb-3" style={{ fontSize: "1rem" }}>
            ∞ meta
          </span>
        </div>
      </div>
      <div
        className="d-flex justify-content-between gap-4 m-2"
        style={{ lineHeight: "1rem" }}
      >
        <i className="fas fa-user"></i>
        <div className="">
          <p className="" style={{ lineHeight: "1rem" }}>
            Accounts
          </p>
          <span className="" style={{ lineHeight: "1.2rem" }}>
            Password, security, personal details, ad preferences
          </span>
        </div>
        <i className="fas fa-angle-right"></i>
      </div>
      <p className="m-2 p-1">
        Manage your connected experiences and account settings across Meta
        technologies. <span className="text-primary fw-bold">Learn more</span>
      </p>
      <div>
        <p className="text-center">How to use instagram</p>
        <div className="" style={{ lineHeight: "1rem" }}>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div className="">
              <i className="fas fa-bookmark m-2"></i>
              <p> Saved</p>
            </div>
            <i className=" fas fa-angle-right"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div>
              <i className="fas fa-archive m-2"></i>
              <p>Archive</p>
            </div>
            <i className=" fas fa-angle-right"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div>
              <i className="fas fa-history m-2"></i>
              <p> Your activity</p>
            </div>
            <i className="fas fa-angle-right"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div>
              <i className="fas fa-bell m-2"></i>
              <p>Notification</p>
            </div>
            <i className="fas fa-angle-right"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div>
              <i className="fas fa-clock m-2"> </i>
              <p>Time management</p>
            </div>
            <i className="fas fa-angle-rigth"></i>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center">Who can see your content</p>
        <div className="" style={{ lineHeight: "1rem" }}>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div className="">
              <i className="fas fa-lock m-2"></i>
              <p>Account Privacy</p>
            </div>
            <i className="fas fa-angle-right"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div>
              <i className="fas fa-user-friends m-2"></i>
              <p>Close friends</p>
            </div>
            <i className="fas fa-angle-right"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div>
              <i className="fas fa-share-alt m-2"></i>
              <p>Crossposting</p>
            </div>
            <i className="fas fa-angle-right"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div>
              <i className="fas fa-ban m-2"></i>
              <p>Blocked</p>
            </div>
            <i className="fas fa-angle-right"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            <div>
              <i className="fas fa-eye-slash m-2"></i>
              <p>Hide story and live</p>
            </div>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SethingsPage;
