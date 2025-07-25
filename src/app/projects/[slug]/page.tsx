import { projectsData } from "@/data/projectsData";
import { slugify } from "@/lib/slugify";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailsClient";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: slugify(project.name),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectsData.find((p) => slugify(p.name) === slug);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}
