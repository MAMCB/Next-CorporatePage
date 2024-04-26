import Hero from "@/components/hero";
import scaleImage from "/public/scale.jpg";

const ScalePage = () => {
  return (
    <div>
        <Hero title="Scale" imgObject={{ img: scaleImage, description: "car factory" }} />
     
    </div>
  );
};

export default ScalePage;
