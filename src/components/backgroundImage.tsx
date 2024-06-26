import Image from "next/image";
import { BackgroundImageProps } from "@/app/utils/interfaces";


const BackgroundImage:React.FC<BackgroundImageProps> = ({img,description }) => {
  return (
    <div className="absolute -z-10 inset-0">
      <Image src={img} alt={description} fill style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
    </div>
  );
};

export default BackgroundImage;
