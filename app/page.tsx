import { ProjectsList } from "@/components/projects-list";

export default function Home() {
  return (
    <main className="text-balance space-y-12 font-[400] relative">
      <div className="mx-auto mt-16 max-w-[600px] py-0 px-[var(--lineHeight)] leading-[var(--lineHeight)]">
        <ProjectsList />
      </div>
    </main>
  );
}
