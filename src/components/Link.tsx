import React, { AnchorHTMLAttributes } from "react";
import cn from "classnames";

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ className, ...rest }: Props) => {
  return (
    <a className={cn("underline underline-offset-4", className)} {...rest} />
  );
};
