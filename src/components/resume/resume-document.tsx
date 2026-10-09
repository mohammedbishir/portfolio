import {
  education,
  experience,
  profile,
  resumeProjects,
  skillGroups,
} from "@/data/portfolio";

/** Classic single-column CV matching the IBM-style resume PDF. */
export function ResumeDocument() {
  return (
    <article className="resume-sheet mx-auto w-full max-w-[800px] bg-white px-8 py-10 text-[#1f2937] sm:px-12 sm:py-12">
      <header className="border-0 text-center">
        <h1 className="text-[1.65rem] font-bold leading-tight tracking-tight text-[#1e3a5f] sm:text-[1.85rem]">
          {profile.name}
        </h1>
        <p className="mt-2 text-[0.92rem] text-[#374151]">
          {profile.title}{" "}
          <span className="text-[#6b7280]">|</span> {profile.headline}
        </p>
        <p className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.8rem] text-[#4b5563]">
          <a
            href={`mailto:${profile.email}`}
            className="text-[#1e3a5f] underline underline-offset-2"
          >
            {profile.email}
          </a>
          <span className="text-[#9ca3af]" aria-hidden>
            |
          </span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <span className="text-[#9ca3af]" aria-hidden>
            |
          </span>
          <span>{profile.location}</span>
          <span className="text-[#9ca3af]" aria-hidden>
            |
          </span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e3a5f] underline underline-offset-2"
          >
            LinkedIn
          </a>
          <span className="text-[#9ca3af]" aria-hidden>
            |
          </span>
          <a
            href={profile.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e3a5f] underline underline-offset-2"
          >
            {profile.domain}
          </a>
        </p>
      </header>

      <section className="mt-7">
        <ResumeHeading>Professional Summary</ResumeHeading>
        <p className="text-[0.84rem] leading-[1.55] text-[#374151]">
          {profile.summary}
        </p>
      </section>

      <section className="mt-5">
        <ResumeHeading>Technical Skills</ResumeHeading>
        <div className="space-y-1.5 text-[0.84rem] leading-[1.5]">
          {skillGroups.map((group) => (
            <p key={group.label}>
              <span className="font-bold text-[#111827]">{group.label}:</span>{" "}
              <span className="text-[#374151]">{group.items.join(", ")}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <ResumeHeading>Professional Experience</ResumeHeading>
        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`} className="mt-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-[0.88rem] font-bold text-[#111827]">
                {job.role}, {job.company}
              </p>
              <p className="shrink-0 text-[0.82rem] text-[#6b7280]">
                {job.period}
              </p>
            </div>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.84rem] leading-[1.5] text-[#374151]">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-5">
        <ResumeHeading>Key Projects</ResumeHeading>
        <div className="space-y-3">
          {resumeProjects.map((project) => (
            <div key={project.title}>
              <p className="text-[0.88rem] leading-[1.45]">
                <span className="font-bold text-[#111827]">{project.title}</span>
                <span className="text-[#6b7280]"> | </span>
                <span className="italic text-[#4b5563]">{project.stack}</span>
              </p>
              <ul className="mt-1 list-disc pl-5 text-[0.84rem] leading-[1.5] text-[#374151]">
                <li>{project.summary}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <ResumeHeading>Education</ResumeHeading>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-[0.88rem] font-bold text-[#111827]">
            {education.degree}, {education.college}, {education.university}
          </p>
          <p className="shrink-0 text-[0.82rem] text-[#6b7280]">
            {education.period}
          </p>
        </div>
      </section>

      <section className="mt-5">
        <ResumeHeading>Languages</ResumeHeading>
        <p className="text-[0.84rem] text-[#374151]">
          {profile.languages.join(", ")}
        </p>
      </section>
    </article>
  );
}

function ResumeHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-2.5 border-b border-[#1e3a5f] pb-1 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-[#1e3a5f]">
      {children}
    </h2>
  );
}
