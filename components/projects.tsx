import { ArrowUpRight } from "lucide-react"

const projects = [

  {
    title: "MediBillz",
    category: "HealthTech SaaS",
    description: "A comprehensive medical billing ecosystem featuring complex data logic, healthcare revenue cycle management, and secure portal access.",
    tags: ["Next.js", "SaaS", "Medical"],
    href: "https://medibillz.vercel.app"
  },
  {
    title: "Ruimsig Mobile",
    category: "Mobile App & Automotive",
    description: "On-demand automotive service platform featuring geolocation, real-time repair tracking, and secure mobile payment processing.",
    tags: ["React Native", "Logistics", "Mobile"],
    href: "https://ruimsigmobile.vercel.app" 
  },
  {
    title: "Ruutz",
    category: "Digital Experience",
    description: "A high-performance web platform focused on modern architecture, refined UI/UX, and scalable growth tools for digital products.",
    tags: ["Next.js", "Tailwind", "Product"],
    href: "https://ruutz.vercel.app"
  },
    {
    title: "OpSec Technologies",
    category: "Cybersecurity & Infrastructure",
    description: "Enterprise-grade security portal specializing in decentralized protection, real-time threat monitoring, and encrypted data layers.",
    tags: ["Security", "Infrastructure", "Enterprise"],
    href: "https://opsectechnologies.vercel.app"
  },
  {
    title: "VisionaryCast",
    category: "Media & Content",
    description: "A media-rich content distribution platform for digital broadcasting, featuring high-fidelity audio/video streaming and content tagging.",
    tags: ["Streaming", "Next.js", "Media"],
    href: "https://visionarycast.vercel.app"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Work</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Explore how we help businesses transform through innovative technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a 
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 block no-underline ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <div 
                  className="p-3 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}