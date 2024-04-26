
import homeImg from"/public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
 
  return (
    <>
      <Hero
        title="Professional Web Development"
        imgObject={{ img: homeImg, description: "car factory" }}
      />
    </>
  );
}
