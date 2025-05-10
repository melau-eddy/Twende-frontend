import React, { ReactNode } from 'react';

type TransitInfoProps = {
  title: string;
  details: string;
  icon: ReactNode;
};
export default function TransitInfoCard({ title, details, icon }: TransitInfoProps) {
  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <div className="flex flex-row gap-3">
        {icon}
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <p className="text-xs">{details}</p>
    </div>
  );
}
