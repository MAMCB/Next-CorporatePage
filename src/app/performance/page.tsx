import Hero from "@/components/hero";
import performanceImage from "/public/performance.jpg";

const PerformancePage = () => {
  return (
    <>
      <Hero
        title="We serve high performance applications"
        imgObject={{ img: performanceImage, description: "welding" }}
      />
    </>
  );
};

export default PerformancePage;
