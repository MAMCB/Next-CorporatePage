import Hero from "@/components/hero";
import performanceImage from "/public/performance.jpg";

const PerformancePage = () => {
  return (
    <div>
        <Hero title="Performance" imgObject={{img:performanceImage,description:"car racing"}} />
     
    </div>
  );
};

export default PerformancePage;
