interface FormActionsProps {
  onCancel: () => void;
  onSave: () => void;
}

export function FormActions({ onCancel, onSave }: FormActionsProps) {
  return (
    <div className="flex justify-end gap-4 mt-6">
      <button
        onClick={onCancel}
        className="px-4 py-2 border border-neutral-300 rounded-md text-neutral-700"
      >
        Cancelar
      </button>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-neutral-900 text-white rounded-md"
      >
        Salvar Avaliação
      </button>
    </div>
  );
}
