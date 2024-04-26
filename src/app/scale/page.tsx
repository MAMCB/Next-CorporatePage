import Image from "next/image";
import scaleImage from "/public/scale.jpg";

const ScalePage = () => {
  return (
    <div>
      <h1>Scale</h1>
        <Image src={scaleImage} alt="car factory" />
    </div>
  );
};

export default ScalePage;
