import Hero from "@/components/hero";
import scaleImage from "/public/scale.jpg";

const ScalePage = () => {
  return (
    <>
        <Hero title="Scale your app to infinity" imgObject={{ img: scaleImage, description: "steel factory" }} />
     
    </>
  );
};

export default ScalePage;
