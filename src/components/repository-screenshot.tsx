"use client";
import { useState } from "react";
import Image from "next/image";
import { ProjectVisual } from "./project-visual";
import type { Visual } from "@/data/projects";

export function RepositoryScreenshot({
  url,
  alt,
  variant,
  thumbnail = false,
}: {
  url: string;
  alt: string;
  variant: Visual;
  thumbnail?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div>
      <ProjectVisual variant={variant} />
      <p className="screenshot-fallback-note">
        The repository screenshot is unavailable. Conceptual illustration shown
        instead.
      </p>
    </div>
  ) : (
    <Image
      src={url}
      alt={alt}
      width={variant === "workflow" ? 1634 : variant === "security" ? 1090 : 897}
      height={variant === "workflow" ? 498 : variant === "security" ? 615 : 675}
      className={thumbnail ? "project-screenshot" : undefined}
      sizes={
        thumbnail
          ? "(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) 70vw, 900px"
          : "(max-width: 600px) calc(100vw - 40px), 75vw"
      }
      unoptimized={!url.startsWith("/")}
      onError={() => setFailed(true)}
    />
  );
}
