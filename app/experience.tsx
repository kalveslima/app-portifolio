import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
   
    {
      company: "DESENVOLVEDOR-BACK",
      role: "Back-end Enginner",
    
      responsibilities: [
        "Desenvolvimento full-stack com foco em Node.js, React",
    "Adoção de metodologias ágeis, como Scrum e Kanban, para entrega contínua",
    "Desenvolvimento orientado a testes (TDD) para garantir qualidade e manutenibilidade do código",
    "Colaboração com equipes distribuídas para implementar soluções escaláveis",
    "Implementação de APIs eficientes e seguras",
    "Otimização de desempenho e boas práticas de clean code"
      ],
    },

    
  ]

  return (
    <section id="experience" className="py-13">
      <h2 className="text-3xl font-medium mx-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-700"> Experiencia </h2>
      <div className="space-y-4 text-lg text-neutral-600 leading-relaxed sm: gap-8 p-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.company}</CardTitle>
              <p className="text-neutral-600">{exp.role} • </p>
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

