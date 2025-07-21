interface Props {
  picture: {
    name: string;
    url: string;
  };
}

const MyProfile = ({ picture }: Props) => {
  return (
    <div className=" container-fluid px-0 row g-0">
      <div className=" col-4 p-0 w-100">
        <img
          src={picture.url}
          alt={picture.name}
          className=" img-fluid w-100"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default MyProfile;
