import Images from "../Image";

interface Props {
  users: {
    image: string;
    name: string;
  };
}

const StoryCircle = ({ users }: Props) => {
  return (
    <div className="text-center">
      <div>
        <img
          src={users.image}
          alt={users.name}
          className=""
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
      </div>
      <small className="text-white">{users.name}</small>
    </div>
  );
};

export default StoryCircle;
