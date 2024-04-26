import BackgroundImage from "@/components/backgroundImage";
import performanceImage from "/public/performance.jpg";

const PerformancePage = () => {
  return (
    <div>
      <h1 className="text-white">Performance</h1>
      <BackgroundImage img={performanceImage} description="car racing" />
    </div>
  );
};

export default PerformancePage;
