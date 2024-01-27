import { ReactNode } from "react";

type Props = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
const Header = ({ image, children }: Props) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <img src={image.src} alt={image.alt} className="w-20 h-20 rounded-xl" />
      <h1 className="m-0 text-2xl text-[#f7e596]">{children}</h1>
    </div>
  );
};

export default Header;
