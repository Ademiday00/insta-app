import Slide from "../data/Slide";
import MySlide from "./MySlide";

const AnoSlide = () => {
  return (
    <div>
      {Slide.map((slide, index) => (
        <MySlide key={index} slide={slide} />
      ))}
    </div>
  );
};

export default AnoSlide;
