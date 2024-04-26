
import  { StaticImageData } from "next/image";

export interface BackgroundImageProps {
  img: StaticImageData;
  description: string;
}
export interface HeroProps {
  title: string;
  imgObject: BackgroundImageProps;
}
