import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function HomePage() {
  const skills = [
    {
      title: "Programming Languages",
      items: ["Python", "TypeScript", "Java", "C++", "Solidity"],
    },
    {
      title: "Frameworks & Tools",
      items: [
        "Django",
        "Flask",
        "TensorFlow",
        "FastAPI",
        "Springboot",
        "Next.js",
        "React.js",
        "React Native",
      ],
    },
    {
      title: "Languages",
      items: ["Arabic (Native)", "English (C2)", "French (Conversational)"],
    },
  ];

  const education = [
    {
      degree: "Integrated Preparatory Cycle",
      institution: "Institute of Computer Science and Multimedia, Sfax",
    },
    {
      degree: "National Engineering Degree",
      institution: "Institute of Computer Science and Mathematics, Monastir",
    },
  ];

  const certifications = [
    {
      title: "Fundamentals of Quantum Programming",
      provider: "Qworld & University of Latvia",
      duration: "6-month course",
    },
    {
      title: "Agile with Atlassian Jira",
      provider: "Coursera",
      duration: "Agile development course using Jira",
    },
    {
      title: "Solidity",
      provider: "Coursera",
      duration: "Smart contract development course",
    },
  ];

  const experiences = [
    {
      role: "Intern",
      company: "Fattouma Bourguiba University Hospital, Monastir",
      year: "July 2022",
      tasks: [
        "Developed a leave management system.",
        "Understood various administrative business processes.",
      ],
    },
    {
      role: "Intern",
      company: "GPro Consulting, Sousse",
      year: "July - August 2023",
      tasks: [
        "Designed and developed an industrial maintenance management system.",
      ],
    },
    {
      role: "Web Developer",
      company: "Upwork (Remote)",
      year: "2024",
      tasks: ["Collaborated with a team to design and deliver web solutions."],
    },
    {
      role: "Software Engineer",
      company: "Upwork (Remote)",
      year: "2024",
      tasks: [
        "Co-managed a team to create a software solution.",
        "Designed ML models for automating business processes.",
      ],
    },
  ];

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Avatar>
        <AvatarImage
          className="rounded-full h-40 w-40 md:h-64 md:w-64"
          src="../assets/avatar.png"
        />
        <AvatarFallback className="rounded-full">YB</AvatarFallback>
      </Avatar>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl  text-[#d000ff] font-extrabold leading-tight tracking-tighter md:text-4xl line-clamp-3">
          I have been impressed with the urgency of doing. Knowing is not
          enough; we must apply. Being willing is not enough; we must do.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Leonardo da Vinci
        </p>
      </div>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-4 pb-2 text-[#3000bf] border-[#3000bf]">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {skills.map((category, index) => (
            <div key={index} className="p-4 bg-background shadow rounded-lg">
              <h3 className="text-lg font-medium text-primary">
                {category.title}
              </h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2 text-accent">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-4 pb-2 text-[#3000bf] border-[#3000bf]">
          Education
        </h2>
        <ul className="mt-4 space-y-3">
          {education.map((edu, index) => (
            <li key={index} className="p-4 bg-background shadow rounded-lg">
              <strong className="text-primary">{edu.degree}</strong> <br />
              <span className="text-muted-foreground">{edu.institution}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-4 pb-2 text-[#3000bf] border-[#3000bf]">
          Certifications
        </h2>
        <ul className="mt-4 space-y-3">
          {certifications.map((cert, index) => (
            <li key={index} className="p-4 bg-background shadow rounded-lg">
              <strong className="text-primary">{cert.title}</strong> <br />
              <span className="text-muted-foreground">
                {cert.provider} - {cert.duration}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b-4 pb-2 text-[#3000bf] border-[#3000bf]">
          Professional Experience
        </h2>
        <div className="mt-4 space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="p-4 bg-background shadow rounded-lg">
              <h3 className="text-lg font-medium text-primary">
                {exp.role} at {exp.company}
              </h3>
              <span className="text-muted-foreground text-sm">{exp.year}</span>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2 text-accent">•</span> {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
