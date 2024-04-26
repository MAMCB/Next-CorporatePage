import BackgroundImage from "@/components/backgroundImage";
import homeImg from"/public/home.jpg";

export default function Home() {
 
  return (
    <div>
      <h1 className="text-white">Home Page</h1>
      <BackgroundImage img={homeImg} description="car factory" />
    </div>
  );
}
