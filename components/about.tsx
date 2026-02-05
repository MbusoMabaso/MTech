import { CheckCircle2 } from "lucide-react"

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Active Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime SLA" },
]

const highlights = [
  "Expert team of developers and security professionals",
  "Agile methodology for faster delivery",
  "24/7 support and maintenance services",
  "Industry-leading security practices",
  "Transparent communication and reporting",
  "Scalable solutions that grow with you"
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About MTech</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
              Where Deep Tech Meets Business Vision
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We are a collective of passionate technologists dedicated to delivering exceptional software solutions and protecting businesses from digital threats. Our human-centric approach ensures technology serves your unique goals.
            </p>
            
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="p-8 rounded-2xl bg-background border border-border text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
