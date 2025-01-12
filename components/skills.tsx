import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML', 'CSS',
    'Git', 'AWS', 'Docker', 'REST APIs'
  ]

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-medium mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

