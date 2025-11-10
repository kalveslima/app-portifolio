import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    'TypeScript', 'Github', 'Node.js','Java','SQLite',
    'Git', 'Docker', 'REST APIs','Python','Power BI','Excel','SQL',
  ]

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-medium mx-2 mx-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">Skills</h2>
      <div className="flex flex-wrap gap-5">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

