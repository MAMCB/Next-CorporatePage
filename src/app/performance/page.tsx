import Image from "next/image";
import performanceImage from "/public/performance.jpg";

const PerformancePage = () => {
  return (
    <div>
      <h1>Performance</h1>
        <Image src={performanceImage} alt="car racing" />
    </div>
  );
};

export default PerformancePage;
