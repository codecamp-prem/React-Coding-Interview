// Note: ComponentPropsWithoutRef only allows attribute set in it's Generic type
// suppose passing href in button will be error.
// get links or button

import { ComponentPropsWithoutRef } from "react";

const btnCss =
  "font-mono p-2 rounded-md border border-solid border-[#338196] bg-[#338196] text-white cursor-pointer hover:bg-[#217086] active:bg-[#217089]";

// type AnchorProps = { el: "anchor"; } & ComponentPropsWithoutRef<"a">;
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

//type ButtonProps = { el: "button" } & ComponentPropsWithoutRef<"button">;
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return "href" in props;
}

const Button = (props: AnchorProps | ButtonProps) => {
  if (isAnchorProps(props)) {
    return (
      <a
        {...props}
        className={`underline hover:underline-offset-4 ${btnCss}`}
      ></a>
    );
  }
  return <button {...props} className={btnCss}></button>;
};

export default Button;
