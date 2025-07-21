interface Props {
  users: {
    image: string;
    name: string;
  };
}

const StoryCircle = ({ users }: Props) => {
  return (
    <div className="text-center  m-3">
      <div>
        <img
          src={users.image}
          alt={users.name}
          className="rounded-circle border border-danger border-3 bg-white "
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div></div>
      </div>
      <div className="">
        <small className="text-white fw-bolder  ">{users.name}</small>
      </div>
    </div>
  );
};

export default StoryCircle;
