import Image from "next/image";
import reliabilityImage from "/public/reliability.jpg";

const ReliabilityPage = () => {
  return (
    <div>
      <h1>Reliability</h1>
        <Image src={reliabilityImage} alt="car engine" />
    </div>
  );
};

export default ReliabilityPage;
