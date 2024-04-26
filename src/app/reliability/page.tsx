import Hero from "@/components/hero";
import reliabilityImage from "/public/reliability.jpg";

const ReliabilityPage = () => {
  return (
    <div>
        <Hero title="Reliability" imgObject={{ img: reliabilityImage, description: "car engine" }} />
    
    </div>
  );
};

export default ReliabilityPage;
