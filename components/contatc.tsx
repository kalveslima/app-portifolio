import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-medium mx-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-600">Get in touch</h2>
      <div className="space-y-6">
        <p className="text-lg text-neutral-600">Estou sempre aberto a novas oportunidades e colaborações. 
        Sinta-se à vontade para entrar em contato se desejar se conectar!
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/kalveslima" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/kauan-lima-4400b931a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:k.alves1427@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

