import { ReactNode } from "react";

// type InfoBoxProps = {
//     mode: "hint" | "warning";
//     children: ReactNode;
//   };
// Discriminated Unions
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "high";
  children: ReactNode;
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;

// const InfoBox = ({ mode, children }: InfoBoxProps) => {
// can't destruct because of severity in only in one mode TYPE [Discriminated unions type]
const InfoBox = (props: InfoBoxProps) => {
  if (props.mode == "hint") {
    return (
      <aside className="my-8 mx-0 p-2 text-center shadow-lg font-[0.85rem] rounded-md border-2 border-solid border-[#96f5f7] text-[#96f5f7]">
        <p>{props.children}</p>
      </aside>
    );
  }
  return (
    <aside
      className={`my-8 mx-0 p-2 text-center shadow-lg font-[0.85rem] rounded-md border-2 border-solid ${
        props.severity == "high"
          ? "border-[#f64f4f] text-[#f64f4f]"
          : "border-[#f1f64f] text-[#f1f64f]"
      }`}
    >
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
};

export default InfoBox;
