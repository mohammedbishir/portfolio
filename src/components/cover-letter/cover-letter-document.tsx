import { coverLetter, profile } from "@/data/portfolio";

export function CoverLetterDocument() {
  return (
    <article className="resume-sheet mx-auto w-full max-w-[800px] bg-white px-8 py-10 text-[#1f2937] sm:px-12 sm:py-12">
      <header className="space-y-1 border-b border-[#e5e7eb] pb-5">
        <h1 className="text-[1.35rem] font-bold tracking-tight text-[#1e3a5f]">
          {profile.name}
        </h1>
        <p className="text-[0.92rem] text-[#374151]">{profile.title}</p>
        <p className="text-[0.84rem] text-[#4b5563]">{profile.location}</p>
        <p className="text-[0.84rem] text-[#4b5563]">
          <a
            href={`mailto:${profile.email}`}
            className="text-[#1e3a5f] underline underline-offset-2"
          >
            {profile.email}
          </a>
          {" · "}
          {profile.phone}
        </p>
      </header>

      <div className="mt-6 space-y-1 text-[0.92rem] text-[#374151]">
        <p>Hiring Manager</p>
        <p className="italic text-[#6b7280]">
          [Company Name] — {coverLetter.roleFocus}
        </p>
      </div>

      <div className="mt-6 space-y-4 text-[0.95rem] leading-7 text-[#374151]">
        <p>{coverLetter.greeting}</p>
        {coverLetter.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <div className="pt-2">
          <p>{coverLetter.closing}</p>
          <p className="mt-5 font-bold text-[#1e3a5f]">{profile.name}</p>
          <p className="text-[#4b5563]">{profile.title}</p>
        </div>
      </div>
    </article>
  );
}
