import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Empowering Innovation,{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Connecting Minds
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty max-w-2xl mx-auto">
            Join Nepal's most active student tech community at NCIT and be part of the future of technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 glow-effect">
              Explore More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Learn About Us
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-effect rounded-lg p-6 text-center">
              <Code className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-white/80 text-sm">Cutting-edge technology and creative solutions</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-white/80 text-sm">Connect with like-minded tech enthusiasts</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Growth</h3>
              <p className="text-white/80 text-sm">Accelerate your learning and career development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
