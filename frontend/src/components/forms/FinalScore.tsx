interface FinalScoreProps {
  score: number;
}

export function FinalScore({ score }: FinalScoreProps) {
  return (
    <div className="bg-neutral-100 p-4 rounded-md mt-4">
      <div className="flex items-center gap-2">
        <span className="font-semibold">Nota Média Final</span>
        <span className="text-lg font-bold">{score.toFixed(1)}</span>
      </div>
      {score < 5 && (
        <p className="text-sm text-red-600 mt-1">
          Projetos com notas médias inferiores a 5,0 serão desclassificados.
        </p>
      )}
    </div>
  );
}
