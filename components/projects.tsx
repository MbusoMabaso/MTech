import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "FinSecure Banking App",
    category: "Mobile App & Security",
    description: "A secure mobile banking application with biometric authentication and end-to-end encryption.",
    tags: ["React Native", "Security", "FinTech"]
  },
  {
    title: "MedPortal Healthcare",
    category: "Web Development",
    description: "HIPAA-compliant patient management system with secure data handling and telemedicine integration.",
    tags: ["Next.js", "Healthcare", "Compliance"]
  },
  {
    title: "RetailMax E-Commerce",
    category: "Web & Mobile",
    description: "Full-stack e-commerce platform with real-time inventory, payment processing, and mobile apps.",
    tags: ["E-Commerce", "API", "Mobile"]
  },
  {
    title: "CyberShield Assessment",
    category: "Cybersecurity",
    description: "Comprehensive security audit and penetration testing for a Fortune 500 company.",
    tags: ["Pen Testing", "Audit", "Enterprise"]
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
            <div 
              key={project.title}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
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
                <button 
                  type="button"
                  className="p-3 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  aria-label={`View ${project.title} project`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
