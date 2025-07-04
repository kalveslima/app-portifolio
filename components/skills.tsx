import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    'TypeScript', 'React', 'Node.js','Java',
    'Git', 'AWS', 'Docker', 'REST APIs','Python','Nmap','Wireshark ',' Metasploit','Power BI','Excel','SQL',
  ]

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-medium mx-2 mx-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Skills</h2>
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

