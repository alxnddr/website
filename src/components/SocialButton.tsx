import React from "react";

type Props = {
  url: string;
  children: React.ReactNode;
};

export const SocialButton = ({ url, children }: Props) => {
  return (
    <a
      href={url}
      target="blank"
      className="p-1 rounded hover:bg-gray-100 text-slate-800 font-bold transition-colors"
    >
      {children}
    </a>
  );
};
