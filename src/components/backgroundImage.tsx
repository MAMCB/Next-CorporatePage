import Image, { StaticImageData } from "next/image";

interface BackgroundImageProps {
    img: StaticImageData;
    description: string;
    }

const BackgroundImage:React.FC<BackgroundImageProps> = ({img,description }) => {
  return (
    <div className="absolute -z-10 inset-0">
      <Image src={img} alt={description} fill style={{ objectFit: "cover" }} />
    </div>
  );
};

export default BackgroundImage;
