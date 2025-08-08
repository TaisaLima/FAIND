import React, { ChangeEvent } from "react";

interface SliderInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  id,
  label,
  value,
  onChange,
  min = 0,
  max = 10,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="mb-6">
      <p className="text-neutral-700 mb-1">{label}</p>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-neutral-600 mt-1">
        {Array.from({ length: max - min + 1 }, (_, i) => (
          <span key={i}>{i + min}</span>
        ))}
      </div>
    </div>
  );
};
