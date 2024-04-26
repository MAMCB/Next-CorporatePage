import BackgroundImage from "./backgroundImage"

import { HeroProps } from "@/app/utils/interfaces";



const Hero: React.FC<HeroProps> = ({title,imgObject}) => {
  return (
    <div className="relative h-screen">
      <BackgroundImage
        img={imgObject.img}
        description={imgObject.description}
      />
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
};

export default Hero