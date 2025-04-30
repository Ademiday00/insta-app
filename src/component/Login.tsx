const login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log("Email:", email, "Password:", password);
  // };

  return (
    <div className="login-container mt-4  text-white display-7">
      <div className="login-meta nav nav-pills nav-fill ">
        <i className="fas fa-less-than ms-3"></i>
        <p className="pmeta nav-item d-flex justify-content-center ">meta</p>
      </div>
      <div className="mt-4">
        <input
          type="email"
          className="form-control w-50 mx-auto bg-transparent  "
          id="exampleInputEmail1"
          placeholder="Enter email"
        />
        <p className="messagmail"></p>
      </div>
      <div className="password mt-4  ">
        <input
          type="password"
          className="form-control w-50 mx-auto bg-transparent"
          id="exampleInputPassword1"
        />
        <p className="messagepass"></p>
      </div>
      <div className="create-btn d-flex justify-content-center">
        <button className="btn btn-primary mt-4 w-25">Log in</button>
      </div>
      <p className="forgotten-mssg d-flex justify-content-center mt-4">
        {" "}
        Forgotten password ?
      </p>
      <div className="new-acct d-flex justify-content-center">
        <button className="new btn btn-outline-info position-fixed bottom-0  w-25 mb-4">
          Create new acount
        </button>
      </div>
    </div>
  );
};

export default login;
