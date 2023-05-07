import React from "react";
import cn from "classnames";

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ title, className, children }: Props) => {
  return (
    <section className={cn("px-2 mx-auto max-w-2xl w-full py-4", className)}>
      {title != null ? <h4 className="font-bold mb-3">{title}</h4> : null}
      {children}
    </section>
  );
};
