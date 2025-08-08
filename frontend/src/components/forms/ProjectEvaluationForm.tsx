import { useState } from "react";
import { RatingField } from "../components/RatingField";
import { FinalScore } from "../components/FinalScore";
import { RecommendationGroup } from "../components/RecommendationGroup";
import { CommentsBox } from "../components/CommentsBox";
import { FormActions } from "../components/FormActions";

export default function ProjectEvaluationForm() {
  const [scores, setScores] = useState({
    emp: 0,
    tec: 0,
    mer: 0,
    ges: 0,
    cap: 0,
  });
  const [recommendation, setRecommendation] = useState("");
  const [comments, setComments] = useState("");

  const averageScore =
    Object.values(scores).reduce((sum, val) => sum + val, 0) /
    Object.keys(scores).length;

  const handleScoreChange = (key: keyof typeof scores, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-[#f2f0f0] flex justify-center min-h-screen p-10">
      <div className="bg-white rounded-lg shadow p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-semibold mb-2">
          Formulário de avaliação de projetos
        </h1>
        <p className="text-neutral-600 mb-6">
          Por favor complete todas as seções para submeter sua avaliação
        </p>

        <div className="grid grid-cols-2 gap-4">
          <RatingField
            label="EMP (Empreendedorismo)"
            value={scores.emp}
            onChange={(v) => handleScoreChange("emp", v)}
          />
          <RatingField
            label="TEC (Tecnologia)"
            value={scores.tec}
            onChange={(v) => handleScoreChange("tec", v)}
          />
          <RatingField
            label="MER (Mercado)"
            value={scores.mer}
            onChange={(v) => handleScoreChange("mer", v)}
          />
          <RatingField
            label="GES (Gestão)"
            value={scores.ges}
            onChange={(v) => handleScoreChange("ges", v)}
          />
          <RatingField
            label="CAP (Capacitação)"
            value={scores.cap}
            onChange={(v) => handleScoreChange("cap", v)}
          />
        </div>

        <FinalScore score={averageScore} />
        <RecommendationGroup
          value={recommendation}
          onChange={setRecommendation}
        />
        <CommentsBox value={comments} onChange={setComments} />
        <FormActions
          onCancel={() => console.log("Cancelado")}
          onSave={() => console.log("Salvo")}
        />
      </div>
    </div>
  );
}
