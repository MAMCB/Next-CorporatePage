
import homeImg from"/public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
 
  return (
    <div>
      <Hero title="Home Page" imgObject={{img:homeImg,description:"car factory"}} />
     
    </div>
  );
}
