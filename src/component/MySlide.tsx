interface Props {
  slide: {
    name: string;
    image: string;
    postImage: string;
    caption: string;
    likes: number;
    comments: number;
    shares: number;
    timeAgo: string;
  };
}

const MySlide = ({ slide }: Props) => {
  return (
    <>
      <div className="d-flex justify-content-between m-3">
        <div className="">
          <img
            src={slide.image}
            alt={slide.name}
            className="rounded-circle border  bg-white"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />
          <small className="m-4 text-white fw-bolder  ">{slide.name}</small>
        </div>
        <i className="fas fa-ellipsis-h text-white p-3"></i>
      </div>
      <div>
        <img src={slide.postImage} alt="" className=" w-100" />
      </div>
      <div className="fs-4 m-3 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-heart text-white"></i>
            <span className="text-white fs-6">{slide.likes}</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-comment text-white"></i>
            <span className="text-white fs-6">{slide.comments}</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <i className="fa-regular fa-paper-plane text-white gap-1"></i>
            <span className="text-white fs-6">{slide.shares}</span>
          </div>
        </div>
        <i className="fa-regular fa-bookmark p-3 text-white"></i>
      </div>
      <p className="text-white  m-3 mb-1">
        {slide.name} <span className=" fw-2 fs-8 mb-1">{slide.caption}</span>
        <p className="mb-1">{slide.timeAgo}</p>
      </p>
    </>
  );
};

export default MySlide;
