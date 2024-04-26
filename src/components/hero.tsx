import BackgroundImage from "./backgroundImage"

import { HeroProps } from "@/app/utils/interfaces";



const Hero: React.FC<HeroProps> = ({title,imgObject}) => {
  return (
    <>
      <h1 className="text-white">{title}</h1>
      <BackgroundImage img={imgObject.img} description={imgObject.description} />
    </>
  );
};

export default Hero