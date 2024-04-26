import BackgroundImage from "@/components/backgroundImage";
import scaleImage from "/public/scale.jpg";

const ScalePage = () => {
  return (
    <div>
      <h1 className="text-white">Scale</h1>
      <BackgroundImage img={scaleImage} description="car factory" />
    </div>
  );
};

export default ScalePage;
