import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Code, Smartphone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              Software Development & Cybersecurity
            </span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-tight">
            Building Digital Solutions.{" "}
            <span className="text-primary">Securing Your Future.</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            MTech delivers cutting-edge mobile applications, web development, and comprehensive cybersecurity consulting to protect and grow your business.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="p-3 rounded-lg bg-primary/10">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Web Development</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Cybersecurity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
