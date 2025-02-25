import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      company: "freelancer",
      role: "Front-end Engineer",
      period: "2021 - 2023",
      responsibilities: [
        "desenvolvimento de aplicações usando react e typeScript entre outras tecnologias",
        "implementações resposivas com acessibilidade ",
        "",
      ],
    },
    {
      company: "Thoughtworks",
      role: "Software Engineer",
      period: "2019 - 2021",
      responsibilities: [
        "Full-stack development using Node.js and React",
        "Agile methodologies and test-driven development",
        "Collaboration with distributed teams",
      ],
    },
    {
      company: "",
      role: "",
      period: "",
      responsibilities: [
        "Front-end development with JavaScript and React",
        "Integration with REST APIs",
        "Performance optimization",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-medium mx-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Experiencia</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.company}</CardTitle>
              <p className="text-neutral-600">{exp.role} • {exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-neutral-600 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

