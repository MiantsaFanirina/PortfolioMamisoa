import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { en } from "@/locales/en";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: en.meta.title };
  return {
    title: `${project.title.en} | Mamisoa Hyacinthe`,
    description: project.summary.en,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <Navigation />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
