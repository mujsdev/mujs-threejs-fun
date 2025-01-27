import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { projects } from "@/lib/constants";

export function ProjectsList() {
  return (
    <div className="space-y-2">
      <h2 className="caption">mujs threejs fun</h2>
      <ol className="space-y-6">
        {projects.map((project, index) => {
          return (
            <li className="space-y-1" key={index}>
              <div className="flex items-center gap-4">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external"
                >
                  {project.title}
                </Link>

                <div className="space-x-1">
                  {project.badges.map((badge, index) => (
                    <Badge key={index} variant={"secondary"}>
                      <span>{badge}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground">{project.description}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
