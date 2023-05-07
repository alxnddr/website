import React from "react";

type Props = {
  title: string;
  details: React.ReactNode;
  startYear: number;
  endYear?: number;
};

export const ActivityItem = ({ title, details, startYear, endYear }: Props) => {
  return (
    <div>
      <div className="flex justify-between flex-col sm:flex-row">
        <span className="font-medium">{title}</span>{" "}
        <span className="text-sm text-gray-500">
          {startYear} — {endYear ?? "Present"}
        </span>
      </div>

      <div className="text-sm text-gray-500 ">{details}</div>
    </div>
  );
};
