import BackgroundImage from "@/components/backgroundImage";
import reliabilityImage from "/public/reliability.jpg";

const ReliabilityPage = () => {
  return (
    <div>
      <h1 className="text-white">Reliability</h1>
      <BackgroundImage img={reliabilityImage} description="car engine" />
    </div>
  );
};

export default ReliabilityPage;
