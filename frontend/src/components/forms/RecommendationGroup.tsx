interface RecommendationGroupProps {
  value: string;
  onChange: (value: string) => void;
}

export function RecommendationGroup({ value, onChange }: RecommendationGroupProps) {
  const options = ["Pré-incubação", "Incubação", "Associação"];
  return (
    <div className="mt-4">
      <span className="block text-sm font-medium mb-2">Recomendação de Encaminhamento</span>
      <div className="flex gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="radio"
              checked={value === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
