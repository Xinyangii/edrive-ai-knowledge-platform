import { notFound } from "next/navigation";
import { KnowledgeDetailView } from "../../../components/knowledge-detail";
import { DirectionDetailView } from "../../../components/direction-detail";
import { modelKnowledge } from "../../../content/knowledge";
import { directionSlugs, modelDirections } from "../../../content/model-directions";

const allSlugs = [...Object.keys(modelKnowledge), ...directionSlugs];

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export default async function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (modelKnowledge[slug]) {
    return <KnowledgeDetailView detail={modelKnowledge[slug]} />;
  }

  const direction = modelDirections.find((d) => d.slug === slug);
  if (direction) {
    return <DirectionDetailView detail={direction} />;
  }

  notFound();
}
