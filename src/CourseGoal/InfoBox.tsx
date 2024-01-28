import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};
const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode == "hint") {
    return (
      <aside className="my-8 mx-0 p-2 text-center shadow-lg font-[0.85rem] rounded-md border-2 border-solid border-[#96f5f7] text-[#96f5f7]">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className="my-8 mx-0 p-2 text-center shadow-lg font-[0.85rem] rounded-md border-2 border-solid border-[#f64f4f] text-[#f64f4f]">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
