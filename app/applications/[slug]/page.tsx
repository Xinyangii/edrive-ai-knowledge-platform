import { notFound } from "next/navigation";
import { KnowledgeDetailView } from "../../../components/knowledge-detail";
import { applicationKnowledge } from "../../../content/knowledge";

export function generateStaticParams() {
  return Object.keys(applicationKnowledge).map((slug) => ({ slug }));
}

export default async function ApplicationKnowledgePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = applicationKnowledge[slug];
  if (!detail) notFound();
  return <KnowledgeDetailView detail={detail} />;
}
