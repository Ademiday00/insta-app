import StoryCircle from "./StoryCircle";
import users from "../data/users";

const Stories = () => {
  return (
    <>
      <div className=" d-flex">
        {users.map((users, index) => (
          <StoryCircle key={index} users={users} />
        ))}
      </div>
    </>
  );
};

export default Stories;
