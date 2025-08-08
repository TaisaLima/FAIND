interface CommentsBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export function CommentsBox({ value, onChange }: CommentsBoxProps) {
  return (
    <div className="mt-4">
      <span className="block text-sm font-medium mb-2">Comentários do Avaliador(a)</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite suas observações e justificativas..."
        className="border rounded w-full p-2"
        rows={4}
      />
    </div>
  );
}
