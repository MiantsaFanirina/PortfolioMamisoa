import * as React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";

export function Section({
  id,
  children,
  className = "",
  surface = "ink",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  surface?: "ink" | "paper";
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${surface === "paper" ? "surface-paper" : "surface-ink"} ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  index,
  tone = "ink",
}: {
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  index?: string;
  tone?: "ink" | "paper";
}) {
  const muted = tone === "paper" ? "text-ink/55" : "text-muted";
  return (
    <Reveal
      className={`${
        align === "center" ? "text-center mx-auto max-w-prose" : "max-w-edge"
      }`}
    >
      <div
        className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="label-mono">{label}</span>
        {index && (
          <span className={`font-mono text-fluid-xs ${muted}`}>{index}</span>
        )}
        <span
          className={`h-px flex-1 ${tone === "paper" ? "bg-ink/20" : "bg-paper/15"} ${
            align === "center" ? "max-w-[80px]" : "max-w-[120px]"
          }`}
        />
      </div>
      <SplitText
        as="h2"
        text={title}
        className={`mt-21 font-display font-medium leading-[0.98] text-fluid-3xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {intro && (
        <p className={`mt-13 ${muted} text-fluid-base max-w-prose ${align === "center" ? "mx-auto" : ""}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
