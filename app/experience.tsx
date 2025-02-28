import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      company: "DESENVOLVEDOR-FRONT",
      role: "Front-end Engineer",
      period: "",
      responsibilities: [
        "desenvolvimento de aplicações usando react e typeScript entre outras tecnologias",
        "implementações resposivas com acessibilidade ",
        "",
      ],
    },
    {
      company: "DESENVOLVEDOR-BACK",
      role: "Back-end Enginner",
      period: "",
      responsibilities: [
        "Desenvolvimento full-stack com foco em Node.js, React",
    "Adoção de metodologias ágeis, como Scrum e Kanban, para entrega contínua",
    "Desenvolvimento orientado a testes (TDD) para garantir qualidade e manutenibilidade do código",
    "Colaboração com equipes distribuídas para implementar soluções escaláveis",
    "Implementação de APIs eficientes e seguras",
    "Otimização de desempenho e boas práticas de clean code"
      ],
    },
    {
      company: "CYBER SECURITY",
      role: "Segurança da Informação",
      period: "",
      responsibilities: [
        "Experiência com análise de tráfego de rede e monitoramento de ameaças",
    "Conhecimento prático em ataques e defesas cibernéticas, incluindo varreduras de portas e exploração de vulnerabilidades",
    "Desenvolvimento de ferramentas de segurança usando Python para automação de testes",
    "Implementação de medidas de hardening em servidores e aplicações",
    "Participação em CTFs e estudos sobre exploração de falhas de segurança",
    "Familiaridade com frameworks e ferramentas como Nmap, Wireshark e Metasploit"
      ],
    },
  ]

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-medium mx-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Experiencia</h2>
      <div className="space-y-4">
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

