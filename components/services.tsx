import { 
  Smartphone, 
  Globe, 
  Shield, 
  Lock, 
  Code2, 
  Database,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built with the latest technologies. iOS, Android, and hybrid solutions tailored to your needs.",
    features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Deployment"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications. From corporate sites to complex enterprise solutions using cutting-edge frameworks.",
    features: ["Responsive Design", "E-Commerce", "Custom CMS", "API Integration"]
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Comprehensive security assessments and consulting services to protect your digital assets from evolving threats.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"]
  },
  {
    icon: Lock,
    title: "Security Implementation",
    description: "End-to-end security solutions including encryption, authentication systems, and secure infrastructure design.",
    features: ["Encryption", "Authentication", "Firewall Config", "Secure Architecture"]
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke software solutions designed to streamline your business operations and drive efficiency.",
    features: ["Enterprise Software", "Automation", "Integration", "Maintenance"]
  },
  {
    icon: Database,
    title: "Cloud Solutions",
    description: "Secure cloud migration and management services. Scalable infrastructure designed for performance and reliability.",
    features: ["Cloud Migration", "AWS/Azure/GCP", "DevOps", "Monitoring"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Comprehensive technology solutions spanning development and security to help businesses transform and thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li 
                    key={feature}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                type="button"
                className="mt-6 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
