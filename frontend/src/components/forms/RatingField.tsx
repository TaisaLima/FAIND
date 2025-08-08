import React from "react";

interface RatingFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function RatingField({ label, value, onChange }: RatingFieldProps) {
  return (
    <label className="flex flex-col flex-1">
      <span className="text-sm font-medium mb-1">{label}</span>
      <input
        type="number"
        min={0}
        max={10}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border rounded px-2 py-1 text-center"
      />
    </label>
  );
}
